import r from 'rethinkdb'
import isDefined from 'mini-dash/isDefined'
import head from 'mini-dash/head'
import { augment } from './utils'

const UPDATE_LIMIT = 60 // changes in the last 1 minute will be updates
const TABLE = 'vitals'

const objectify = grouped => grouped.reduce((object, { group, reduction }) => {
  object[group] = reduction
  return object
}, {})

const firstChange = ({ changes }) => changes[0].new_val

export function vitalsForPatient(connection, patientId, types = [], args = {}) {
  const query = augment(
    r.table(TABLE)
      .filter(record => record('patientId').eq(patientId))
      .filter(record => r.expr(types).contains(record('type')))
      .group('type')
      .orderBy(r.asc('date')),
    args
  )
  return query.coerceTo('array')
    .run(connection)
    .then(objectify)
}

export function vitalsOfType(connection, patientId, type, args = {}) {
  return augment(
    r.table(TABLE)
      .filter({ patientId, type })
      .orderBy(r.asc('date')),
    args
  ).coerceTo('array')
    .run(connection)
}

export function findById(connection, id) {
  return r.table(TABLE)
    .filter({ id })
    .coerceTo('array')
    .run(connection)
    .then(head)
}

export function updateVitals(connection, id, {type, value, unit}) {
  return r.table(TABLE)
    .filter({ id })
    .update({ type, value, unit, date: r.now() }, { returnChanges: true })
    .run(connection)
    .then(firstChange)
}

export function createVitals(connection, patientId, {type, value, unit}) {
  return r.table(TABLE)
    .insert({ patientId, type, value, unit, date: r.now() }, { returnChanges: true })
    .run(connection)
    .then(firstChange)
}

export function addVitals(connection, patientId, record) {
  return r.table(TABLE)
    .filter({ patientId, type: record.type })
    .filter(row => r.now().sub(row('date')).lt(UPDATE_LIMIT))
    .orderBy('date')
    .coerceTo('array')
    .run(connection)
    .then(([row]) => isDefined(row)
      ? updateVitals(connection, row.id, record)
      : createVitals(connection, patientId, record)
    )
}

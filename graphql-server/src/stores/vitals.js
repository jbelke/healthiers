import r from 'rethinkdb'
import isDefined from 'mini-dash/isDefined'
import head from 'mini-dash/head'

const UPDATE_LIMIT = 60 * 5
const TABLE = 'vitals'

const objectify = grouped => grouped.reduce((object, { group, reduction }) => {
  object[group] = reduction
  return object
}, {})

const firstChange = ({ changes }) => changes[0].new_val

export function vitalsForPatient(connection, patientId, types = []) {
  return r.table(TABLE)
    .filter(record => record('patientId').eq(patientId))
    .filter(record => r.expr(types).contains(record('type')))
    .group('type')
    .coerceTo('array')
    .run(connection)
    .then(objectify)
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
    .filter(row => r.now().sub(row('date')).gt(UPDATE_LIMIT))
    .coerceTo('array')
    .run(connection)
    .then(([row]) => isDefined(row)
      ? updateVitals(connection, row.id, record)
      : createVitals(connection, patientId, record))
}

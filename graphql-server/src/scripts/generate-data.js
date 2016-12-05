import { randomPatient } from './generators'
import { nok, ok, error, warn, success, createMany } from './utils'
import { pooled } from '../database/pool'
import r from 'rethinkdb'

const quantites = {
  patient: [3, 10, 100],
}

function quantity(table, args) {
  const q = (args.quantity || args.q || '').toLowerCase()
  const data = quantites[table] || [0, 0, 0]
  const quantitySwitch = {
    few: data[0],
    plenty: data[1],
    many: data[2],
  }
  return quantitySwitch[q] || quantitySwitch.plenty
}

function addStatus(promise, table, args) {
  return promise.then(e => {
    success(`  ${ok} ${quantity(table, args)} records saved to table "${table}"`)
    return e
  }).catch(e => error(`  ${nok} error saving records to ${table}: ${e.message}`))
}

function createUsers(args, pool) {
  return pooled(pool, conn =>
    r.table('patients')
      .insert(createMany(randomPatient, quantity('patient', args)))
      .run(conn)
  )
}

export default function createData(args, pool) {
  warn('creating random data...')
  return Promise.all([
    addStatus(createUsers(args, pool), 'patient', args),
  ])
}

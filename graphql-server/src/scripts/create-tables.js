import { nok, ok, error, warn, success } from './utils'
import { pooled } from '../database/pool'
import r from 'rethinkdb'

export function addCreateStatus(promise, table) {
  return promise.then(e => {
    success(`  ${ok} "${table} created"`)
    return e
  }).catch(e => error(`  ${nok} error creating ${table}: ${e.message}`))
}

export default function createTables(args, pool, {tables}) {
  warn('creating tables...')
  return pooled(pool, conn => {
    const tblPromises = Object.keys(tables).map(table => {
      const { config, indices } = tables[table]
      const tableCreate = r.tableCreate(table, config || {}).run(conn)
      const indexCreate = tableCreate.then(() => {
        const idxPromises = Object.keys(indices || {}).map(index => r.table(table).indexCreate(index, indices[index]).run(conn))
        return Promise.all(idxPromises).then(() => r.table(table).indexWait().run(conn))
      })
      return addCreateStatus(indexCreate, table)
    })
    return Promise.all(tblPromises)
  })
}

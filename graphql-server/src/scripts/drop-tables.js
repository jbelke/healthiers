import { nok, ok, error, warn, success } from './utils'
import { pooled } from '../database/pool'
import r from 'rethinkdb'

export function addStatus(promise, table) {
  return promise.then(e => {
    success(`  ${ok} "${table} deleted"`)
    return e
  }).catch(e => error(`  ${nok} error deleting ${table}: ${e.message}`))
}

export default function dropTables(args, pool, {tables}) {
  warn('droping tables...')
  return pooled(pool, conn => {
    const tableNames = Object.keys(tables)
    const promises = tableNames.map(tbl => addStatus(r.tableDrop(tbl).run(conn), tbl))
    return Promise.all(promises)
  })
}

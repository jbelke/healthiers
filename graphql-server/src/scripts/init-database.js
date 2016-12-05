import r from 'rethinkdb'
import { pooled } from '../database/pool'
import { nok, ok, error, warn, success } from './utils'

function addStatus(promise, db) {
  return promise.then(e => {
    success(`  ${ok} database ${db} successfully created`)
    return e
  }).catch(e => error(`  ${nok} database ${db} could not be created: ${e.message}`))
}

export default function initDb(args, pool, {config}) {
  warn(`creating database ${config.db}...`)
  return addStatus(
    pooled(pool, conn => r.dbCreate(config.db).run(conn).catch(e => console.warn(`error while creating db "${config.db}": ${e.message}`))),
    config.db
  )
}

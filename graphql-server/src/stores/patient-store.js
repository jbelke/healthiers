import { pooled } from '../database/pool'
import r from 'rethinkdb'

const TABLE = 'patients'

export function findAll(pool) {
  return pooled(pool, conn => r.table(TABLE).coerceTo('array').run(conn))
}

export function save(pool, patient) {
  return pooled(pool, conn => r.table(TABLE).insert(patient).run(conn))
}

export function byEmail(pool, email) {
  return pooled(pool, conn => r.table(TABLE).filter({ email }).coerceTo('array').run(conn))
}

export function byId(pool, id) {
  return pooled(pool, conn => r.table(TABLE).get(id).run(conn))
}

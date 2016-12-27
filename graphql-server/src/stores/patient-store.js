import r from 'rethinkdb'

const TABLE = 'patients'

export function findAll(connection) {
  return r.table(TABLE).coerceTo('array').run(connection)
}

export function save(connection, patient) {
  return r.table(TABLE).insert(patient).run(connection)
}

export function byEmail(connection, email) {
  return r.table(TABLE).filter({ email }).coerceTo('array').run(connection)
}

export function byId(connection, id) {
  return r.table(TABLE).get(id).run(connection)
}

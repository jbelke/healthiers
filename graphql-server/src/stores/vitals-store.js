import r from 'rethinkdb'

const TABLE = 'vitals'

export function vitalsForPatient(connection, patientId) {
  return r.table(TABLE)
    .filter({ patientId })
    .coerceTo('array')
    .run(connection)
    .then(([vitals]) => vitals)
}

export function createVitals(connection, patientId) {
  return r.table(TABLE).insert({
    patientId,
    height: [],
    weight: [],
    pulse: [],
    bloodPressure: [],
    temperature: [],
  }).run(connection)
}

export function addVitalsRecord(connection, patientId, field, record) {
  const { value, unit } = record
  const recordToInsert = {
    unit,
    value,
    date: new Date()
  }
  return r.table(TABLE)
    .filter({ patientId })
    .update({ [field]: r.row(field).append(recordToInsert) })
    .run(connection)
}

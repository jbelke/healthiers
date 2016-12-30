import { addVitals, vitalsOfType } from '../../stores/vitals'
import { ifLoggedIn } from './utils'

const createResolver = type => ifLoggedIn(
  (_, {input}, {pooled, user}) => {
    const {value, unit} = input
    const {id} = user
    return pooled(connection => addVitals(connection, id, { value, unit, type }))
  }
)

export const resolveAddWeight = createResolver('weight')
export const resolveAddHeight = createResolver('height')
export const resolveAddPulse = createResolver('pulse')
export const resolveAddTemperature = createResolver('temperature')
export const resolveAddBloodPressure = createResolver('bloodPressure')

export function resolveVitalsOfType(type) {
  return ({patientId}, _, {pooled}) => pooled(conn => vitalsOfType(conn, patientId, type, {}))
}

import { Patient } from '../output-types/patient'
import { resolvePatient } from '../resolvers/patient'

export const patientQuery = {
  type: Patient,
  resolve: resolvePatient
}

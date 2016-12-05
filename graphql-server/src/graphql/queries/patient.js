import PatientOutputType from '../output-types/patient'
import { resolvePatient } from '../resolvers/patient'

export default {
  type: PatientOutputType,
  resolve: resolvePatient
}

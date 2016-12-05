import RegisterInputType from '../input-types/register'
import PatientOutputType from '../output-types/patient'
import { resolveRegister } from '../resolvers/register'

export default {
  type: PatientOutputType,
  args: {
    input: {
      type: RegisterInputType
    }
  },
  resolve: resolveRegister
}

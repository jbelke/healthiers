import { RegisterInput } from '../input-types/register'
import { Patient } from '../output-types/patient'
import { resolveRegister } from '../resolvers/register'

export const register = {
  type: Patient,
  args: {
    input: {
      type: RegisterInput
    }
  },
  resolve: resolveRegister
}

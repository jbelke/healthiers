import { resolveLogin } from '../resolvers/login'

import { LoginResult } from '../output-types/login'
import { LoginInput } from '../input-types/login'

export const login = {
  type: LoginResult,
  args: {
    input: {
      type: LoginInput
    }
  },
  resolve: resolveLogin
}

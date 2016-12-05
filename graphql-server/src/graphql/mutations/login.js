import { resolveLogin } from '../resolvers/login'

import LoginOutputType from '../output-types/login'
import LoginInputType from '../input-types/login'

export default {
  type: LoginOutputType,
  args: {
    input: {
      type: LoginInputType
    }
  },
  resolve: resolveLogin
}

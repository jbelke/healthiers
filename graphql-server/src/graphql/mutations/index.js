import { GraphQLObjectType } from 'graphql'

import { login } from './login'
import { register } from './register'
import { addHeight, addWeight } from './vitals'

export default new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    // auth
    login,
    register,

    // vitals
    addHeight,
    addWeight
  }
})

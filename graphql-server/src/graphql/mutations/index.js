import { GraphQLObjectType } from 'graphql'

import { login } from './login'
import { register } from './register'
import { addHeight, addWeight, addBloodPressure, addPulse, addTemperature } from './vitals'

export default new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    // auth
    login,
    register,

    // vitals
    addHeight,
    addWeight,
    addBloodPressure,
    addPulse,
    addTemperature
  }
})

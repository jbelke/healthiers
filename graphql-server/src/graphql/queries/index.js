import { GraphQLObjectType } from 'graphql'

import patient from '../queries/patient'

export default new GraphQLObjectType({
  name: 'Query',
  fields: {
    patient
  }
})

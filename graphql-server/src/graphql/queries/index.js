import { GraphQLObjectType } from 'graphql'

import { patientQuery } from '../queries/patient'

export default new GraphQLObjectType({
  name: 'Query',
  fields: {
    patient: patientQuery
  }
})

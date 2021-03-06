import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql'
import { GraphQLEmail } from 'graphql-custom-types'

import { Vitals } from './vitals'

//import { resolveVitals } from '../resolvers/vitals'

export const Patient = new GraphQLObjectType({
  name: 'Patient',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    email: {
      type: GraphQLEmail,
    },
    firstName: {
      type: GraphQLString,
    },
    lastName: {
      type: GraphQLString,
    },
    vitals: {
      type: Vitals,
      resolve: ({ id }) => ({ patientId: id })
    }
  })
})

import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql'
import { GraphQLEmail } from 'graphql-custom-types'

export default new GraphQLObjectType({
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
  })
})

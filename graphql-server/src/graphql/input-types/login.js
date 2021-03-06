import { GraphQLInputObjectType, GraphQLString, GraphQLNonNull } from 'graphql'
import { GraphQLEmail } from 'graphql-custom-types'

export const LoginInput = new GraphQLInputObjectType({
  name: 'LoginInput',
  fields: {
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLEmail),
    }
  }
})

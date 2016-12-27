import { GraphQLInputObjectType, GraphQLNonNull } from 'graphql'
import { GraphQLEmail, GraphQLLimitedString } from 'graphql-custom-types'

export const RegisterInput = new GraphQLInputObjectType({
  name: 'RegisterInput',
  fields: {
    password: {
      type: new GraphQLNonNull(new GraphQLLimitedString(6)),
    },
    email: {
      type: new GraphQLNonNull(GraphQLEmail),
    },
    firstName: {
      type: new GraphQLNonNull(new GraphQLLimitedString(1)),
    },
    lastName: {
      type: new GraphQLNonNull(new GraphQLLimitedString(1)),
    },
  }
})

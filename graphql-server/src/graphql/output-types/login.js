import { GraphQLObjectType, GraphQLString } from 'graphql'

export const LoginResult = new GraphQLObjectType({
  name: 'LoginResult',
  fields: () => ({
    token: {
      type: GraphQLString,
    }
  })
})

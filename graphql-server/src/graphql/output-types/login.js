import { GraphQLObjectType, GraphQLString } from 'graphql'

export default new GraphQLObjectType({
  name: 'LoginResult',
  fields: () => ({
    token: {
      type: GraphQLString,
    }
  })
})

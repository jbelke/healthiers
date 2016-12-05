import { GraphQLObjectType } from 'graphql'

import login from '../mutations/login'
import register from '../mutations/register'

export default new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    login,
    register
  }
})

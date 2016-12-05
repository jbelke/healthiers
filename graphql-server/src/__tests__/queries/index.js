import { graphql } from 'graphql'
import { readFileSync, readdirSync, lstatSync } from 'fs'
import { join, extname, basename } from 'path'
import schemaRoot from '../../graphql/schema'

const graphQLFiles = ['.gql', '.graphql']

const readGraphQLFiles = (root, data) => {
  const paths = readdirSync(root)
  const dirs = paths.filter(path => lstatSync(join(root, path)).isDirectory())
  const files = paths.filter(path => lstatSync(join(root, path)).isFile())
    .filter(path => graphQLFiles.indexOf(extname(path)) >= 0)

  files.forEach(file => {
    data[basename(file, extname(file))] = readFileSync(join(root, file), 'utf-8')
  })

  dirs.forEach(dir => {
    data[dir] = readGraphQLFiles(join(root, dir), {})
  })

  return data
}

const executableObject = (queryObject, schema, root, context) => Object.keys(queryObject).reduce((result, key) => {
  const value = queryObject[key]
  if (typeof value === 'string') {
    result[key] = (args = null, operation = null) => graphql(schema, value, root, context, args, operation)
  } else {
    result[key] = executableObject(value, schema, root, context)
  }
  return result
}, {})


export const queries = readGraphQLFiles(join(__dirname, 'graphql'), {})
export const createQuery = context => executableObject(queries, schemaRoot, {}, context)

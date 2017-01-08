import isObject from 'mini-dash/isObject'
import isString from 'mini-dash/isString'
import isArray from 'mini-dash/isArray'

export const fieldsToGraphql = fields => {
  if (!isArray(fields) || fields.length === 0) {
    throw new Error('fields must be a non-empty array')
  }
  return fields.map(field => {
    if (isString(field)) {
      return field
    } else if (isObject(field)) {
      const keys = Object.keys(field)
      if (keys.length !== 1) {
        throw new Error(`single key allowed per field, found ${keys}`)
      }
      const [key] = keys
      if (!isString(key)) {
        throw new Error(`${key} is not a string`)
      }
      const keyFields = field[key]
      return `${key} { ${fieldsToGraphql(keyFields)} }`
    }
    throw new Error(`field ${field} of not recognized type: ${typeof field}`)
  }).join(' ')
}

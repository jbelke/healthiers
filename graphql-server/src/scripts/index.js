import meow from 'meow'
import { nok, lf, fatalError } from './utils'
import createPool from '../database/pool'
import { rethinkdb as dbOptions } from '../../config' // TODO non global config

const { input, flags } = meow()

const inputAliases = {
  'i': 'init-database',
  'd': 'drop-tables',
  'c': 'create-tables',
  'g': 'generate-data',
}

const resolveModule = key => {
  for (const alias in inputAliases) {
    const value = inputAliases[alias]
    if (key === alias) {
      return value
    }
    if (key === value) {
      return value
    }
  }
  return null
}

const pool = createPool(dbOptions)

input.map(task => [task, resolveModule(task)])
  .map(([task, moduleName]) => moduleName ? require(`./${moduleName}`)['default'] : fatalError(`${nok} task ${task} does not exist`))
  .reduce((chain, fn, i) => {
    let next = chain.then(() => fn(flags, pool, dbOptions))
    if (i !== input.length - 1) {
      next = next.then(() => lf())
    }
    return next
  }, Promise.resolve())
  .then(() => pool.drain().then(() => pool.clear()))
  .catch(() => pool.drain().then(() => pool.clear()))

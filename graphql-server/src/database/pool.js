import r from 'rethinkdb'
import genericPool from 'generic-pool'
import Bluebird from 'bluebird'

export function createPool({ config, pool }) {
  return genericPool.createPool({
    create: () => r.connect(config),
    destroy: client => client.close()
  }, pool)
}

export function pooled(pool) {
  return (fn, ...args) => pool.acquire().then(
    connection => Bluebird.resolve(fn(connection, ...args))
      .finally(() => pool.release(connection))
  )
}

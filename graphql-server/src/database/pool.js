import r from 'rethinkdb'
import genericPool from 'generic-pool'

export default function createPool({ config, pool }) {
  return genericPool.createPool({
    create: () => r.connect(config),
    destroy: client => client.close()
  }, pool)
}

export function pooled(pool, fn, ...args) {
  return pool.acquire().then(conn => fn(conn, ...args).then(result => {
    pool.release(conn)
    return result
  }).catch(error => {
    pool.release(conn)
    throw error
  }))
}

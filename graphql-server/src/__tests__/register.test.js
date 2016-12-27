import { createQuery } from './queries'
import config, { rethinkdb as dbConfig } from '../../../config-test'
import { createPool, pooled } from '../database/pool'

describe('register', () => {
  const pool = createPool(dbConfig)
  const query = createQuery({ request: {}, pooled: pooled(pool), config, })

  const johnDoe = {
    email: 'john@doe.com',
    firstName: 'John',
    lastName: 'Doe',
    password: 'testpassword',
  }

  it('should successfully register John Doe', () => query.register({ input: johnDoe })
    .then(({data, errors}) => {
      expect(errors).toBeUndefined()
      expect(data).toBeDefined()

      const {email, firstName, lastName, id} = data.register

      expect(email).toBe(johnDoe.email)
      expect(firstName).toBe(johnDoe.firstName)
      expect(lastName).toBe(johnDoe.lastName)
      expect(id).toBeTruthy()
    })
  )

  it('should not let John Doe register again', () => query.register({ input: johnDoe })
    .then(({data, errors}) => {
      expect(data.register).toBeNull()
      expect(errors.length).toBe(1)
      expect(errors[0].message).toBe('john@doe.com is already in use')
    })
  )

  afterAll(() => pool.drain().then(() => pool.clear()))
})

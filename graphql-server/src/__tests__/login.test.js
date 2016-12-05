import { createQuery } from './queries'
import config, { rethinkdb as dbConfig } from '../../../config-test'
import createPool from '../database/pool'

describe('register', () => {
  const pool = createPool(dbConfig)
  const query = createQuery({ request: {}, pool, config, })

  const frank = {
    email: 'papa@franku.com',
    firstName: 'Filthy',
    lastName: 'Frank',
    password: 'frankssecret',
  }

  const frankLogin = {
    email: 'papa@franku.com',
    password: 'frankssecret',
  }

  const wrongPasswordLogin = {
    email: 'papa@franku.com',
    password: 'foo',
  }
  
  const stranger = {
    email: 'this.is@not.registered.com',
    password: 'bad password',
  }

  it('should successfully register and login Filthy Frank', () => query.register({ input: frank })
    .then(({data, errors}) => {
      expect(errors).toBeUndefined()
      expect(data).toBeDefined()

      const {email, password, firstName, lastName, id} = data.register

      expect(email).toBe(frank.email)
      expect(firstName).toBe(frank.firstName)
      expect(lastName).toBe(frank.lastName)
      expect(id).toBeTruthy()
      expect(password).toBeFalsy()
    }).then(() => query.login({ input: frankLogin }))
    .then(({data, errors}) => {
      const {token} = data.login
      expect(errors).toBeUndefined()
      expect(token).toBeTruthy()
      expect(typeof token).toBe('string')
    })
  )

  it('should not let Filthy Frank log in with a wrong password', () => query.login({ input: wrongPasswordLogin })
    .then(({data, errors}) => {
      expect(data.login).toBeNull()
      expect(errors.length).toBe(1)
      expect(errors[0].message).toBe('Invalid email or password')
    })
  )

  it('should not let strangers log in', () => query.login({ input: stranger })
    .then(({data, errors}) => {
      expect(data.login).toBeNull()
      expect(errors.length).toBe(1)
      expect(errors[0].message).toBe('Invalid email or password')
    })
  )

  afterAll(() => pool.drain().then(() => pool.clear()))
})

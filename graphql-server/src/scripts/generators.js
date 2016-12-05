import * as faker from 'faker'
import { hashSync } from '../auth'

const PASSWORD = 'demo'

export function randomPatient() {
  return {
    email: faker.internet.email().toLowerCase(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    password: hashSync(PASSWORD)
  }
}

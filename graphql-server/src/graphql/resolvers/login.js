import omit from 'mini-dash/omit'

import { compare, sign } from '../../auth'
import { byEmail } from '../../stores/patient-store'

export const resolveLogin = (parent, {input}, {pool, config}) => {
  const {email, password} = input
  return byEmail(pool, email).then(([patient]) => {
    if (patient) {
      return compare(password, patient.password).then(matches => {
        if (matches) {
          return sign(omit(patient, 'password'), config.auth.secret)
        }
        throw new Error('Invalid email or password')
      })
    }
    throw new Error('Invalid email or password')
  }).then(token => ({
    token,
    success: true
  }))
}

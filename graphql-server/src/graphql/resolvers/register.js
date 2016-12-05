import omit from 'mini-dash/omit'
import extend from 'mini-dash/extend'
import { hash } from '../../auth'
import { save as savePatient, byId, byEmail } from '../../stores/patient-store'

export const resolveRegister = (_, {input}, {pool}) => {
  const {email, password} = input
  return byEmail(pool, email).then(results => {
    if (results.length === 0) {
      return hash(password)
        .then(pwHash => savePatient(pool, extend(input, { password: pwHash })))
        .then(result => byId(pool, result['generated_keys'][0]))
        .then(patient => omit(patient, 'password'))
    }
    throw new Error(`${email} is already in use`)
  })
}

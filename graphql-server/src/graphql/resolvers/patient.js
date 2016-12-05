import { byId } from '../../stores/patient-store'
import { ifLoggedIn } from './utils'

export const resolvePatient = ifLoggedIn(
  (parent, args, {pool, user}) => byId(pool, user.id)
)

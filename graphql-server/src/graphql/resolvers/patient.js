import { byId } from '../../stores/patient-store'
import { ifLoggedIn } from './utils'

export const resolvePatient = ifLoggedIn(
  (parent, args, {pooled, user}) => pooled(conn => byId(conn, user.id))
)

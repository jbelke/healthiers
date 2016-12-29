import { addVitals, vitalsForPatient } from '../../stores/vitals'
import { ifLoggedIn, selection } from './utils'
import merge from 'mini-dash/merge'

const createResolver = type => ifLoggedIn(
  (_, {input}, {pooled, user}) => {
    const {value, unit} = input
    const {id} = user
    return pooled(connection => addVitals(connection, id, { value, unit, type }))
  }
)

const defaultVitals = types => types.reduce((obj, type) => {
  obj[type] = []
  return obj
}, {})

export const mutations = {
  addWeight: createResolver('weight'),
  addHeight: createResolver('height')
}

export const resolveVitals = ({id}, _, {pooled}, info) => {
  const types = selection(info)
  return pooled(conn => vitalsForPatient(conn, id, types))
    .then(vitals => merge(defaultVitals(types), vitals))
}

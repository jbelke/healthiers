import { FAILED_FETCH_VITALS, REQUESTED_FETCH_VITALS, SUCCESSFUL_FETCH_VITALS } from '../actions/vitals'
import merge from 'mini-dash/merge'

const replaceDates = vitals => Object.keys(vitals || {}).reduce((withDates, key) => {
  const records = vitals[key]
  withDates[key] = records.map(record => merge(record, { date: new Date(record.date) }))
  return withDates
}, {})

export const vitalsReducer = (state = {}, {type, payload}) => {
  switch (type) {
    case REQUESTED_FETCH_VITALS:
      return state
    case SUCCESSFUL_FETCH_VITALS:
      return merge(state, replaceDates(payload))
    case FAILED_FETCH_VITALS:
      return state
    default:
      return state
  }
}

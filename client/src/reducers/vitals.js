import { FAILED_FETCH_VITALS, REQUESTED_FETCH_VITALS, SUCCESSFUL_FETCH_VITALS } from '../actions/vitals'
import merge from 'mini-dash/merge'
import mapValues from 'mini-dash/mapValues'

export const vitalsReducer = (state = {}, {type, payload}) => {
  switch (type) {
    case REQUESTED_FETCH_VITALS:
      return state
    case SUCCESSFUL_FETCH_VITALS:
      return merge(state, mapValues(payload, records =>
        records.map(record => merge(record, { date: new Date(record.date) }))
      ))
    case FAILED_FETCH_VITALS:
      return state
    default:
      return state
  }
}

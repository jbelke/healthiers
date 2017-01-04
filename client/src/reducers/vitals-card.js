import { UPDATE_LOCAL_VITALS_CARD } from '../actions/vitals-card'
import merge from 'mini-dash/merge'

export const vitalsCardReducer = (state = {}, {type, payload}) => {
  switch (type) {
    case UPDATE_LOCAL_VITALS_CARD:
      return merge(state, { [payload.type]: payload.value })
    default:
      return state
  }
}

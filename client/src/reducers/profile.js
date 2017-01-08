import { FAILED_FETCH_PROFILE, SUCCESSFUL_FETCH_PROFILE } from '../actions/profile'

import merge from 'mini-dash/merge'

export const profileReducer = (state = {}, {type, payload}) => {
  switch (type) {
    case SUCCESSFUL_FETCH_PROFILE:
      return merge(state, payload)
    case FAILED_FETCH_PROFILE:
      return merge(state, payload)
    default:
      return state
  }
}

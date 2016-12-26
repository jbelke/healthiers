import { REQUESTED_LOGIN, FAILED_LOGIN, SUCCESSFUL_LOGIN, CLEAR_LOGIN } from '../actions/types'
import merge from 'mini-dash/merge'

export const loginReducer = (state = {}, {type, payload}) => {
  switch (type) {
    case REQUESTED_LOGIN:
      return merge(state, { error: null, loginInProgress: true, loginSuccessful: false })
    case FAILED_LOGIN:
      return merge(state, { error: payload.error, loginInProgress: false, loginSuccessful: false })
    case SUCCESSFUL_LOGIN:
      return merge(state, { error: null, loginInProgress: false, loginSuccessful: true })
    case CLEAR_LOGIN:
      return {}
    default:
      return state
  }
}

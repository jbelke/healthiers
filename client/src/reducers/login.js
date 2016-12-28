import { REQUESTED_LOGIN, FAILED_LOGIN, SUCCESSFUL_LOGIN, CLEAR_LOGIN, UPDATE_LOGIN } from '../actions/login'
import merge from 'mini-dash/merge'
import pick from 'mini-dash/pick'

export const loginReducer = (state = {}, {type, payload}) => {
  switch (type) {
    case REQUESTED_LOGIN:
      return merge(state, { error: null, loginInProgress: true, loginSuccessful: false })
    case FAILED_LOGIN:
      return merge(state, { error: payload.error, loginInProgress: false, loginSuccessful: false })
    case SUCCESSFUL_LOGIN:
      return merge(state, { error: null, loginInProgress: false, loginSuccessful: true })
    case UPDATE_LOGIN:
      return merge(state, payload)
    case CLEAR_LOGIN:
      return pick(state, payload)
    default:
      return state
  }
}

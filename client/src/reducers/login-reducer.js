import { REQUESTED_LOGIN, FAILED_LOGIN, SUCCESSFUL_LOGIN, CLEAR_LOGIN, UPDATE_LOGIN_FIELD } from '../actions/types'
import merge from 'mini-dash/merge'
import pick from 'mini-dash/pick'

export const loginReducer = (state = {}, {type, payload}) => {
  console.log(type, state, payload)
  switch (type) {
    case REQUESTED_LOGIN:
      return merge(state, { error: null, loginInProgress: true, loginSuccessful: false })
    case FAILED_LOGIN:
      return merge(state, { error: payload.error, loginInProgress: false, loginSuccessful: false })
    case SUCCESSFUL_LOGIN:
      return merge(state, { error: null, loginInProgress: false, loginSuccessful: true })
    case UPDATE_LOGIN_FIELD:
      return merge(state, payload)
    case CLEAR_LOGIN:
      return pick(state, payload)
    default:
      return state
  }
}

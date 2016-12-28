import { REQUESTED_SIGNUP, FAILED_SIGNUP, SUCCESSFUL_SIGNUP, CLEAR_SIGNUP, UPDATE_SIGNUP } from '../actions/signup'
import merge from 'mini-dash/merge'
import pick from 'mini-dash/pick'

export const signupReducer = (state = {}, {type, payload}) => {
  switch (type) {
    case REQUESTED_SIGNUP:
      return merge(state, { error: null, signupInProgress: true, signupSuccessful: false })
    case FAILED_SIGNUP:
      return merge(state, { error: payload.error, signupInProgress: false, signupSuccessful: false })
    case SUCCESSFUL_SIGNUP:
      return merge(state, { error: null, signupInProgress: false, signupSuccessful: true })
    case UPDATE_SIGNUP:
      return merge(state, payload)
    case CLEAR_SIGNUP:
      return pick(state, payload)
    default:
      return state
  }
}

import { REQUESTED_LOGIN } from '../actions/types'

export const loginReducer = (state = {}, {type, payload}) => {
  switch (type) {
    case REQUESTED_LOGIN:
      return state
    default:
      return state
  }
}

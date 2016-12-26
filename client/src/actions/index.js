// eslint-disable-next-line
import * as ActionTypes from './types'

export const requestedLogin = (email, password) => ({
  type: ActionTypes.REQUESTED_LOGIN,
  payload: { email, password }
})

export const failedLogin = message => ({
  type: ActionTypes.FAILED_LOGIN,
  payload: { error: message }
})

export const successfulLogin = token => ({
  type: ActionTypes.SUCCESSFUL_LOGIN,
  payload: { token }
})

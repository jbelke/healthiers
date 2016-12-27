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

export const clearLogin = (...preserveFields) => ({
  type: ActionTypes.CLEAR_LOGIN,
  payload: preserveFields
})

export const updateLoginFields = payload => ({
  payload,
  type: ActionTypes.UPDATE_LOGIN_FIELD,
})

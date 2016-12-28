export const REQUESTED_LOGIN = 'REQUESTED_LOGIN'
export const FAILED_LOGIN = 'FAILED_LOGIN'
export const SUCCESSFUL_LOGIN = 'SUCCESSFUL_LOGIN'
export const CLEAR_LOGIN = 'CLEAR_LOGIN'
export const UPDATE_LOGIN = 'UPDATE_LOGIN_FIELD'

export const requestedLogin = payload => ({
  type: REQUESTED_LOGIN,
  payload
})

export const failedLogin = message => ({
  type: FAILED_LOGIN,
  payload: { error: message }
})

export const successfulLogin = token => ({
  type: SUCCESSFUL_LOGIN,
  payload: { token }
})

export const clearLogin = (...preserveFields) => ({
  type: CLEAR_LOGIN,
  payload: preserveFields
})

export const updateLoginFields = payload => ({
  payload,
  type: UPDATE_LOGIN,
})

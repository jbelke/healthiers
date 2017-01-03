export const REQUESTED_SIGNUP = 'REQUESTED_SIGNUP'
export const FAILED_SIGNUP = 'FAILED_SIGNUP'
export const SUCCESSFUL_SIGNUP = 'SUCCESSFUL_SIGNUP'
export const CLEAR_SIGNUP = 'CLEAR_SIGNUP'
export const UPDATE_LOCAL_SIGNUP = 'UPDATE_SIGNUP_FIELD'

export const requestedSignup = payload => ({
  type: REQUESTED_SIGNUP,
  payload
})

export const failedSignup = message => ({
  type: FAILED_SIGNUP,
  payload: { error: message }
})

export const successfulSignup = () => ({
  type: SUCCESSFUL_SIGNUP,
})

export const clearSignup = (...preserveFields) => ({
  type: CLEAR_SIGNUP,
  payload: preserveFields
})

export const updateLocalSignup = payload => ({
  payload,
  type: UPDATE_LOCAL_SIGNUP,
})

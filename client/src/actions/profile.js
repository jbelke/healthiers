export const REQUESTED_FETCH_PROFILE = 'REQUESTED_FETCH_PROFILE'
export const FAILED_FETCH_PROFILE = 'FAILED_FETCH_PROFILE'
export const SUCCESSFUL_FETCH_PROFILE = 'FAILED_FETCH_PROFILE'
export const UPDATE_LOCAL_PROFILE = 'UPDATE_LOCAL_PROFILE'

export const requestedFetchProfile = fields => ({
  type: REQUESTED_FETCH_PROFILE,
  payload: fields
})

export const failedFetchProfile = message => ({
  type: FAILED_FETCH_PROFILE,
  payload: { error: message }
})

export const successfulFetchProfile = profile => ({
  type: SUCCESSFUL_FETCH_PROFILE,
  payload: profile
})

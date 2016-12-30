export const REQUESTED_FETCH_VITALS = 'REQUESTED_FETCH_VITALS'
export const FAILED_FETCH_VITALS = 'FAILED_FETCH_VITALS'
export const SUCCESSFUL_FETCH_VITALS = 'SUCCESSFUL_FETCH_VITALS'

export const requestFetchVitals = types => ({
  type: REQUESTED_FETCH_VITALS,
  payload: { types }
})

export const successfulFetchVitals = vitals => ({
  type: SUCCESSFUL_FETCH_VITALS,
  payload: vitals
})

export const failedFetchVitals = error => ({
  type: FAILED_FETCH_VITALS,
  payload: { error }
})

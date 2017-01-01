export const REQUESTED_FETCH_VITALS = 'REQUESTED_FETCH_VITALS'
export const FAILED_FETCH_VITALS = 'FAILED_FETCH_VITALS'
export const SUCCESSFUL_FETCH_VITALS = 'SUCCESSFUL_FETCH_VITALS'

export const REQUESTED_ADD_VITALS = 'REQUESTED_ADD_VITALS'
export const FAILED_ADD_VITALS = 'FAILED_ADD_VITALS'
export const SUCCESSFUL_ADD_VITALS = 'SUCCESSFUL_ADD_VITALS'

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

export const requestedAddVitals = (type, record) => ({
  type: REQUESTED_ADD_VITALS,
  payload: { type, record }
})

export const successfulAddVitals = () => ({
  type: SUCCESSFUL_ADD_VITALS,
  payload: {}
})

export const failedAddVitals = error => ({
  type: FAILED_ADD_VITALS,
  payload: { error }
})

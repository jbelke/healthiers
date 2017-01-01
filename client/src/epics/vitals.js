import { Observable } from 'rxjs'
import { REQUESTED_FETCH_VITALS, REQUESTED_ADD_VITALS, failedFetchVitals, successfulFetchVitals, successfulAddVitals, failedAddVitals } from '../actions/vitals'
import { addVitalsQuery, vitalsQuery } from '../graphql/queries/vitals'

export const fetchVitals = (action$, _, { gql }) => action$.ofType(REQUESTED_FETCH_VITALS)
  .flatMap(({payload}) => gql.observable(vitalsQuery(payload.types))
    .map(({patient}) => successfulFetchVitals(patient.vitals))
    .catch(([error]) => Observable.of(failedFetchVitals(error.message)))
  )

export const addVitals = (action$, _, {gql}) => action$.ofType(REQUESTED_ADD_VITALS)
  .map(({ payload }) => payload)
  .flatMap(({ type, record }) => gql.observable(addVitalsQuery(type), record)
    .map(() => successfulAddVitals())
    .catch(([error]) => Observable.of(failedAddVitals(error.message)))
  )

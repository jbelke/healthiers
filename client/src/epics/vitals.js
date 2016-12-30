import { Observable } from 'rxjs'
import { REQUESTED_FETCH_VITALS, failedFetchVitals, successfulFetchVitals } from '../actions/vitals'
import { vitalsQuery } from '../graphql/queries/vitals'

export const fetchVitals = (action$, _, { gql }) => action$.ofType(REQUESTED_FETCH_VITALS)
  .flatMap(({payload}) => gql.observable(vitalsQuery(payload.types))
    .map(({patient}) => successfulFetchVitals(patient.vitals))
    .catch(([error]) => Observable.of(failedFetchVitals(error.message)))
  )

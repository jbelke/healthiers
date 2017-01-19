import { Observable } from 'rxjs'
import { REQUESTED_FETCH_PROFILE, failedFetchProfile, successfulFetchProfile } from '../actions/profile'
import { patientProfileQuery } from '../graphql/queries/patient-profile'

export const fetchProfile = (action$, _, { gql }) => action$.ofType(REQUESTED_FETCH_PROFILE)
  .flatMap(({payload}) => gql(patientProfileQuery(payload))
    .map(({patient}) => successfulFetchProfile(patient))
    .catch(([{message}]) => Observable.of(failedFetchProfile(message)))
  )

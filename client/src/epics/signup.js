import { push } from 'react-router-redux'
import { Observable } from 'rxjs'
import { REQUESTED_SIGNUP, SUCCESSFUL_SIGNUP, FAILED_SIGNUP, successfulSignup, failedSignup, clearSignup } from '../actions/signup'
import { signupQuery } from '../graphql/queries/signup'

export const doSignup = (action$, _, { gql }) => action$.ofType(REQUESTED_SIGNUP)
  .map(({ payload }) => payload)
  .flatMap(payload => gql(signupQuery, { input: payload })
    .map(() => successfulSignup())
    .catch(([error]) => Observable.of(failedSignup(error.message)))
  )

export const redirectAfterSignup = action$ => action$.ofType(SUCCESSFUL_SIGNUP)
  .flatMap(() => Observable.timer(1000).map(() => push('/login')))

export const clearSignupOnSuccess = action$ => action$.ofType(SUCCESSFUL_SIGNUP)
  .flatMap(() => Observable.timer(1500).map(() => clearSignup()))

export const clearSignupOnFailure = action$ => action$.ofType(FAILED_SIGNUP)
  .flatMap(() => Observable.timer(1000).map(() => clearSignup('email', 'firstName', 'lastName', 'password', 'passwordRepeat')))

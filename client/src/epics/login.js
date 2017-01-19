import { push } from 'react-router-redux'
import { Observable } from 'rxjs'
import { REQUESTED_LOGIN, SUCCESSFUL_LOGIN, FAILED_LOGIN, failedLogin, successfulLogin, clearLogin as clearLoginAction } from '../actions/login'
import { loginQuery } from '../graphql/queries/login'

export const fetchLoginToken = (action$, _, { gql }) => action$.ofType(REQUESTED_LOGIN)
  .map(action => action.payload)
  .flatMap(payload => gql(loginQuery, { input: payload })
    .map(({login}) => successfulLogin(login.token))
    .catch(([error]) => Observable.of(failedLogin(error.message)))
  )

export const redirectAfterLogin = action$ => action$.ofType(SUCCESSFUL_LOGIN)
  .flatMap(() => Observable.timer(1000).map(() => push('/dashboard/records')))

export const clearLoginOnFailure = action$ => action$.ofType(FAILED_LOGIN)
  .flatMap(() => Observable.timer(1000).map(() => clearLoginAction('email', 'password')))

export const clearLoginOnSuccess = action$ => action$.ofType(SUCCESSFUL_LOGIN)
  .do(({ payload }) => localStorage.setItem('token', payload.token))
  .flatMap(() => Observable.timer(1000).map(() => clearLoginAction()))

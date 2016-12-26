import { push } from 'react-router-redux'
import { Observable } from 'rxjs'
import { REQUESTED_LOGIN, SUCCESSFUL_LOGIN, FAILED_LOGIN } from '../actions/types/index'
import { failedLogin, successfulLogin, clearLogin as clearLoginAction } from '../actions'
import loginQuery from '../graphql/queries/login.gql'

export const fetchLoginToken = (action$, _, { gql }) => action$.ofType(REQUESTED_LOGIN)
  .map(action => action.payload)
  .flatMap(payload => gql.observable(loginQuery, { input: payload })
    .map(({login}) => successfulLogin(login.token))
    .catch(([error]) => Observable.of(failedLogin(error.message)))
  )

export const redirectAfterLogin = action$ => action$.ofType(SUCCESSFUL_LOGIN)
  .flatMap(() => Observable.timer(1000).map(() => push('/dashboard')))

export const clearLogin = action$ => action$.filter(action => action.type === SUCCESSFUL_LOGIN || action.type === FAILED_LOGIN)
  .flatMap(() => Observable.timer(1000).map(() => clearLoginAction()))

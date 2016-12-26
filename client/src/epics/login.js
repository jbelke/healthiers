import { push } from 'react-router-redux'
import { Observable } from 'rxjs'
import { REQUESTED_LOGIN, SUCCESSFUL_LOGIN } from '../actions/types/index'
import { failedLogin, successfulLogin } from '../actions'
import loginQuery from '../graphql/queries/login.gql'

export const fetchLoginToken = (action$, _, { gql }) => {
  return action$.ofType(REQUESTED_LOGIN)
    .map(action => action.payload)
    .flatMap(payload => gql.observable(loginQuery, { input: payload })
      .map(({login}) => successfulLogin(login.token))
      .catch(([error]) => Observable.of(failedLogin(error.message)))
    )
}

export const redirectAfterLogin = action$ => action$.ofType(SUCCESSFUL_LOGIN)
  .flatMap(() => Observable.timer(1000).map(() => push('/dashboard')))

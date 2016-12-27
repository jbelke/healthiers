import { combineEpics } from 'redux-observable'
import { fetchLoginToken, redirectAfterLogin, clearLoginOnFailure, clearLoginOnSuccess } from './login'

const epics = combineEpics(
  fetchLoginToken,
  redirectAfterLogin,
  clearLoginOnFailure,
  clearLoginOnSuccess
)

export default dependencies => (...args) => epics(...args, dependencies)

import { combineEpics } from 'redux-observable'
import { fetchLoginToken, redirectAfterLogin, clearLogin } from './login'

const epics = combineEpics(
  fetchLoginToken,
  redirectAfterLogin,
  clearLogin
)

export default dependencies => (...args) => epics(...args, dependencies)

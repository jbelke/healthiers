import { combineEpics } from 'redux-observable'
import { fetchLoginToken, redirectAfterLogin } from './login'

const epics = combineEpics(
  fetchLoginToken,
  redirectAfterLogin
)

export default dependencies => (...args) => epics(...args, dependencies)

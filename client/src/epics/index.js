import { combineEpics } from 'redux-observable'
import { fetchLoginToken, redirectAfterLogin, clearLoginOnFailure, clearLoginOnSuccess } from './login'
import { doSignup, redirectAfterSignup, clearSignupOnSuccess, clearSignupOnFailure } from './signup'

const epics = combineEpics(
  // login
  fetchLoginToken,
  redirectAfterLogin,
  clearLoginOnFailure,
  clearLoginOnSuccess,

  // signup
  doSignup,
  redirectAfterSignup,
  clearSignupOnSuccess,
  clearSignupOnFailure,

)

export default dependencies => (...args) => epics(...args, dependencies)

import { combineEpics } from 'redux-observable'

import { fetchLoginToken, redirectAfterLogin, clearLoginOnFailure, clearLoginOnSuccess } from './login'
import { doSignup, redirectAfterSignup, clearSignupOnSuccess, clearSignupOnFailure } from './signup'
import { fetchVitals, addVitals } from './vitals'

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

  //vitals
  fetchVitals,
  addVitals
)

export default dependencies => (...args) => epics(...args, dependencies)

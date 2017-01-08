import { combineEpics } from 'redux-observable'

import { fetchLoginToken, redirectAfterLogin, clearLoginOnFailure, clearLoginOnSuccess } from './login'
import { doSignup, redirectAfterSignup, clearSignupOnSuccess, clearSignupOnFailure } from './signup'
import { fetchVitals, addVitals } from './vitals'
import { fetchProfile } from './profile'

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

  // vitals
  fetchVitals,
  addVitals,

  // profile
  fetchProfile
)

export default dependencies => (...args) => epics(...args, dependencies)

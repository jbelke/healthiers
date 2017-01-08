import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { loginReducer } from './login'
import { signupReducer } from './signup'
import { vitalsReducer } from './vitals'
import { vitalsCardReducer } from './vitals-card'
import { profileReducer } from './profile'

export default combineReducers({
  routing: routerReducer,

  login: loginReducer,
  signup: signupReducer,
  vitals: vitalsReducer,
  vitalsCards: vitalsCardReducer,
  profile: profileReducer,
})

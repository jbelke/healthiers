import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { loginReducer } from './login'
import { signupReducer } from './signup'

export default combineReducers({
  routing: routerReducer,
  
  login: loginReducer,
  signup: signupReducer,
})

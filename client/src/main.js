import 'rxjs'

import './components/globals.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import createStore from './store'
import AppContainer from './containers/app-container'
import LoginContainer from './containers/login-container'
import MainContainer from './containers/main-container'

const store = createStore()
const history = syncHistoryWithStore(
  browserHistory,
  store
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={AppContainer}>
        <IndexRoute component={MainContainer} />
        <Route path='login' component={LoginContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)

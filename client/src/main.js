import 'rxjs'

import './components/globals.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute, IndexRedirect } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import createStore from './store'
import { gql } from './graphql'

import { AppRoute } from './components/routes/app'
import { LandingRoute } from './components/routes/landing'
import { LoginRoute } from './components/routes/login'
import { DashboardRoute } from './components/routes/dashboard'
import { RecordsRoute } from './components/routes/records'
import { SignupRoute } from './components/routes/signup'
import { ProfileRoute } from './components/routes/profile'

const store = createStore({ gql })
const history = syncHistoryWithStore(
  browserHistory,
  store
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={AppRoute}>
        <IndexRoute component={LandingRoute} />
        <Route path='dashboard' component={DashboardRoute}>
          <IndexRedirect to='records' />
          <Route path='records' component={RecordsRoute} />
          <Route path='profile' component={ProfileRoute} />
        </Route>
        <Route path='login' component={LoginRoute} />
        <Route path='signup' component={SignupRoute} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)

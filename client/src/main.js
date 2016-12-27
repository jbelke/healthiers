import 'rxjs'

import './components/globals.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import createStore from './store'
import { LandingContainer } from './components/containers/landing'
import { LoginContainer } from './components/containers/login'
import { DashboardContainer } from './components/containers/dashboard'
import { RecordsContainer } from './components/containers/records'
import { gql } from './graphql'

const RootContainer = ({children}) => <div>{children}</div>

const store = createStore({ gql })
const history = syncHistoryWithStore(
  browserHistory,
  store
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={RootContainer}>
        <IndexRoute component={LandingContainer} />
        <Route path='dashboard' component={DashboardContainer}>
          <IndexRoute component={RecordsContainer} />
          <Route path='records' component={RecordsContainer} />
        </Route>
        <Route path='login' component={LoginContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)

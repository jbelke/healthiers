//import 'rxjs'

import './components/globals.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import createStore from './store'
import { LandingContainer } from './components/containers/landing-container'
import { LoginContainer } from './components/containers/login-container'
import { DashboardContainer } from './components/containers/dashboard-container'
import { RecordsContainer } from './components/containers/records-container'

import loginQuery from './graphql/queries/login.gql'
import { client } from './graphql'

client.mutate(loginQuery, { email: 'edesbalazs@gmail.com', password: 'doggoFroggo' })
  .then(e => console.log(e))
  .catch(e => console.log(e))

const RootContainer = ({children}) => <div>{children}</div>

const store = createStore()
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

import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from '../reducers'
import createEpics from '../epics'

export default function configureStore(dependencies) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(
        createEpicMiddleware(createEpics(dependencies)),
        routerMiddleware(browserHistory)
      )
    )
  )
  return store
}

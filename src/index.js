import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import ApplicationState from './reducers/ApplicationState.js'
import logger from 'redux-logger'

import './styles/global.css'
import './styles/normalize.css'

import SetupContainer from './containers/SetupContainer.js'
import TypographyContainer from './containers/TypographyContainer.js'
import ColorsContainer from './containers/ColorsContainer.js'
import SummaryContainer from './containers/SummaryContainer.js'

let store = createStore(
  ApplicationState,
  compose(
    applyMiddleware(logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={SetupContainer}/>
        <Route path="/typography" component={TypographyContainer}/>
        <Route path="/colors" component={ColorsContainer}/>
        <Route path="/summary" component={SummaryContainer}/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)

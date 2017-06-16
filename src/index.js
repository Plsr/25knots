import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import setup from './reducers/setup.js'
import logger from 'redux-logger'

import './styles/global.css'
import './styles/normalize.css'

import App from './components/App.jsx'
import Typography from './components/Typography.jsx'
import Intro from './components/Intro.jsx'

let store = createStore(
  setup,
  applyMiddleware(logger)
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/intro" component={Intro}/>
        <Route path="/typography" component={Typography}/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)

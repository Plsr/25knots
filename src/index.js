import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import './styles/global.css'
import './styles/normalize.css'

import App from './components/App.jsx'
import Typography from './components/Typography.jsx'
import Intro from './components/Intro.jsx'

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/intro" component={Intro}/>
      <Route path="/typography" component={Typography}/>
    </Switch>
  </Router>,
  document.getElementById('root')
)

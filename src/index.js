import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ApplicationState from './reducers/ApplicationState.js'
import logger from 'redux-logger'

import './styles/global.css'
import './styles/normalize.css'

import AppContainer from './containers/AppContainer.js'
import TypographyContainer from './containers/TypographyContainer.js'
import Intro from './components/Intro.jsx'

let store = createStore(
  ApplicationState,
  applyMiddleware(logger)
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={AppContainer}/>
        <Route path="/intro" component={Intro}/>
        <Route path="/typography" component={TypographyContainer}/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)

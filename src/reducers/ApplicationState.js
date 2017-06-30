import { combineReducers } from 'redux'

import setup from './setup.js'
import typography from './typography.js'

const ApplicationState = combineReducers({
  setup: setup,
  typography: typography
})

export default ApplicationState

import { combineReducers } from 'redux'

import setup from './setup.js'
import typography from './typography.js'
import colors from './colors.js'

const ApplicationState = combineReducers({
  setup: setup,
  typography: typography,
  colors: colors
})

export default ApplicationState

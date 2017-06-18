import { SET_SCOPE, SET_SETUP_TO_FINISHED, PREVIOUS_SETUP_STEP } from '../actions'

const initialState = {
  setupStep: 1,
  setupFinished: false,
  scopes: []
}

const setup = (state = initialState, action) => {
  switch (action.type) {
    case SET_SCOPE:
      return Object.assign({}, state, {
        setupStep: state.setupStep + 1,
        scopes: [
          ...state.scopes,
          action.scope
        ]
      })
    case SET_SETUP_TO_FINISHED:
      return Object.assign({}, state, {
        setupFinished: true
      })
    case PREVIOUS_SETUP_STEP:
      return Object.assign({}, state, {
        setupStep: state.setupStep - 1,
        scopes: state.scopes.slice(0, -1)
      })
    default:
      return state
  }
}

export default setup

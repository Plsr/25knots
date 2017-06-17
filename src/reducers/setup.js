import { NEXT_SETUP_STEP, SET_SCOPE, SET_SETUP_TO_FINISHED } from '../actions'

const initialState = {
  setupStep: 1,
  setupFinished: false,
  scopes: []
}

const setup = (state = initialState, action) => {
  switch (action.type) {
    // FIXME: Is this still needed?
    case NEXT_SETUP_STEP:
      return Object.assign({}, state, {
        setupStep: state.setupStep + 1
      })
    case SET_SCOPE:
      return Object.assign({}, state, {
        setupStep: state.setupStep + 1, // FIXME: Evaluate if this is still needed
        scopes: [
          ...state.scopes,
          action.scope
        ]
      })
    case SET_SETUP_TO_FINISHED:
      return Object.assign({}, state, {
        setupFinished: true
      })
    default:
      return state
  }
}

export default setup

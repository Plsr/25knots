import { NEXT_SETUP_STEP, SET_ARTIFACT_SCOPE } from '../actions'

const initialState = {
  setupStep: 0,
  setupFinished: false,
  artifactScope: undefined
}

const setup = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_SETUP_STEP:
      return Object.assign({}, state, {
        setupStep: state.setupStep + 1
      })
    case SET_ARTIFACT_SCOPE:
      return Object.assign({}, state, {
        setupStep: state.setupStep + 1,
        artifactScope: action.scope
      })
    default:
      return state
  }
}

export default setup

import { NEXT_SETUP_STEP } from '../actions'

const initialState = {
  setupStep: 0
}

const setup = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_SETUP_STEP:
      return Object.assign({}, state, {
        setupStep: state.setupStep++
      })
    default:
      return state
  }
}

export default setup

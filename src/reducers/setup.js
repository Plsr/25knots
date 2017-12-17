import { SET_SCOPES, RESET_SCOPES } from '../actions'

const initialState = {
  scopes: []
}

const setup = (state = initialState, action) => {
  switch (action.type) {
    case SET_SCOPES:
      return Object.assign({}, state, {
        scopes: [...action.scopes]
      })
    case RESET_SCOPES:
      return Object.assign({}, state, {
        scopes: []
      })
    default:
      return state
  }
}

export default setup

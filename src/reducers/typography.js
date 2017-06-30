import {SET_VALUE_FOR_KEY} from '../actions'

const initialState = {
  fontSize: 24,
  lineHeight: 1.4,
  textWidth: 600
}

const typography = (state = initialState, action) => {
  switch (action.type) {
    case SET_VALUE_FOR_KEY:
      return Object.assign({}, state, {
        [action.key]: action.value
      })
    default:
      return state
  }
}

export default typography

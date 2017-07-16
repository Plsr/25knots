import {SET_VALUE_FOR_KEY} from '../actions'

import {COLORS} from '../components/helpers/constants/colors.js'

const initialState = {
  baseColor: COLORS[Object.keys(COLORS)[0]].color
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

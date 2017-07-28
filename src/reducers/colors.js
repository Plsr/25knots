import { SET_VALUE_FOR_KEY, NEXT_SETUP_STEP, PREVIOUS_SETUP_STEP, FINISH_COLOR_WIZARD, SET_COLOR_CONTRAST } from '../actions'

import {COLORS} from '../components/helpers/constants/colors.js'

const initialState = {
  step: 1,
  baseColor: COLORS[Object.keys(COLORS)[0]].color

}

const typography = (state = initialState, action) => {
  switch (action.type) {
    case SET_VALUE_FOR_KEY:
      return Object.assign({}, state, {
        [action.key]: action.value
      })
    case NEXT_SETUP_STEP:
      return Object.assign({}, state, {
        step: state.step + 1
      })
    case PREVIOUS_SETUP_STEP:
      return Object.assign({}, state, {
        step: state.step - 1
      })
    case FINISH_COLOR_WIZARD:
      return Object.assign({}, state, {
        step: 3
      })
    case SET_COLOR_CONTRAST:
      return Object.assign({}, state, {
        contrast: {
          contrastType: action.contrastType,
          colors: [
            ...action.colors
          ]
        }
      })
    default:
      return state
  }
}

export default typography

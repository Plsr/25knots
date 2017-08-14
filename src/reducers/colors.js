import { SET_VALUE_FOR_KEY, NEXT_COLOR_WIZARD_STEP, PREVIOUS_COLOR_WIZARD_STEP, FINISH_COLOR_WIZARD, SET_COLOR_CONTRAST, FIRST_COLOR_WIZARD_STEP, SET_BASE_COLORS } from '../actions'

import {COLORS} from '../helpers/constants/colors.js'

const initialState = {
  baseColors: [
    COLORS[Object.keys(COLORS)[0]].color
  ],
  contrast: {
    colors: []
  },
  step: 1,
  colorWizardFinished: false
}

const typography = (state = initialState, action) => {
  switch (action.type) {
    case SET_VALUE_FOR_KEY:
      return Object.assign({}, state, {
        [action.key]: action.value
      })
    case NEXT_COLOR_WIZARD_STEP:
      return Object.assign({}, state, {
        step: state.step + 1
      })
    case PREVIOUS_COLOR_WIZARD_STEP:
      return Object.assign({}, state, {
        step: state.step - 1
      })
    case FINISH_COLOR_WIZARD:
      return Object.assign({}, state, {
        step: 3,
        colorWizardFinished: true
      })
    case FIRST_COLOR_WIZARD_STEP:
      return Object.assign({}, state, {
        step: 1
      })
    case SET_BASE_COLORS:
      return Object.assign({}, state, {
        baseColors: [
          ...action.colors
        ]
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

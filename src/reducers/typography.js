import {SET_VALUE_FOR_KEY, SET_GENERAL_VALUE_FOR_KEY, SET_VALUE_IN_AREA, SET_ERRORS, RESET_TYPOGRAPHY_DATA} from '../actions'

const initialState = {
  general: {
    fontFamily: 'Arial',
    fontSize: 16,
    lineHeight: 140,
    textWidth: 580,
    textSpacing: 20
  },
  headline1: {
    size: 36,
    spacingTop: 46,
    spacingBottom: 26
  },
  headline2: {
    size: 28,
    spacingTop: 42,
    spacingBottom: 20
  },
  headline3: {
    size: 20,
    spacingTop: 28,
    spacingBottom: 14
  },
  colors: {
    background: '#ffffff',
    foreground: '#000000'
  },
  errorsPresent: false
}

const typography = (state = initialState, action) => {
  switch (action.type) {
    case SET_VALUE_FOR_KEY:
      return Object.assign({}, state, {
        [action.key]: action.value
      })
    case SET_GENERAL_VALUE_FOR_KEY:
      return Object.assign({}, state, {
        general: {
          ...state.general,
          [action.key]: action.value
        }
      })
    case SET_VALUE_IN_AREA:
      return Object.assign({}, state, {
        [action.area]: {
          ...state[action.area],
          [action.key]: action.value
        }
      })
    case SET_ERRORS:
      return Object.assign({}, state, {
        errorsPresent: action.errorsPresent
      })
    case RESET_TYPOGRAPHY_DATA:
      return initialState
    default:
      return state
  }
}

export default typography

import {SET_VALUE_FOR_KEY, SET_GENERAL_VALUE_FOR_KEY, SET_VALUE_IN_AREA} from '../actions'

const initialState = {
  general: {
    fontFamily: 'Arial',
    fontSize: 16,
    lineHeight: 140,
    textWidth: 600,
    textSpacing: 20,
    errors: {
      size: [
        'Test'
      ]
    }
  },
  headline1: {
    size: 48,
    spacingTop: 40,
    spacingBottom: 20,
    errors: {
    }
  },
  headline2: {
    size: 36,
    spacingTop: 30,
    spacingBottom: 15,
    errors: {

    }
  },
  headline3: {
    size: 24,
    spacingTop: 20,
    spacingBottom: 10,
    errors: {

    }
  },
  colors: {
    background: '#ffffff',
    foreground: '#000000',
    contrastPassing: {
      AAA: true,
      AA: true,
      A: true
    }
  }
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
    default:
      return state
  }
}

export default typography

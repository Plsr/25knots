import {SET_VALUE_FOR_KEY} from '../actions'

const initialState = {
  fontFamily: 'Arial',
  fontSize: 16,
  lineHeight: 140,
  textWidth: 600,
  textSpacing: 20,
  headline1Size: 48,
  headline1SpacingTop: 40,
  headline1SpacingBottom: 20,
  headline2Size: 36,
  headline2SpacingTop: 30,
  headline2SpacingBottom: 15,
  headline3Size: 24,
  headline3SpacingTop: 20,
  headline3SpacingBottom: 10,
  backgroundColor: '#ffffff',
  foregroundColor: '#000000'
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

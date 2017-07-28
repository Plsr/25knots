import { connect } from 'react-redux'
import { setValueForKey, nextSetupStep, previousSetupStep, finishColorWizard, setColorContrast } from '../actions'
import Colors from '../components/colors/Colors.jsx'

import {COLORS, MATERIAL_COLORS, IOS_COLORS} from '../components/helpers/constants/colors.js'
import {SCOPES} from '../components/helpers/constants/scopes.js'

const mapStateToProps = (state, ownProps) => {
  let colorState = state.colors
  let scopes = state.setup.scopes
  let colorSet = getColorsetForScope(scopes[1])

  return {
    ...colorState,
    colorSet,
    scopes: [
      ...scopes
    ],
    ...ownProps
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setValueForKey: (value, key) => {
      dispatch(setValueForKey(value, key))
    },
    nextSetupStep: () => {
      dispatch(nextSetupStep())
    },
    previousSetupStep: () => {
      dispatch(previousSetupStep())
    },
    finishColorWizard: () => {
      dispatch(finishColorWizard())
    },
    setColorContrast: (contrastType, colors) => {
      dispatch(setColorContrast(contrastType, colors))
    }
  }
}

// Get the colors for the currently set scope
const getColorsetForScope = (scope) => {
  switch (scope) {
    case SCOPES.ANDROID:
      return MATERIAL_COLORS
    case SCOPES.IOS:
      return IOS_COLORS
    default:
      return COLORS
  }
}

const ColorsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Colors)

export default ColorsContainer

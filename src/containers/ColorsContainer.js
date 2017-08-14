import { connect } from 'react-redux'
import { setValueForKey, nextColorWizardStep, previousColorWizardStep, finishColorWizard, setColorContrast, firstColorWizardStep, setBaseColors } from '../actions'
import Colors from '../components/colors/Colors.jsx'

import {COLORS, MATERIAL_COLORS, IOS_COLORS} from '../helpers/constants/colors.js'
import {SCOPES} from '../helpers/constants/scopes.js'

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
      dispatch(nextColorWizardStep())
    },
    previousSetupStep: () => {
      dispatch(previousColorWizardStep())
    },
    finishColorWizard: () => {
      dispatch(finishColorWizard())
    },
    firstColorWizardStep: () => {
      dispatch(firstColorWizardStep())
    },
    setColorContrast: (contrastType, colors) => {
      dispatch(setColorContrast(contrastType, colors))
    },
    setBaseColors: (colors) => {
      dispatch(setBaseColors(colors))
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

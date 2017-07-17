import { connect } from 'react-redux'
import { setValueForKey, nextSetupStep, previousSetupStep } from '../actions'
import Colors from '../components/colors/Colors.jsx'

const mapStateToProps = (state, ownProps) => {
  let colorState = state.colors
  let scopes = state.setup.scopes


  return {
    ...colorState,
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
    }
  }
}


const ColorsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Colors)

export default ColorsContainer

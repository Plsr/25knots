import { connect } from 'react-redux'
import { setScope, setSetupToFinished, previousSetupStep, resetSetup } from '../actions'
import Setup from '../components/setup/Setup.jsx'

const mapStateToProps = (state, ownProps) => {
  let setupState = state.setup
  return {
    setupStep: setupState.setupStep,
    setupFinished: setupState.setupFinished,
    scopes: setupState.scopes,
    ...ownProps
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    setScope: scope => {
      dispatch(setScope(scope))
    },
    setSetupToFinished: () => {
      dispatch(setSetupToFinished())
    },
    previousSetupStep: () => {
      dispatch(previousSetupStep())
    },
    resetSetup: () => {
      dispatch(resetSetup())
    }
  }
}

const SetupContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Setup)

export default SetupContainer

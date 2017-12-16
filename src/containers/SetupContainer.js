import { connect } from 'react-redux'
import { setScope, setScopes, setSetupToFinished, previousSetupStep, resetSetup } from '../actions'
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
    },
    setScopes: scopes => {
      dispatch(setScopes(scopes))
    }
  }
}

const SetupContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Setup)

export default SetupContainer

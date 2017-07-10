import { connect } from 'react-redux'
import { setScope, setSetupToFinished, previousSetupStep, resetSetup } from '../actions'
import App from '../components/App.jsx'

const mapStateToProps = (state, ownProps) => {
  let setupState = state.setup
  return {
    setupStep: setupState.setupStep,
    setupFinished: setupState.setupFinished,
    scopes: setupState.scopes,
    ...ownProps
  }
}:

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

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer

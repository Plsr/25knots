import { connect } from 'react-redux'
import { setScope, setSetupToFinished, previousSetupStep, resetSetup } from '../actions'
import App from '../components/App.jsx'

const mapStatetoProps = (state, ownProps) => {
  return {
    setupStep: state.setupStep,
    setupFinished: state.setupFinished,
    scopes: state.scopes,
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

export const AppContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(App)

import { connect } from 'react-redux'
import { setScope, setSetupToFinished, previousSetupStep } from '../actions'
import Setup from '../components/Setup.jsx'

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
    }
  }
}

export const SetupContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(Setup)

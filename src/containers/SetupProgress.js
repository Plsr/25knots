import { connect } from 'react-redux'
import { setScope, setSetupToFinished } from '../actions'
import SetupContainer from '../components/SetupContainer.jsx'

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
    }
  }
}

export const SetupProgress = connect(
  mapStatetoProps,
  mapDispatchToProps
)(SetupContainer)

import { connect } from 'react-redux'
import { setArtifactScope } from '../actions'
import SetupContainer from '../components/SetupContainer.jsx'

const mapStatetoProps = (state, ownProps) => {
  return {
    setupStep: state.setupStep,
    setupFinished: state.setupFinished,
    artifactScope: state.artifactScope,
    ...ownProps
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNextButtonClick: scope => {
      dispatch(setArtifactScope(scope))
    }
  }
}

export const SetupProgress = connect(
  mapStatetoProps,
  mapDispatchToProps
)(SetupContainer)

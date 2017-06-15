import { connect } from 'react-redux'
import { nextSetupStep } from '../actions'
import SetupContainer from '../components/SetupContainer.jsx'

const mapStatetoProps = (state) => {
  return {
    setupStep: state.setupStep
  }
}

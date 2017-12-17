import { connect } from 'react-redux'
import { setScopes, resetScopes } from '../actions'
import Setup from '../components/setup/Setup.jsx'

const mapStateToProps = (state) => {
  let scopes = state.setup.scopes
  return {
    scopes: scopes,
    scopesSelected: scopes.length > 0
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    setScopes: scopes => dispatch(setScopes(scopes)),
    resetScopes: () => dispatch(resetScopes())
  }
}

const SetupContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Setup)

export default SetupContainer

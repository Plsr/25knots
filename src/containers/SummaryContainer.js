import { connect } from 'react-redux'
import Summary from '../components/summary/Summary.jsx'

const mapStateToProps = (state, ownProps) => {

  return {
    scopesPresent: state.setup.scopes.length > 0,
    ...state,
    ...ownProps
  }
}


const ColorsContainer = connect(
  mapStateToProps
)(Summary)

export default ColorsContainer

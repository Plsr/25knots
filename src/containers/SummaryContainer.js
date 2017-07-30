import { connect } from 'react-redux'
import Summary from '../components/summary/Summary.jsx'

const mapStateToProps = (state, ownProps) => {

  return {
    ...state,
    ...ownProps
  }
}


const ColorsContainer = connect(
  mapStateToProps
)(Summary)

export default ColorsContainer

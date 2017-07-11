import { connect } from 'react-redux'
import { setValueForKey, setGeneralValueForKey, setValueInArea, setErrors } from '../actions'
import Typography from '../components/Typography.jsx'

const mapStateToProps = (state, ownProps) => {
  let typographyState = state.typography
  let scopes = state.setup.scopes
  
  return {
    ...typographyState,
    scopes: [
      ...scopes
    ],
    ...ownProps
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setValueForKey: (value, key) => {
      dispatch(setValueForKey(value, key))
    },
    setGeneralValueForKey: (value, key) => {
      dispatch(setGeneralValueForKey(value, key))
    },
    setValueInArea: (area, value, key) => {
      dispatch(setValueInArea(area, value, key))
    },
    setErrors: (errors) => {
      dispatch(setErrors(errors))
    }
  }
}


const TypographyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Typography)

export default TypographyContainer

import { connect } from 'react-redux'
import { setValueForKey } from '../actions'
import Typography from '../components/Typography.jsx'

const mapStateToProps = (state, ownProps) => {
  let typographyState = state.typography
  return {
    fontSize: typographyState.fontSize,
    lineHeight: typographyState.lineHeight,
    textWidth: typographyState.textWidth,
    ...ownProps
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setValueForKey: (value, key) => {
      dispatch(setValueForKey(value, key))
    }
  }
}


const TypographyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Typography)

export default TypographyContainer

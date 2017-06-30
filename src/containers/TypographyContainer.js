import { connect } from 'react-redux'
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


const TypographyContainer = connect(
  mapStateToProps
)(Typography)

export default TypographyContainer

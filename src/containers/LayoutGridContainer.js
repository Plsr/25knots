import { connect } from 'react-redux'

import LayoutGrid from '../components/layout-grid/LayoutGrid.jsx'


const mapStateToProps = (state, ownProps) => {
  let scopes = state.setup.scopes

  return {
    ...state,
    scopes: [
      ...scopes
    ],
    ...ownProps
  }
}


const LayoutGridContainer = connect(
  mapStateToProps
)(LayoutGrid)

export default LayoutGridContainer

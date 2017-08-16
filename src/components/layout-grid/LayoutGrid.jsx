import React from 'react'
import { Redirect } from 'react-router'

import SCOPES from '../../helpers/constants/scopes.js'

export default class LayoutGrid extends React.Component {


  render () {

    // If no scope is set, return to home page
    if ( this.props.scope == undefined ) {
      return <Redirect to="/" />
    }

    if ( this.props.scope[0] === SCOPES.NATIVE_APP ) {
      return (
        <div>
          Layout & Grid for Native
        </div>
      )
    } else {
      return (
        <div>
          Layout & Grid
        </div>
      )
    }

  }
}

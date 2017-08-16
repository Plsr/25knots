import React from 'react'
import { Redirect } from 'react-router'

import SCOPES from '../../helpers/constants/scopes.js'

import FullbleedImageText from '../shared/FullbleedImageText.jsx'

export default class LayoutGrid extends React.Component {

  render () {

    // If no scope is set, return to home page
    if ( this.props.scope == undefined ) {
      return <Redirect to="/" />
    }

    let broadScope = this.props.scope[0]
    let fineScope = this.props.scope[1]

    if ( broadScope == SCOPES.NATIVE_APP ) {
      return (
        <FullbleedImageText
          htmlText={TEXT_ELEMENTS[fineScope]}
          imageName={IMAGE_PATHS[fineScope]}
        />
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

const TEXT_ELEMENTS = {
  IOS: <p>When Building your Interfaces, Xcode will help you with laying out your elements. <br/>Please stick to theses guidelines and also accomodate the <a href="https://developer.apple.com/ios/human-interface-guidelines/visual-design/layout/">Human Interface Design Guidelines.</a></p>,
  ANDROID: <p>The <a href="https://material.io/guidelines/layout/principles.html">Material Design Guidelines</a> do provide a detailed guide to layouts. Please stick to them</p>
}

const IMAGE_PATHS = {
  IOS: 'xcode-guidelines.png',
  ANDROID: undefined
}

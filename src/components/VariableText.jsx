import React from 'react'

import {randomDummyParagraph} from './helpers/constants/dummyText'

function VariableText(props) {
  return(
    <p style={setStyles(props)}>{randomDummyParagraph()}</p>
  )
}

function setStyles(props) {
  let styles = {
    fontSize: props.fontSize + 'px',
    lineHeight: props.lineHeight,
    marginBottom: props.spacingBottom + 'px'
  }

  return styles
}

export default VariableText

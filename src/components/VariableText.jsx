import React from 'react'

function VariableText(props) {
  return(
    <p style={setStyles(props)}>{props.children}</p>
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

import React from 'react'

function VariableHeadline(props) {
  const styles = {
    fontSize: props.fontSize + 'px',
    marginTop: props.SpacingTop + 'px',
    marginBottom: props.SpacingBottom + 'px'
  }
  return(
    <span style={styles}>
      {props.children}
    </span>
  )
}

export default VariableHeadline

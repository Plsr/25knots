import React from 'react'

function VariableHeadline(props) {
  const styles = {
    fontSize: props.fontSize,
    marginTop: props.topSpacing,
    marginBottom: props.bottomSpacing
  }
  return(
    <span style={styles}>
      {props.children}
    </span>
  )
}

export default VariableHeadline

import React from 'react'

function VariableHeadline(props) {
  const styles = {
    fontSize: props.fontSize + 'px',
    marginTop: props.spacingTop + 'px',
    marginBottom: props.spacingBottom + 'px',
    display: 'block'
  }

  console.log(styles);
  return(
    <span style={styles}>
      {props.children}
    </span>
  )
}

export default VariableHeadline

import React from 'react'

import {randomDummyHeadline} from './helpers/constants/dummyText'

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
      {randomDummyHeadline()}
    </span>
  )
}

export default VariableHeadline

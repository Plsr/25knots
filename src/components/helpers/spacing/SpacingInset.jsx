import React from 'react'

import { spacing } from '../../../styles/base/spacing'

let getSize = (size) => {
  return size ? spacing[size] : spacing['m']
}

const SpacingInset = (props) => (
  <div style={{ padding: getSize(props.size)}}>
    {props.children}
  </div>
)

export default SpacingInset

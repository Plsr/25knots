import React from 'react'
// Local imports
import { getSize } from '../../../utils/spacingHelper.js'

/**
 * A wrapper element for inset spacing.
 * Takes one of the sizes defined in styles/base/spacing.js as a prop
 */
function SpacingInset(props) {
  return (
    <div style={{ padding: getSize(props.size)}}>
      {props.children}
    </div>
  )
}

export default SpacingInset

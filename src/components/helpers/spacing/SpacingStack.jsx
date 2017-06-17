import React from 'react'
// Local imports
import { getSize } from '../../../utils/spacingHelper.js'

/**
 * A wrapper element for stack spacing.
 * Takes one of the sizes defined in styles/base/spacing.js as a prop
 */
function SpacingStack(props) {
  return (
    <div style={{ marginBottom: getSize(props.size)}}>
      {props.children}
    </div>
  )
}

export default SpacingStack

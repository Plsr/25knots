import React from 'react'
// Local imports
import { getSize } from '../../../utils/spacingHelper.js'

/**
 * A wrapper element for stack spacing.
 * Takes one of the sizes defined in styles/base/spacing.js as a prop
 */
function SpacingInline(props) {
  return (
    <div style={{ paddingRight: getSize(props.size), display: 'inline'}}>
      {props.children}
    </div>
  )
}

export default SpacingInline

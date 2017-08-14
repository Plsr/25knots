import React from 'react'
// Local imports
import { getSize } from '../../../utils/spacingHelper.js'

/**
 * A wrapper element for inset spacing.
 * Takes one of the sizes defined in styles/base/spacing.js as a prop
 */
function SpacingInset({size, displayStyle, children}) {
  return (
    <div style={{ padding: getSize(size), display: displayStyle}}>
      {children}
    </div>
  )
}

SpacingInset.defaultProps = {
  displayStyle: 'block'
}

export default SpacingInset

import React from 'react'
// Local imports
import { spacing } from '../../../styles/base/spacing'

/**
 * Returns the desired size of the SpacingInset component.
 * Throws an error, if the size is not defined. There is no fallback size here
 * because styling shouldn't happen 'by chance'.
 *
 * @param {String} The size form the component's props
 * @return {spacing} The accroding spacing
 */
let getSize = (size) => {
  if(size === undefined)
    throw new Error('SpacingInset does need an explicit size')

  let pixelSize = spacing[size]

  if(pixelSize === undefined)
    throw new Error('The provided size for SpacingInset is not valid.')

  return pixelSize
}

/**
 * A wrapper element for inset spacing.
 * Takes one of the sizes defined in styles/base/spacing.js as a props
 */
function SpacingInset(props) {
  return (
    <div style={{ padding: getSize(props.size)}}>
      {props.children}
    </div>
  )
}

export default SpacingInset

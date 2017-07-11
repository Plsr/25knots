import React from 'react'
// Local imports
import { getSize } from '../../../utils/spacingHelper.js'

/**
 * A wrapper element for squished inset spacing.
 * Takes one of the sizes defined in styles/base/spacing.js as a prop
 */
function SpacingStrechedInset(props) {
  return (
    <div style={generateStyles(props.size)}>
      {props.children}
    </div>
  )
}

/**
 * Generates the styles for the SquishedInste.
 * Left and right spacing is of the given size, top and bottom is half of the
 * given size.
 */
let generateStyles = (size) => {
  const pixelSize = getSize(size)

  /**
   * getSize() returns a string in the style of '4px'. In order to calculate half
   * of the value, we need to parse it as an int an then re-append px.
   */
  const halfPixelSize = parseInt(pixelSize, 10) / 2 + 'px'

  const styles = {
    paddingTop: pixelSize,
    paddingBottom: pixelSize,
    paddingLeft: halfPixelSize,
    paddingRight: halfPixelSize
  }

  return styles
}


export default SpacingStrechedInset

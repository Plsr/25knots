import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import { baseColors } from '../styles/base/colors.js'

/**
 * Displays a given SVG path
 * Heavily inspired by David Gilbertsons article:
 * https://medium.com/@david.gilbertson/icons-as-react-components-de3e33cb8792
 */
function Icon(props) {
  // If no size is given, default to 22 x 22
  let size = props.size || '22'

  // If no color is given, default to black
  let color = props.color || baseColors.black

  return(
    <svg width={size} height={size} viewBox="0 0 1024 1024">
      <path style={{fill: color}} d={props.icon}></path>
    </svg>
  )
}

export default Icon

import React from 'react'
import PropTypes from 'prop-types'

/**
 * Displays a given SVG path
 * Heavily inspired by David Gilbertsons article:
 * https://medium.com/@david.gilbertson/icons-as-react-components-de3e33cb8792
 */
const Icon = ({ size, color, icon }) => (
  <svg width={size} height={size} viewBox="0 0 1024 1024">
    <path style={{fill: color}} d={icon}></path>
  </svg>
)

Icon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  icon: PropTypes.string.isRequired
}

Icon.defaultProps = {
  size: 22,
  color: 'currentColor'
}

export default Icon

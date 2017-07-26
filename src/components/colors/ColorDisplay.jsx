import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'

const ColorDisplay = ({size, active, onClick, hexVal, colorName, saturation}) => {

  const styles = StyleSheet.create({
    wrapperStyles: {
      display: 'inline-block'
    },
    colorCircleStyles: {
      width: size,
      height: size,
      borderRadius: '50%',
      backgroundColor: hexVal,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    activeStyles: {
      border: '5px solid blue'
    }
  })

  return (
    <div className={css(styles.wrapperStyles)}>
      <div
        className={
          css(
            styles.colorCircleStyles,
            active && styles.activeStyles
          )
        }
        onClick={onClick}
      >
        {hexVal}
      </div>
      {colorName}
      {saturation}
    </div>
  )
}

ColorDisplay.defaultProps = {
  size: '100px',
  active: false
}

ColorDisplay.proptypes = {
  size: PropTypes.string,
  active: PropTypes.boolean,
  onClick: PropTypes.func,
  hexVal: PropTypes.string,
  colorName: PropTypes.string,
  satureation: PropTypes.number
}

export default ColorDisplay

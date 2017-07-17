import React from 'react'
import { StyleSheet, css } from 'aphrodite'

function ColorDisplay(props) {

  const styles = StyleSheet.create({
    wrapperStyles: {
      display: 'inline-block'
    },
    colorCircleStyles: {
      width: props.size || '100px',
      height: props.size || '100px',
      borderRadius: '50%',
      backgroundColor: props.hexVal,
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
            props.active && styles.activeStyles
          )
        }
        onClick={props.onClick}
      >
        {props.hexVal}
      </div>
      {props.colorName}
      {props.saturation}
    </div>
  )
}
export default ColorDisplay

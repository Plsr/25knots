import React from 'react'
import { StyleSheet, css } from 'aphrodite'

function ColorDisplay(props) {
  
  const styles = StyleSheet.create({
    colorCircleStyles: {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      backgroundColor: props.hexVal,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  })

  return (
    <div>
      <div className={css(styles.colorCircleStyles)}>
        {props.hexVal}
      </div>
      {props.colorName}
      {props.saturation}
    </div>
  )
}
export default ColorDisplay

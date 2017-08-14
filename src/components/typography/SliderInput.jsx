import React from 'react'
import {StyleSheet, css} from 'aphrodite'

function SliderInput(props) {
  return (
    <input
      type="range"
      min={props.min}
      max={props.max}
      step={1}
      value={props.value}
      onChange={e => {
        e.preventDefault()
        props.handleChange(props.storeKey, e.target.value)
      }}
      className={css(styles.inputStyles)}
    />
  )
}

const styles = StyleSheet.create({
  inputStyles: {
    width: '100%'
  }
})

export default SliderInput

import React from 'react'
import {StyleSheet, css} from 'aphrodite'

import SliderInput from './SliderInput.jsx'
import UnitValueDisplay from './UnitValueDisplay.jsx'


function SliderController(props) {
  return(
    <div>
      <span className={css(styles.titleStyles)}>{props.title}</span>
      <span>{props.error}</span>
      <SliderInput value={props.value} handleChange={props.handleChange} storeKey={props.storeKey} />
      <UnitValueDisplay value={props.value} unit={props.unit} />
    </div>
  )
}

const styles = StyleSheet.create({
  titleStyles: {
    display: 'block'
  }
})

export default SliderController

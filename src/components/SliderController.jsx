import React from 'react'

import SliderInput from './SliderInput.jsx'
import UnitValueDisplay from './UnitValueDisplay.jsx'


function SliderController(props) {
  return(
    <div>
      <span>{props.title}</span>
      <span>{props.error}</span>
      <SliderInput value={props.value} handleChange={props.handleChange} storeKey={props.storeKey} />
      <UnitValueDisplay value={props.value} unit={props.unit} />
    </div>
  )
}

export default SliderController

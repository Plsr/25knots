import React from 'react'

function SliderInput(props) {
  return(
    <input
      type="range"
      defaultValue={props.value}
      min={props.min}
      max={props.max}
    />
  )
}

export default SliderInput

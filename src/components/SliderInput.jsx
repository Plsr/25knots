import React from 'react'

function SliderInput(props) {
  return(
    <input
      type="range"
      defaultValue={props.value}
      min={props.min}
      max={props.max}
      onChange={e => {
        e.preventDefault()
        props.handleChange(props.storeKey, e.target.value)
      }}
    />
  )
}

export default SliderInput

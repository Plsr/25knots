import React from 'react'

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
    />
  )
}

export default SliderInput

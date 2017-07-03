import React from 'react'

function UnitValueDisplay(props) {
  return (
    <div>
      <span>{props.value}</span>
      <span>{props.unit}</span>
    </div>
  )
}

export default UnitValueDisplay

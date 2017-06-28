import React from 'react'

function TabTitle(props) {
  return(
    <div onClick={() => props.onClick(props.id)}>
      {props.children}
    </div>
  )
}

export default TabTitle

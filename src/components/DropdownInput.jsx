import React from 'react'

function DropdownInput(props) {
  function handleChange(event) {
    props.onChange(props.storeKey, event.target.value)
  }
  return (
    <select
      value={props.value}
      onChange={handleChange}
    >
      {setOptionTags(props.options)}
    </select>
  )
}

function setOptionTags(options) {
  let optionTags = []
  for (var i = 0; i < options.length; i++) {
    let currentOption = options[i]

    optionTags.push(
      <option
        value={currentOption}
        key={i}
      >
        {currentOption}
      </option>
    )
  }

  return optionTags
}

export default DropdownInput

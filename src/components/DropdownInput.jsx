import React from 'react'

function DropdownInput(props) {
  return (
    <select>
      {setOptionTags(props)}
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
        currentOption
      </option>
    )
  }

  return optionTags
}

export default DropdownInput

import React from 'react'
import {StyleSheet, css} from 'aphrodite'

function DropdownInput(props) {
  function handleChange(event) {
    props.onChange(props.storeKey, event.target.value)
  }
  return (
    <select
      value={props.value}
      onChange={handleChange}
      className={css(styles.selectStyles)}
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

const styles = StyleSheet.create({
  selectStyles: {
    width: '100%'
  }
})

export default DropdownInput

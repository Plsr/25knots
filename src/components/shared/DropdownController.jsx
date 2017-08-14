import React from 'react'
import {StyleSheet, css} from 'aphrodite'

import DropdownInput from './DropdownInput.jsx'

function DropdownController(props) {
  return (
    <div>
      <span className={css(styles.titleStyles)}>{props.title}</span>
      <span>{props.error}</span>
      <DropdownInput
        value={props.value}
        onChange={props.onChange}
        options={props.options}
        storeKey={props.storeKey}
      />
    </div>
  )
}

const styles = StyleSheet.create({
  titleStyles: {
    display: 'block'
  }
})

export default DropdownController

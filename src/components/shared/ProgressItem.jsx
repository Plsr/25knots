import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import { baseColors } from '../../styles/base/colors.js'

function ProgressItem(props) {
  return (
    <li className={css(styles.NavigationItem)}>
      <span className={css(styles.ProgressTextStyle)}> {props.title} </span>
    </li>
  )
}

const styles = StyleSheet.create({
  NavigationItem: {
    display: 'inline'
  },
  ProgressTextStyle: {
    color: baseColors.midGrey
  }
})

export default ProgressItem

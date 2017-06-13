import React from 'react'
import { Link } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite'

import { baseColors, appColors } from '../../styles/base/colors.js'

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

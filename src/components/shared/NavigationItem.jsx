import React from 'react'
import { Link } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite'

import { baseColors, appColors } from '../../styles/base/colors.js'

function NavigationItem(props, context) {
  return (
    <li className={css(styles.NavigationItem)}>
      <Link className={css(styles.LinkStyle)} to={props.path}>{props.title}</Link>
    </li>
  )
}

const styles = StyleSheet.create({
  NavigationItem: {
    display: 'inline'
  },
  LinkStyle: {
    color: baseColors.midGrey,
    textDecoration: 'none'
  }
})

export default NavigationItem

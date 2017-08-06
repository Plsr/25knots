import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import { baseColors, appColors } from '../../styles/base/colors.js'

function ProgressItem({ title, active }) {
  return (
    <li className={css(styles.NavigationItem)}>
      <span className={
        css(
          styles.ProgressTextStyle,
          active && styles.activeTextStyles
        )
      }>
        {title}
      </span>
    </li>
  )
}

const styles = StyleSheet.create({
  NavigationItem: {
    display: 'inline'
  },
  ProgressTextStyle: {
    color: baseColors.midGrey
  },
  activeTextStyles: {
    color: appColors.primary
  }
})

export default ProgressItem

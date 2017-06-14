import React from 'react'
import { Link } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite'

import ProgressItem from './ProgressItem.jsx'
import SpacingStack from '../helpers/spacing/SpacingStack.jsx'
import { spacing } from '../../styles/base/spacing'
import { baseColors } from '../../styles/base/colors'

function Progress() {
  return (
    <ul className={css(styles.ListStyles)}>
      <ProgressItem title='Intro' />
      <ProgressItem title='Typography' />
      <ProgressItem title='Grids & Layout' />
      <ProgressItem title='Farben' />
      <ProgressItem title='Ergebnisse' />
    </ul>
  )
}

const styles = StyleSheet.create ({
  ListStyles: {
    padding: spacing.m,
    display: 'flex',
    justifyContent: 'space-between',
    listStyle: 'none',
    margin: 0,
    backgroundColor: baseColors.ultraLightGrey
  }
})

export default Progress

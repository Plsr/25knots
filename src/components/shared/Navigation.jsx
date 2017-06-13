import React from 'react'
import { Link } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite'

import NavigationItem from './NavigationItem.jsx'
import SpacingInset from '../helpers/spacing/SpacingInset.jsx'
import { spacing } from '../../styles/base/spacing'

function Navigation() {
  return (
    <ul className={css(styles.ListStyles)}>
      <NavigationItem path='/intro' title='Intro' />
      <NavigationItem path='/typography' title='Typography' />
      <NavigationItem path='/intro' title='Grids & Layout' />
      <NavigationItem path='/intro' title='Farben' />
      <NavigationItem path='/intro' title='Ergebnisse' />
    </ul>
  )
}

const styles = StyleSheet.create ({
  ListStyles: {
    padding: spacing.m,
    display: 'flex',
    justifyContent: 'space-between',
    listStyle: 'none',
    margin: 0
  }
})

export default Navigation

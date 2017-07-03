import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import ProgressItem from './ProgressItem.jsx'
import NavigationBackground from './NavigationBackground.jsx'

function Progress() {
  return (
    <NavigationBackground>
      <ul className={css(styles.ListStyles)}>
        <ProgressItem title='Intro' />
        <ProgressItem title='Typography' />
        <ProgressItem title='Grids & Layout' />
        <ProgressItem title='Farben' />
        <ProgressItem title='Ergebnisse' />
      </ul>
    </NavigationBackground>
  )
}

const styles = StyleSheet.create({
  ListStyles: {
    display: 'flex',
    justifyContent: 'space-between',
    listStyle: 'none',
    margin: 0
  }
})

export default Progress

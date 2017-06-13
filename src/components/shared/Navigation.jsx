import React from 'react'
import { Link } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite'

import NavigationItem from './NavigationItem.jsx'
import SpacingInset from '../helpers/spacing/SpacingInset.jsx'

function Navigation() {
  return (
    <ul className={css(styles.ListStyles)}>
      <SpacingInset size='m'>
        <NavigationItem path='/intro' title='Intro' />
        <li>
          <Link to='/typography'>Typography</Link>
        </li>
        <li>
          <Link to='/intro'>Grids & Layout</Link>
        </li>
        <li>
          <Link to='/intro'>Farben</Link>
        </li>
        <li>
          <Link to='/intro'>Ergebnisse</Link>
        </li>
      </SpacingInset>
    </ul>
  )
}

const styles = StyleSheet.create ({
  ListStyles: {
    listStyle: 'none'
  }
})

export default Navigation

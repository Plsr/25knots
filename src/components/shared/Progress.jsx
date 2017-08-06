import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import ProgressItem from './ProgressItem.jsx'
import NavigationBackground from './NavigationBackground.jsx'

const Progress = ({ currentPath }) => {
  return (
    <NavigationBackground>
      <ul className={css(styles.ListStyles)}>
        <ProgressItem title='Intro' active={currentPath === '/'} />
        <ProgressItem title='Typography' active={currentPath === '/typography'} />
        <ProgressItem title='Colors' active={currentPath === '/colors'} />
        <ProgressItem title='Summary' active={currentPath === '/summary'} />
      </ul>
    </NavigationBackground>
  )
}

const styles = StyleSheet.create({
  ListStyles: {
    display: 'flex',
    justifyContent: 'space-around',
    listStyle: 'none',
    margin: 0
  }
})

export default Progress

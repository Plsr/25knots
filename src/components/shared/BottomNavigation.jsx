import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import NavigationBackground from './NavigationBackground.jsx'
import NavigationButton from './NavigationButton.jsx'

function BottomNavigation(props) {
  return (
    <div>
      <NavigationBackground shadowVariant='up' >
        <div className={css(styles.alignRight)}>
          <NavigationButton to={props.to} inactive={props.inactive} >
            {props.title}
          </NavigationButton>
        </div>
      </NavigationBackground>
    </div>
  )
}

const styles = StyleSheet.create({
  alignRight: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
})

export default BottomNavigation

import React from 'react'
import {StyleSheet, css} from 'aphrodite'

import SpacingInset from '../helpers/spacing/SpacingInset.jsx'
import {baseColors} from '../../styles/base/colors.js'

function NavigationBackground(props) {
  return (
    <div className={css(styles.backgroundStyles)}>
      <SpacingInset size={'m'} >
        {props.children}
      </SpacingInset>
    </div>
  )
}

const styles = StyleSheet.create({
  backgroundStyles: {
    backgroundColor: baseColors.ultraLightGrey
  }
})

export default NavigationBackground

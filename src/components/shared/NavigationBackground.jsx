import React from 'react'
import {StyleSheet, css} from 'aphrodite'

import SpacingInset from '../helpers/spacing/SpacingInset.jsx'
import {baseColors} from '../../styles/base/colors.js'

function NavigationBackground(props) {
  return (
    <div
      className={
        css(
          styles.backgroundStyles,
          (props.shadowVariant === 'up') && styles.upShadow,
          (props.shadowVariant === 'down') && styles.downShadow
        )
      }
    >
      <SpacingInset size={'m'} >
        {props.children}
      </SpacingInset>
    </div>
  )
}

const styles = StyleSheet.create({
  backgroundStyles: {
    backgroundColor: baseColors.ultraLightGrey
  },
  downShadow: {
    boxShadow: '0px 2px 4px 1px rgba(0,0,0,0.24)'
  },
  upShadow: {
    boxShadow: '0px -2px 4px 1px rgba(0,0,0,0.24)'
  }
})

export default NavigationBackground

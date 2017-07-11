import React from 'react'
import {StyleSheet, css} from 'aphrodite'

import {baseColors} from '../styles/base/colors.js'
import SpacingInset from './helpers/spacing/SpacingInset.jsx'

/**
 * Renders a simple callout with the text it gets passed in as child
 * There are four possible variants:
 *   1. Warning (Yellow)
 *   2. Error (Red)
 *   3. Success (Green)
 *   4. Neutral (Grey)
 *
 * If no variant is passed in, the neutral variant will be rendered
 */
function Callout(props) {
  return (
    <div className={setStylesForVariant(props.variant)}>
      <SpacingInset size={'m'}>
        {props.children}
      </SpacingInset>
    </div>
  )
}

// Simple switch case to determine which styles to use
function setStylesForVariant(variant) {
  switch (variant) {
    case 'warning':
      return (
        css(
          styles.baseStyles,
          styles.warningStyles
        )
      )
    case 'error':
      return (
        css(
          styles.baseStyles,
          styles.errorStyles
        )
      )
    case 'success':
      return (
        css(
          styles.baseStyles,
          styles.successStyles
        )
      )
    default:
      return (
        css(
          styles.baseStyles,
          styles.neutralStyles
        )
      )
  }
}

const styles = StyleSheet.create({
  baseStyles: {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '4px'
  },
  warningStyles: {
    backgroundColor: baseColors.warning,
    borderColor: baseColors.warningDarkened
  },
  errorStyles: {
    backgroundColor: baseColors.error,
    borderColor: baseColors.errorDarkened,
    color: baseColors.white
  },
  neutralStyles: {
    backgroundColor: baseColors.midGrey,
    borderColor: baseColors.black
  },
  successStyles: {
    backgroundColor: baseColors.success,
    borderColor: baseColors.sucessDarkened
  }
})

export default Callout

import React from 'react'
import {StyleSheet, css} from 'aphrodite'

import { buttonReset, buttonBaseStyles, buttonInactiveStyles } from '../styles/shared/buttons.js'
import { baseColors, appColors } from '../styles/base/colors.js'
import SpacingSquishedInset from './helpers/spacing/SpacingSquishedInset.jsx'

function setStyles(variant, inactive) {
  if (variant == 'outline') {
    return(
      css(
        styles.buttonReset,
        styles.buttonBaseStyles,
        styles.buttonOutlineStyles,
        inactive && styles.buttonOutlineInactiveStyles
      )
    )

  } else {
    return(
      css(
        styles.buttonReset,
        styles.buttonBaseStyles,
        styles.buttonSolidStyles,
        inactive && styles.buttonSolidInactiveStyles
      )
    )
  }
}

function SecondaryButton(props) {
  return(
    <button
      className={setStyles(props.variant, props.inactive)}
      onClick={props.inactive ? '' : props.onClick}
    >
      <SpacingSquishedInset size='l'>
        {props.children}
      </SpacingSquishedInset>
    </button>
  )
}

const styles = StyleSheet.create({
  buttonReset: {
    ...buttonReset
  },
  buttonBaseStyles: {
    ...buttonBaseStyles
  },
  buttonSolidStyles: {
    color: baseColors.white,
    backgroundColor: appColors.secondary,
    borderColor: appColors.secondaryDarkened,
    ':hover': {
      backgroundColor: appColors.secondaryDarkened
    }
  },
  buttonSolidInactiveStyles: {
    ...buttonInactiveStyles,
    ':hover': {
      backgroundColor: appColors.secondary
    }
  },
  buttonOutlineStyles: {
    color: appColors.secondary,
    borderColor: appColors.secondary,
    ':hover': {
      color: baseColors.white,
      backgroundColor: appColors.secondary
    }
  },
  buttonOutlineInactiveStyles: {
    ...buttonInactiveStyles,
    ':hover': {
      color: appColors.secondary,
      backgroundColor: 'none'
    }
  }
})

export default SecondaryButton

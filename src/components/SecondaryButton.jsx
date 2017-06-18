import React from 'react'
import {StyleSheet, css} from 'aphrodite'

import { buttonReset } from '../styles/shared/buttonReset.js'
import { fontSizes, fontWeights } from '../styles/base/fonts.js'
import { baseColors, appColors } from '../styles/base/colors.js'
import SpacingSquishedInset from './helpers/spacing/SpacingSquishedInset.jsx'

function setVariantStyles(variant) {
  if (variant == 'outline') {
    return styles.buttonOutlineStyles
  }

  return styles.buttonSolidStyles
}

function SecondaryButton(props) {
  return(
    <button
      className={css(
        styles.buttonReset,
        styles.buttonBaseStyles,
        setVariantStyles(props.variant),
        props.inactive && styles.buttonInactiveStyles
      )}
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
    fontSize: fontSizes.m,
    fontWeight: fontWeights.semiBold,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '4px',
    lineHeight: 1,
    cursor: 'pointer'
  },
  buttonSolidStyles: {
    color: baseColors.white,
    backgroundColor: appColors.secondary,
    borderColor: appColors.secondaryDarkened,
    ':hover': {
      backgroundColor: appColors.secondaryDarkened
    },
    ':focus': {
      outline: 'none'
    }
  },
  buttonOutlineStyles: {
    color: baseColors.secondary,
    borderColor: appColors.secondary,
    ':hover': {
      backgroundColor: appColors.secondary,
      color: baseColors.white
    },
    ':focus': {
      outline: 'none'
    }
  },
  buttonInactiveStyles: {
    opacity: '0.6',
    cursor: 'not-allowed',
    ':hover': {
      backgroundColor: appColors.secondary
    }
  }
})

export default SecondaryButton

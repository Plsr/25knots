import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import { fontFamily, fontSizes, fontWeights } from '../styles/base/fonts.js'
import { baseColors, appColors } from '../styles/base/colors.js'
import SpacingSquishedInset from './helpers/spacing/SpacingSquishedInset.jsx'

/**
 * This Button is used to navigate the user through the app,
 * usually to go one step ahed or back.
 *
 * NOTE: This Button is only used in the App's Bottom Bar.
 * If you need a Button inside the view, please use the PrimaryButton.
 *
 * FIXME: After building the PrimaryButton, confirm the name.
 */
class NavigationButton extends React.Component {
  render() {
    return (
      <button
        className={css(
          styles.buttonReset,
          styles.buttonStyles
        )}
        onClick={this.props.onClick}
      >
        <SpacingSquishedInset size='l'>
          {this.props.children}
        </SpacingSquishedInset>
      </button>
    )
  }
}

const styles = StyleSheet.create({
  buttonReset: {
    border: 0,
    padding: 0,
    background: 'none',
    fontFamily: fontFamily.mainFamily
  },
  buttonStyles: {
    fontSize: fontSizes.m,
    fontWeight: fontWeights.semiBold,
    color: baseColors.white,
    backgroundColor: appColors.primary,
    borderColor: appColors.primaryDarkened,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '4px',
    lineHeight: 1,
    cursor: 'pointer',
    ':hover': {
      backgroundColor: appColors.primaryDarkened
    }
  }
})

export default NavigationButton

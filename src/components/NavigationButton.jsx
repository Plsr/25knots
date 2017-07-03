import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import { Link } from 'react-router-dom'

import { baseColors, appColors } from '../styles/base/colors.js'
import { buttonReset, buttonBaseStyles, buttonInactiveStyles } from '../styles/shared/buttons.js'
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
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e){
    if (this.props.inactive) {
      e.preventDefault()
    }
  }

  render() {
    return (
      <Link
        to={this.props.to}
        onClick={this.handleClick}
      >
        <button
          className={css(
            styles.buttonReset,
            styles.buttonStyles,
            this.props.inactive && styles.buttonInactiveStyles )}
        >
          <SpacingSquishedInset size='l'>
            {this.props.children}
          </SpacingSquishedInset>
        </button>
      </Link>
    )
  }
}

const styles = StyleSheet.create({
  buttonReset: {
    ...buttonReset
  },
  buttonStyles: {
    ...buttonBaseStyles,
    color: baseColors.white,
    backgroundColor: appColors.primary,
    borderColor: appColors.primaryDarkened,
    ':hover': {
      backgroundColor: appColors.primaryDarkened
    }
  },
  buttonInactiveStyles: {
    ...buttonInactiveStyles,
    ':hover': {
      backgroundColor: appColors.primary
    }
  }
})

export default NavigationButton

import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import {ICONS} from './helpers/constants/icons.js'
import {baseColors, appColors} from '../styles/base/colors.js'
import {fontSizes} from '../styles/base/fonts.js'
import SpacingInset from './helpers/spacing/SpacingInset.jsx'
import SpacingStack from './helpers/spacing/SpacingStack.jsx'
import Icon from './Icon.jsx'

class IconButton extends React.Component {
  constructor(props) {
    super(props)
    this.toggleHoverState = this.toggleHoverState.bind(this)
    this.state ={
      hover: false
    }
  }

  toggleHoverState() {
    this.setState({
      hover: !this.state.hover
    })
  }

  computeIconColor() {
    return this.state.hover ? appColors.secondary : baseColors.lighterMidGrey
  }

  render() {
    return(
      <button
        onMouseOver={this.toggleHoverState}
        onMouseOut={this.toggleHoverState}
        onClick={this.props.onClick}
        className={css(
          styles.baseStyles,
          this.state.hover && styles.hoverStyles
        )}
      >
        <SpacingInset size='l'>
          <Icon icon={this.props.icon} color={this.computeIconColor()} size='40' />
          <SpacingStack size='l' />
          {this.props.children}
        </SpacingInset>
      </button>
    )
  }
}

const styles = StyleSheet.create({
  baseStyles: {
    backgroundColor: baseColors.white,
    borderRadius: '4px',
    borderStyle: 'solid',
    borderWidth: '2px',
    borderColor: baseColors.lighterMidGrey,
    color: baseColors.lighterMidGrey,
    fontSize: fontSizes.m,
    cursor: 'pointer'
  },
  hoverStyles: {
    borderColor: appColors.secondary,
    color: appColors.secondary
  }
})

export default IconButton

import React from 'react'
import {StyleSheet, css} from 'aphrodite'

import Icon from './Icon.jsx'
import SpacingStack from './helpers/spacing/SpacingStack.jsx'
import SpacingStrechedInset from './helpers/spacing/SpacingStrechedInset.jsx'
import {appColors, baseColors} from '../styles/base/colors.js'

class TabTitle extends React.Component {
  constructor(props) {
    super(props)
    this.toggleHoverState = this.toggleHoverState.bind(this)
    this.state = {
      hover: false
    }
  }

  toggleHoverState() {
    this.setState({
      hover: !this.state.hover
    })
  }

  computeIconColor() {
    return this.state.hover || this.props.active ? baseColors.white : baseColors.black
  }

  render() {
    return (
      <div
        onMouseOver={this.toggleHoverState}
        onMouseOut={this.toggleHoverState}
        onClick={() => this.props.onClick(this.props.id)}
        className={css(
          styles.TabStyles,
          this.props.active && styles.activeStyles,
          this.state.hover && styles.activeStyles
        )}
      >
        <SpacingStrechedInset size={'m'} >
          <Icon icon={this.props.icon} color={this.computeIconColor()} />
          <SpacingStack size='s' />
          {this.props.title}
        </SpacingStrechedInset>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  TabStyles: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '14px',
    cursor: 'pointer',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: baseColors.darkGrey
  },
  BlockStyles: {
    display: 'block'
  },
  activeStyles: {
    backgroundColor: appColors.secondary,
    color: baseColors.white
  }
})

export default TabTitle

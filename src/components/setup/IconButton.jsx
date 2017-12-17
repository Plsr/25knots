import React from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'

import {baseColors, appColors} from '../../styles/base/colors.js'
import {fontSizes} from '../../styles/base/fonts.js'
import SpacingInset from '../helpers/spacing/SpacingInset.jsx'
import SpacingStack from '../helpers/spacing/SpacingStack.jsx'
import Icon from '../shared/Icon.jsx'

const Button = glamorous.button({
  width: '100%',
  backgroundColor: baseColors.white,
  borderRadius: '4px',
  border: `2px solid ${baseColors.lighterMidGrey}`,
  color: baseColors.lighterMidGrey,
  fontSize: fontSizes.m,
  ':hover': {
    borderColor: appColors.secondary,
    color: appColors.secondary
  },
  ':focus': {
    outline: 0
  }
}, props => {
  if (props.isActive) {
    return {
      borderColor: appColors.secondary,
      color: appColors.secondary
    }
  }
})

const IconButton = ({ onClick, isActive, children, value, icon }) => (
  <Button
    onClick={() => onClick(value)}
    isActive={isActive}
  >
    <SpacingInset size='l'>
      <Icon icon={icon} size={40} />
      <SpacingStack size='l' />
      {children}
    </SpacingInset>
  </Button>
)

IconButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
  children: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

IconButton.defaultProps = {
  isActive: false
}

export default IconButton

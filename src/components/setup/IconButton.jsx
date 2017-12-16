import React from 'react'
import glamorous from 'glamorous'

import {baseColors, appColors} from '../../styles/base/colors.js'
import {fontSizes} from '../../styles/base/fonts.js'
import SpacingInset from '../helpers/spacing/SpacingInset.jsx'
import SpacingStack from '../helpers/spacing/SpacingStack.jsx'
import Icon from '../shared/Icon.jsx'

const Button = glamorous.button({
  backgroundColor: baseColors.white,
  borderRadius: '4px',
  border: `2px solid ${baseColors.lighterMidGrey}`,
  color: baseColors.lighterMidGrey,
  fontSize: fontSizes.m,
  ':hover': {
    borderColor: appColors.secondary,
    color: appColors.secondary
  }
}, props => {
  if (props.isActive) {
    return {
      borderColor: appColors.secondary,
      color: appColors.secondary
    }
  }
})

const IconButton = ({ onClick, isActive, children, identifier, icon }) => (
  <Button
    onClick={() => onClick(identifier)}
    isActive={isActive}
  >
    <SpacingInset size='l'>
      <Icon icon={icon} size='40' />
      <SpacingStack size='l' />
      {children}
    </SpacingInset>
  </Button>
)

export default IconButton

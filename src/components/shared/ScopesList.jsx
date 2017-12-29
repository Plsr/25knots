import React from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'

import { appColors } from '../../styles/base/colors.js'
import { spacing } from '../../styles/base/spacing.js'
import SpacingInline from '../helpers/spacing/SpacingInline.jsx'

import Icon from './Icon.jsx'

const List = glamorous.ul({
  padding: 0,
  margin: 0,
  color: appColors.secondary,
  listStyleType: 'none'
})

const ListItem = glamorous.li({
  display: 'flex',
  alignItems: 'center',
  marginBottom: spacing.l,
  ':before' : {
    content: '➜'
  }
}, props => {
  if (props.asInline) {
    return [
      {
        display: 'inline-flex',
        paddingRight: spacing.xl
      }
    ]
  }
})

const ScopesList = ({ items, asInline }) => (
  <List>
    { items.map(item => (
      <ListItem  asInline={asInline}>
        <SpacingInline size={'m'} />
        <Icon icon={item.icon} size={42} />
        <SpacingInline size={'m'} />
        {item.name}
      </ListItem>
    ))}
  </List>
)

ScopesList.propTypes = {
  items: PropTypes.array.isRequired,
  asInline: PropTypes.bool
}

ScopesList.defaultProps = {
  asInline: false
}

export default ScopesList

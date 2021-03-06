import React from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'

import IconButton from './IconButton.jsx'

const Wrapper = glamorous.div({
  display: 'flex',
  justifyContent: 'space-between'
})

const Item = glamorous.div({
  width: '30%'
})

const IconButtonList = ({ items, onItemClick, activeItem }) => (
  <Wrapper>
    {items.map(item => (
      <Item key={item.value}>
        <IconButton
          onClick={onItemClick}
          icon={item.icon}
          isActive={item.value === activeItem}
          value={item.value}
        >
          {item.name}
        </IconButton>
      </Item>
    ))}
  </Wrapper>
)

IconButtonList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onItemClick: PropTypes.func.isRequired,
  activeItem: PropTypes.string
}

export default IconButtonList

import React from 'react'
import {StyleSheet, css} from 'aphrodite'

import Icon from './Icon.jsx'
import SpacingStack from './helpers/spacing/SpacingStack.jsx'
import {appColors} from '../styles/base/colors.js'

function TabTitle(props) {
  return(
    <div
      onClick={() => props.onClick(props.id)}
      className={css(styles.TabStyles)}
    >
      <Icon icon={props.icon} />
      <SpacingStack size='s' />
      {props.children}
    </div>
  )
}

const styles = StyleSheet.create({
  TabStyles: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    cursor: 'pointer',
    borderBottom: '1px solid #333',
    ':hover': {
      backgroundColor: appColors.secondary
    }
  },
  BlockStyles: {
    display: 'block'
  }
})

export default TabTitle

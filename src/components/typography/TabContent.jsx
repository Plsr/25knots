import React from 'react'
import {StyleSheet, css} from 'aphrodite'

import {baseColors} from '../../styles/base/colors.js'
import SpacingInset from '../helpers/spacing/SpacingInset.jsx'

function TabContent(props) {
  return (
    <div className={css(styles.contentStyles)}>
      <SpacingInset size={'m'}>
        {props.children}
      </SpacingInset>
    </div>
  )
}

const styles = StyleSheet.create({
  contentStyles: {
    width: '250px',
    color: baseColors.white,
    backgroundColor: baseColors.almostBlack
  }
})

export default TabContent

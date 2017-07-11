import React from 'react'
import {StyleSheet, css} from 'aphrodite'

import SpacingInset from './helpers/spacing/SpacingInset.jsx'

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
    width: '300px'
  }
})

export default TabContent

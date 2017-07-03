import React from 'react'
import {StyleSheet, css} from 'aphrodite'

import {baseColors} from '../styles/base/colors.js'

function BorderedBox(props) {
  return(
    <div className={css(styles.boxStyles)} >
      {props.children}
    </div>
  )
}

const styles = StyleSheet.create({
  boxStyles: {
    borderRadius: '4px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: baseColors.lighterMidGrey,
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: 1.5
  }
})

export default BorderedBox

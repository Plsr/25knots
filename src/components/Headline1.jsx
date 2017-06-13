import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import { fontSizes } from '../styles/base/fonts.js'

function Headline1(props) {
  return(
    <h1 className={css(styles.Healine1Styles)}>{ props.content }</h1>
  )
}

const styles = StyleSheet.create({
  Healine1Styles: {
    fontSize: fontSizes.xl,
    margin: 0
  }
})

export default Headline1

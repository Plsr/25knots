import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import { fontSizes } from '../styles/base/fonts.js'
import { appColors } from '../styles/base/colors.js'
import SpacingStack from './helpers/spacing/SpacingStack.jsx'

function Headline1(props) {
  return (
    <SpacingStack size='l'>
      <h1 className={css(styles.Healine1Styles)}>{ props.content }</h1>
    </SpacingStack>
  )
}

const styles = StyleSheet.create({
  Healine1Styles: {
    display: 'inline-block',
    fontSize: fontSizes.xl,
    fontWeight: 400,
    margin: 0,
    borderBottomWidth: '2px',
    borderBottomStyle: 'solid',
    borderBottomColor: appColors.secondary
  }
})

export default Headline1

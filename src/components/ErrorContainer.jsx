import React from 'react'
import {StyleSheet, css} from 'aphrodite'

import {baseColors} from '../styles/base/colors.js'
import SpacingInset from './helpers/spacing/SpacingInset.jsx'

function ErrorContainer(props) {
  return (
    <div className={css(styles.containerStyles)}>
      <SpacingInset size={'m'}>
        {props.children}
      </SpacingInset>
    </div>
  )
}

const styles = StyleSheet.create({
  containerStyles: {
    backgroundColor: baseColors.warning,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: baseColors.warningDarkened
  }
})

export default ErrorContainer

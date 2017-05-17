import React from 'react'
import { StyleSheet, css } from 'aphrodite'

/* CSS Style imports */
import { appColors, baseColors } from '../src/styles/base/colors'
import { spacing } from '../src/styles/base/spacing'
import { borderRadius, borderWidth } from '../src/styles/base/borders'
import { fontFamily } from '../src/styles/base/fonts'

const AppControlButton = ({ children, onClick }) => (
  <a
    onClick={onClick}
    className={css(styles.appControlButton)}
  >
    {children}
  </a>
)

const styles = StyleSheet.create({
  appControlButton: {
    backgroundColor: appColors.main,
    padding: spacing.space1 + ' ' + spacing.space3,
    color: baseColors.white,
    borderRadius: borderRadius.regular,
    borderWidth: borderWidth.thinBorder,
    borderColor: appColors.mainDarkened,
    borderStyle: 'solid',
    fontFamily: fontFamily.mainFamily,
    ':hover': {
      cursor: 'pointer',
      backgroundColor: appColors.mainDarkened
    }
  }
})

export default AppControlButton

import React from 'react'
import { StyleSheet, css } from 'aphrodite'

/* CSS Style imports */
import { appColors, baseColors } from '../src/styles/base/colors'
import { spacing } from '../src/styles/base/spacing'
import { borderRadius, borderWidth } from '../src/styles/base/borders'
import { fontFamily } from '../src/styles/base/fonts'

const AppControlButtonDisabled = ({ children, onClick }) => (
  <a
    onClick={onClick}
    className={css(styles.appControlButtonDisabled)}
  >
    {children}
  </a>
)

const styles = StyleSheet.create({
  appControlButtonDisabled: {
    backgroundColor: baseColors.lightGrey,
    padding: spacing.space1 + ' ' + spacing.space3,
    color: baseColors.darkGrey,
    borderRadius: borderRadius.regular,
    borderWidth: borderWidth.thinBorder,
    borderColor: baseColors.darkGrey,
    borderStyle: 'solid',
    fontFamily: fontFamily.mainFamily,
    ':hover': {
      cursor: 'not-allowed'
    }
  }
})

export default AppControlButtonDisabled

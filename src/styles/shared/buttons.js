import { fontFamily, fontSizes, fontWeights } from '../base/fonts.js'

export const buttonReset = {
  border: 0,
  padding: 0,
  background: 'none',
  fontFamily: fontFamily.mainFamily
}

export const buttonBaseStyles = {
  fontSize: fontSizes.m,
  fontWeight: fontWeights.semiBold,
  borderWidth: '1px',
  borderStyle: 'solid',
  borderRadius: '4px',
  lineHeight: 1,
  cursor: 'pointer',
  ':focus': {
    outline: 'none'
  }
}

export const buttonInactiveStyles = {
  opacity: '0.6',
  cursor: 'not-allowed'
}

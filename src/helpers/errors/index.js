import calculateHeadlineErrors from './headline.js'
import calculateGeneralErrors from './general.js'
import calcualateContrast from './contrast.js'

import {HEADLINE_1_MULTIPLIERS, HEADLINE_2_MULTIPLIERS, HEADLINE_3_MULTIPLIERS} from '../constants/headlineConstraints.js'
import {getClosestValueFromScale, getPreviousSize} from '../functions/typographicScale.js'

function calculateApplicationErrors(typographyValues, bodyWidthConstraints) {
  // General
  let bodyFontSize = typographyValues.general.fontSize
  let lineHeight = (bodyFontSize * typographyValues.general.lineHeight) / 100

  // Headline 1 Constraints
  let bodyFontConstant = 0
  if (bodyFontSize > 14) {
    bodyFontConstant = (bodyFontSize - 14) / 10
  }
  let headline1SizeContraint = bodyFontSize * (1.68 + bodyFontConstant)

  // Headline 2 Constraints
  let h1ScalePos = getClosestValueFromScale(headline1SizeContraint)
  let headline2SizeContraint = getPreviousSize(h1ScalePos)

  // Headline 3 Constraints
  let h2Size = typographyValues.headline2.size
  let h2ScalePos = getClosestValueFromScale(h2Size)
  let headline3SizeContraint = getPreviousSize(h2ScalePos)

  let errors = {
    headline1: calculateHeadlineErrors(typographyValues.headline1, lineHeight, headline1SizeContraint, HEADLINE_1_MULTIPLIERS),
    headline2: calculateHeadlineErrors(typographyValues.headline2, lineHeight, headline2SizeContraint, HEADLINE_2_MULTIPLIERS),
    headline3: calculateHeadlineErrors(typographyValues.headline3, lineHeight, headline3SizeContraint, HEADLINE_3_MULTIPLIERS),
    general: calculateGeneralErrors(typographyValues, bodyFontSize, bodyWidthConstraints),
    colors: calcualateContrast(typographyValues.colors.foreground, typographyValues.colors.background)
  }

  return errors
}

export default calculateApplicationErrors

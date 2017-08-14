function calculateGeneralErrors(typographyValues, fontSize, bodyWidthConstraints) {
  let errors = {
    present: false,
    size: [],
    lineHeight: [],
    width: [],
    spacing: [],
    headlines: []
  }

  let bodyWidth = typographyValues.general.textWidth
  let lineHeight = typographyValues.general.lineHeight
  let headlineSizes = [
    typographyValues.headline1.size,
    typographyValues.headline2.size,
    typographyValues.headline3.size
  ]

  if (fontSize < 9) {
    errors.present = true
    errors.size.push('Die Textgröße ist sehr klein und könnte schwer lesbar sein')
  }
  if (fontSize > 24) {
    errors.present = true
    errors.size.push('Die Textgröße ist sehr groß und könnte schwer lesbar sein')
  }
  if (lineHeight < 120.0) {
    errors.present = true
    errors.lineHeight.push('Die Zeilenhöhe ist sehr niedrig und könnte den Text schwer lesbar machen')
  }
  if (lineHeight > 180.0) {
    errors.present = true
    errors.lineHeight.push('Die Zeilenhöhe ist sehr hoch und könnte den Text schwer lesbar machen')
  }
  if (bodyWidth < bodyWidthConstraints.min) {
    errors.present = true
    errors.width.push('Der Text ist sehr schmal und könnte dadurch schwerer lesbar sein')
  }
  if (bodyWidth > bodyWidthConstraints.max) {
    errors.present = true
    errors.width.push('Der Text ist sehr breit und könnte dadurch schwerer lesbar sein')
  }
  if (headlineSizes[1] > headlineSizes[0]) {
    errors.present = true
    errors.headlines.push('Headline 2 should not be bigger than headline 1')
  }
  if (headlineSizes[2] > headlineSizes[1]) {
    errors.present = true
    errors.headlines.push('Headline 3 should not be bigger than headline 2')
  }
  if (headlineSizes[2] > headlineSizes[0]) {
    errors.present = true
    errors.headlines.push('Headline 3 should not be bigger than headline 1')
  }
  return errors
}


export default calculateGeneralErrors

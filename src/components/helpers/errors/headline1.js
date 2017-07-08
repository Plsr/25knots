function calculateHeadline1Errors(headlineValues, bodyTextValues) {
  let errors = {
    size: [],
    spacingTop: [],
    spacingBottom: []
  }
  let bodyFontSize = bodyTextValues.fontSize
  let bodyFontConstant = 0
  let bodyLineHeight = (bodyTextValues.lineHeight * bodyTextValues.fontSize) / 100
  let h1Size = headlineValues.size
  let marginTop = headlineValues.spacingTop
  let marginBottom = headlineValues.spacingBottom

  if (bodyFontSize > 14) {
    bodyFontConstant = (bodyFontSize - 14) / 10
  }

  let sizeConstraint = bodyFontSize * (1.68 + bodyFontConstant)

  if (h1Size < sizeConstraint * 0.8) {
    errors.size.push('Headline 1 ist im Verhältnis zum Text sehr klein')
  }
  if (h1Size > sizeConstraint * 1.2) {
    errors.size.push('Headline 1 ist im Verhältnis zum Text sehr groß')
  }
  if (marginBottom > (bodyLineHeight * 1.7)) {
    errors.spacingBottom.push('Headline 1 hat einen sehr großen Abstand nach unten')
  }
  if (marginBottom < bodyLineHeight) {
    errors.spacingBottom.push('Headline 1 hat einen sehr kleinen Abstand nach unten')
  }
  if (marginTop > (bodyLineHeight * 2.7)) {
    errors.spacingTop.push('Headline 1 hat einen sehr großen Abstand nach oben')
  }
  if (marginTop < (bodyLineHeight * 2)) {
    errors.spacingTop.push('Headline 1 hat einen sehr kleinen Abstand nach oben')
  }

  return errors
}

export default calculateHeadline1Errors

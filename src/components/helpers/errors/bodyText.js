function calculateGeneralErrors(bodyTextValues, fontSize, bodyWidthConstraints) {
  let errors = {
    size: [],
    lineHeight: [],
    width: [],
    spacing: []
  }

  let bodyWidth = bodyTextValues.textWidth
  let lineHeight = bodyTextValues.lineHeight

  if (fontSize < 9) {
    errors.size.push('Die Textgröße ist sehr klein und könnte schwer lesbar sein')
  }
  if (fontSize > 24) {
    errors.size.push('Die Textgröße ist sehr groß und könnte schwer lesbar sein')
  }
  if (lineHeight < 120.0) {
    errors.lineHeight.push('Die Zeilenhöhe ist sehr niedrig und könnte den Text schwer lesbar machen')
  }
  if (lineHeight > 180.0) {
    errors.lineHeight.push('Die Zeilenhöhe ist sehr hoch und könnte den Text schwer lesbar machen')
  }
  if (bodyWidth < bodyWidthConstraints.min) {
    errors.width.push('Der Text ist sehr schmal und könnte dadurch schwerer lesbar sein')
  }
  if (bodyWidth > bodyWidthConstraints.max) {
    errors.width.push('Der Text ist sehr breit und könnte dadurch schwerer lesbar sein')
  }
  return errors
}

export default calculateGeneralErrors

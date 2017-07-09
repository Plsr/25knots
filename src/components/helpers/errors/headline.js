function calculateHeadlineErrors(headlineValues, lineHeight, sizeConstraint, constraints) {
  let errors = {
    size: [],
    spacingTop: [],
    spacingBottom: []
  }

  let h1Size = headlineValues.size
  let marginTop = headlineValues.spacingTop
  let marginBottom = headlineValues.spacingBottom
  let name = constraints.NAME

  if (h1Size < sizeConstraint * constraints.SIZE_MIN) {
    errors.size.push(name + ' ist im Verhältnis zum Text sehr klein')
  }
  if (h1Size > sizeConstraint * constraints.SIZE_MAX) {
    errors.size.push(name + ' ist im Verhältnis zum Text sehr groß')
  }
  if (marginBottom > (lineHeight * constraints.SPACING_BOTTOM_MAX)) {
    errors.spacingBottom.push(name + ' hat einen sehr großen Abstand nach unten')
  }
  if (marginBottom < (lineHeight * constraints.SPACING_BOTTOM_MIN)) {
    errors.spacingBottom.push(name + ' hat einen sehr kleinen Abstand nach unten')
  }
  if (marginTop > (lineHeight * constraints.SPACING_TOP_MAX)) {
    errors.spacingTop.push(name + ' hat einen sehr großen Abstand nach oben')
  }
  if (marginTop < (lineHeight * constraints.SPACING_TOP_MIN)) {
    errors.spacingTop.push(name + ' hat einen sehr kleinen Abstand nach oben')
  }

  return errors
}

export default calculateHeadlineErrors

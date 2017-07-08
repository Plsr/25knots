import calculateHeadline1Errors from './headline1.js'

function calculateGeneralErrors(typographyValues) {
  let errors = {
    headline1: calculateHeadline1Errors(typographyValues.headline1, typographyValues.general)
  }

  return errors
}

export default calculateGeneralErrors

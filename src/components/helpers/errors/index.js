import calculateHeadline1Errors from './headline1.js'

function calculateApplicationErrors(typographyValues) {
  let errors = {
    headline1: calculateHeadline1Errors(typographyValues.headline1, typographyValues.general)
  }

  return errors
}

export default calculateApplicationErrors

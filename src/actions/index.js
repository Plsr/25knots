// Action types
export const SET_SCOPES = 'SET_SCOPES'
export const RESET_SCOPES = 'RESET_SCOPES'
export const SET_VALUE_FOR_KEY = 'SET_VALUE_FOR_KEY'
export const SET_GENERAL_VALUE_FOR_KEY = 'SET_GENERAL_VALUE_FOR_KEY'
export const SET_VALUE_IN_AREA = 'SET_VALUE_IN_AREA'
export const SET_ERRORS = 'SET_ERRORS'
export const NEXT_COLOR_WIZARD_STEP = 'NEXT_COLOR_WIZARD_STEP'
export const PREVIOUS_COLOR_WIZARD_STEP = 'PREVIOUS_COLOR_WIZARD_STEP'
export const FIRST_COLOR_WIZARD_STEP = 'FIRST_COLOR_WIZARD_STEP'
export const FINISH_COLOR_WIZARD = 'FINISH_COLOR_WIZARD'
export const SET_BASE_COLORS = 'SET_BASE_COLORS'
export const SET_COLOR_CONTRAST = 'SET_COLOR_CONTRAST'
export const RESET_TYPOGRAPHY_DATA = 'RESET_TYPOGRAPHY_DATA'

export const setScopes = scopes => ({
  type: SET_SCOPES,
  scopes
})

export const resetScopes = () => ({ type: RESET_SCOPES })

export const setValueForKey = (key, value) => {
  return {
    type: SET_VALUE_FOR_KEY,
    key,
    value
  }
}

export const setGeneralValueForKey = (key, value) => {
  return {
    type: SET_GENERAL_VALUE_FOR_KEY,
    key,
    value
  }
}

export const setValueInArea = (area, key, value) => {
  return {
    type: SET_VALUE_IN_AREA,
    area,
    key,
    value
  }
}

export const setErrors = (errorsPresent) => {
  return {
    type: SET_ERRORS,
    errorsPresent
  }
}

export const nextColorWizardStep = () => {
  return {
    type: NEXT_COLOR_WIZARD_STEP
  }
}

export const previousColorWizardStep = () => {
  return {
    type: PREVIOUS_COLOR_WIZARD_STEP
  }
}

export const firstColorWizardStep = () => {
  return {
    type: FIRST_COLOR_WIZARD_STEP
  }
}


export const finishColorWizard = () => {
  return {
    type: FINISH_COLOR_WIZARD
  }
}

export const setColorContrast = (contrastType, colors) => {
  return {
    type: SET_COLOR_CONTRAST,
    contrastType,
    colors
  }
}

export const setBaseColors = (colors) => {
  return {
    type: SET_BASE_COLORS,
    colors
  }
}

export const resetTypographyData = () => {
  return {
    type: RESET_TYPOGRAPHY_DATA
  }
}

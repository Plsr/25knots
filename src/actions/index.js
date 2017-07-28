// Action types
export const NEXT_SETUP_STEP = 'NEXT_SETUP_STEP'
export const SET_SCOPE = 'SET_SCOPE'
export const SET_SETUP_TO_FINISHED = 'SET_SETUP_TO_FINISHED'
export const PREVIOUS_SETUP_STEP = 'PREVIOUS_SETUP_STEP'
export const RESET_SETUP = 'RESET_SETUP'
export const SET_VALUE_FOR_KEY = 'SET_VALUE_FOR_KEY'
export const SET_GENERAL_VALUE_FOR_KEY = 'SET_GENERAL_VALUE_FOR_KEY'
export const SET_VALUE_IN_AREA = 'SET_VALUE_IN_AREA'
export const SET_ERRORS = 'SET_ERRORS'
export const FINISH_COLOR_WIZARD = 'FINISH_COLOR_WIZARD'
export const SET_COLOR_CONTRAST = 'SET_COLOR_CONTRAST'

export const nextSetupStep = () => {
  return {
    type: NEXT_SETUP_STEP
  }
}

export const setScope = scope => {
  return {
    type: SET_SCOPE,
    scope
  }
}

export const setSetupToFinished = () => {
  return {
    type: SET_SETUP_TO_FINISHED
  }
}

export const previousSetupStep = () => {
  return {
    type: PREVIOUS_SETUP_STEP
  }
}

export const resetSetup = () => {
  return {
    type: RESET_SETUP
  }
}

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

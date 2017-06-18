// Action types
export const NEXT_SETUP_STEP = 'NEXT_SETUP_STEP'
export const SET_SCOPE = 'SET_SCOPE'
export const SET_SETUP_TO_FINISHED = 'SET_SETUP_TO_FINISHED'
export const PREVIOUS_SETUP_STEP = 'PREVIOUS_SETUP_STEP'
export const RESET_SETUP = 'RESET_SETUP'

export const nextSetupStep = () => {
  return {
    type: NEXT_SETUP_STEP
  }
}

export const setScope = scope => {
  return{
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

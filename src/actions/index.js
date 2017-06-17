// Action types
export const NEXT_SETUP_STEP = 'NEXT_SETUP_STEP'
export const SET_SCOPE = 'SET_SCOPE'
export const SET_SETUP_TO_FINISHED = 'SET_SETUP_TO_FINISHED'

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

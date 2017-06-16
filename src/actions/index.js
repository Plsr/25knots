// Action types
export const NEXT_SETUP_STEP = 'NEXT_SETUP_STEP'
export const SET_ARTIFACT_SCOPE = 'SET_ARTIFACT_SCOPE'

export const nextSetupStep = () => {
  return {
    type: NEXT_SETUP_STEP
  }
}

export const setArtifactScope = (scope) => {
  return {
    type: SET_ARTIFACT_SCOPE,
    scope
  }
}

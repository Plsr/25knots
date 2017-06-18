import React from 'react'

import SetupProgress from './SetupProgress.jsx'
import SetupSummary from './SetupSummary.jsx'

function Setup(props) {
  if(props.setupFinished) {
    return(
      <SetupSummary
        setupOptions={props.setupOptions}
        scopes={props.scopes}
        resetSetup={props.resetSetup}
      />
    )
  } else {
    return(
      <SetupProgress
        scopes={props.scopes}
        setupStep={props.setupStep}
        setupSteps={props.setupSteps}
        setupOptions={props.setupOptions}
        setScope={props.setScope}
        setSetupToFinished={props.setSetupToFinished}
        previousSetupStep={props.previousSetupStep}
      />
    )
  }
}

export default Setup

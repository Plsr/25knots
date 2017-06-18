import React from 'react'

import BorderedBox from './BorderedBox.jsx'
import SpacingInset from './helpers/spacing/SpacingInset.jsx'
import SecondaryButton from './SecondaryButton.jsx'

function extractScopeInformation(scopes, options) {
  let extractedScopes = []
  for (var i = 0; i < options.length; i++) {
    let currentOption = options[i]

    scopes.forEach(function(scope) {
      if(currentOption.value == scope)
        extractedScopes.push({
          text: currentOption.text,
          icon: currentOption.icon
        })
    })
  }

  console.log(extractedScopes);
  //return extractedScopes
}

function SetupSummary(props) {
  return (
    <BorderedBox>
      <SpacingInset size='l'>
        {extractScopeInformation(props.scopes, props.setupOptions)}
        <SecondaryButton variant={'outline'} onClick={props.resetSetup}>Start over</SecondaryButton>
      </SpacingInset>
    </BorderedBox>
  )
}

export default SetupSummary

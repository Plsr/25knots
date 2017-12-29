import React from 'react'

import SpacingStack from '../helpers/spacing/SpacingStack.jsx'
import SecondaryButton from '../shared/SecondaryButton.jsx'
import ScopesList from '../shared/ScopesList.jsx'

const SetupSummary = ({ scopes, onButtonClick }) => (
  <div>
    <span>Great! Here is a summary of what your are going to build:</span>
    <SpacingStack size={'xl'} />
    <ScopesList items={scopes} />
    <SpacingStack size={'xl'} />
    <span>If this is correct, you can use the red button on the bottom of the page to go to the next section.
Otherwise, you can choose to start the setup again from the beginning.</span>
    <SpacingStack size={'l'} />
    <SecondaryButton variant={'outline'} onClick={onButtonClick}>Start over</SecondaryButton>
  </div>
)

export default SetupSummary

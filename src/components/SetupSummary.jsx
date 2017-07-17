import React from 'react'
import {StyleSheet, css} from 'aphrodite'

import {appColors} from '../styles/base/colors.js'
import BorderedBox from './BorderedBox.jsx'
import SpacingInset from './helpers/spacing/SpacingInset.jsx'
import SpacingStack from './helpers/spacing/SpacingStack.jsx'
import SpacingInline from './helpers/spacing/SpacingInline.jsx'
import SecondaryButton from './shared/SecondaryButton.jsx'
import Icon from './Icon.jsx'

function extractScopeInformation(scopes, options) {
  let extractedScopes = []
  for (var i = 0; i < options.length; i++) {
    let currentOption = options[i]

    scopes.forEach(function(scope) {
      if (currentOption.value == scope)
        extractedScopes.push({
          text: currentOption.text,
          icon: currentOption.icon
        })
    })
  }

  return extractedScopes
}

function buildSummary(scopes, options) {
  let extractedScopes = extractScopeInformation(scopes, options)
  let summaryElemets = []

  for (var i = 0; i < extractedScopes.length; i++) {
    let currentScope = extractedScopes[i]
    summaryElemets.push(
      <SpacingStack size='l' key={i} >
        <div className={css(styles.SummaryItemStyles)}>
          <SpacingInline size={'l'} >
            ➜
          </SpacingInline>
          <SpacingInline size={'l'} >
            <Icon icon={currentScope.icon} color={appColors.secondary} size={42} />
          </SpacingInline>
          <span>{currentScope.text}</span>
        </div>
      </SpacingStack>
    )
  }

  return summaryElemets
}

function SetupSummary(props) {
  return (
    <BorderedBox>
      <SpacingInset size='l'>
        <span>Great! Here is a summary of what your are going to build:</span>
        <SpacingStack size={'xl'} />
        {buildSummary(props.scopes, props.setupOptions)}
        <SpacingStack size={'xl'} />
        <span>If this is correct, you can use the red button on the bottom of the page to go to the next section.
Otherwise, you can choose to start the setup again from the beginning.</span>
        <SpacingStack size={'l'} />
        <SecondaryButton variant={'outline'} onClick={props.resetSetup}>Start over</SecondaryButton>
      </SpacingInset>
    </BorderedBox>
  )
}

const styles = StyleSheet.create({
  SummaryItemStyles: {
    display: 'flex',
    alignItems: 'center',
    color: appColors.secondary
  }
})

export default SetupSummary

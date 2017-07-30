import React from 'react'

import { extractScopeInformation } from '../helpers/functions/scopes.js'
import {appColors} from '../../styles/base/colors.js'
import SpacingStack from '../helpers/spacing/SpacingStack.jsx'
import SpacingInline from '../helpers/spacing/SpacingInline.jsx'
import Icon from '../Icon.jsx'

class Summary extends React.Component {

  buildSummary(scopes) {
    let extractedScopes = extractScopeInformation(scopes)
    let summaryElemets = []

    for (var i = 0; i < extractedScopes.length; i++) {
      let currentScope = extractedScopes[i]
      summaryElemets.push(
        <SpacingStack size='l' key={i} >
          <div>
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
  render() {
    return (
      <div>
        I am summary
        {this.buildSummary(this.props.setup.scopes)}
      </div>
    )
  }
}

export default Summary

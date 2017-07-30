import React from 'react'

import { extractScopeInformation } from '../helpers/functions/scopes.js'
import {appColors} from '../../styles/base/colors.js'
import SpacingStack from '../helpers/spacing/SpacingStack.jsx'
import SpacingInline from '../helpers/spacing/SpacingInline.jsx'
import ColorDisplay from '../colors/ColorDisplay.jsx'
import Icon from '../Icon.jsx'
import SecondaryButton from '../shared/SecondaryButton.jsx'
import { generatePDF } from '../helpers/functions/pdfGenerator.js'

class Summary extends React.Component {

  buildScopeSummary(scopes) {
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

  constructAccentColors(accentColors) {
    let accentColorDisplays = []

    for (var i = 0; i < accentColors.length; i++) {
      accentColorDisplays.push(
        <ColorDisplay
          hexVal={accentColors[i]}
        />
      )
    }

    return accentColorDisplays
  }

  displayBaseColors(baseColors) {
    let baseColorDisplays = []

    for (var i = 0; i < baseColors.length; i++) {
      baseColorDisplays.push(
        <ColorDisplay hexVal={baseColors[i]} />
      )
    }

    return baseColorDisplays
  }

  render() {
    return (
      <div id='print'>
        <p>This is your scope</p>

        {this.buildScopeSummary(this.props.setup.scopes)}

        This is everything from Typography <br />
        <ul>
          <li>Font Family: {this.props.typography.general.fontFamily}</li>
          <li>Font Size: {this.props.typography.general.fontSize}</li>
          <li>Line Height: {this.props.typography.general.lineHeight}</li>
          <li>Text Width: {this.props.typography.general.textWidth}</li>
          <li>Paragraph Spacing: {this.props.typography.general.textSpacing}</li>
          <li>Headline 1:
            <ul>
              <li>Size: {this.props.typography.headline1.size}</li>
              <li>Spacing Top: {this.props.typography.headline1.spacingTop}</li>
              <li>Spacing Bottom: {this.props.typography.headline1.spacingBottom}</li>
            </ul>
          </li>
          <li>Headline 2:
            <ul>
              <li>Size: {this.props.typography.headline2.size}</li>
              <li>Spacing Top: {this.props.typography.headline2.spacingTop}</li>
              <li>Spacing Bottom: {this.props.typography.headline2.spacingBottom}</li>
            </ul>
          </li>
          <li>Headline 3:
            <ul>
              <li>Size: {this.props.typography.headline3.size}</li>
              <li>Spacing Top: {this.props.typography.headline3.spacingTop}</li>
              <li>Spacing Bottom: {this.props.typography.headline3.spacingBottom}</li>
            </ul>
          </li>
          <li>Colors:
            <ul>
              <li>Background Color: {this.props.typography.colors.background}</li>
              <li>Text Color: {this.props.typography.colors.foreground}</li>
            </ul>
          </li>
        </ul>

        Your Colors
        {this.displayBaseColors(this.props.colors.baseColors)}
        {this.constructAccentColors(this.props.colors.contrast.colors)}
        <ColorDisplay
          hexVal={'#333333'}
        />
        <ColorDisplay
          hexVal={'#ffffff'}
        />
        <SecondaryButton
          onClick={() => {
            generatePDF(this.props.typography, this.props.colors)
          }}
        >
          Print
        </SecondaryButton>
      </div>
    )
  }
}

export default Summary

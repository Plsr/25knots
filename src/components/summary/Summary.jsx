import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import { extractScopeInformation } from '../helpers/functions/scopes.js'
import {appColors} from '../../styles/base/colors.js'
import SpacingStack from '../helpers/spacing/SpacingStack.jsx'
import SpacingInset from '../helpers/spacing/SpacingInset.jsx'
import SpacingInline from '../helpers/spacing/SpacingInline.jsx'
import ColorDisplay from '../colors/ColorDisplay.jsx'
import Icon from '../Icon.jsx'
import Headline1 from '../shared/Headline1.jsx'
import Progress from '../shared/Progress.jsx'
import BorderedBox from '../shared/BorderedBox.jsx'
import SecondaryButton from '../shared/SecondaryButton.jsx'
import { generatePDF } from '../helpers/functions/pdfGenerator.js'

class Summary extends React.Component {

  buildScopeSummary(scopes) {
    let extractedScopes = extractScopeInformation(scopes)
    let summaryElemets = []

    for (var i = 0; i < extractedScopes.length; i++) {
      let currentScope = extractedScopes[i]
      summaryElemets.push(
        <div className={css(styles.singleScopeStyles)}>
          <SpacingInline size={'l'} >
            ➜
          </SpacingInline>
          <SpacingInline size={'l'} >
            <Icon icon={currentScope.icon} color={appColors.secondary} size={42} />
          </SpacingInline>
          <span>{currentScope.text}</span>
        </div>
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
      <div>
        <Progress />
        <SpacingStack size='l' />
        <SpacingStack size='l'>
          <div className={css(styles.ContainerStyles)}>
            <Headline1 content='Your Results' />
            <p>Following, you can find a summary of what you worked out. <br />
You can also save this as a pdf for later use.</p>
            <SpacingStack size='l' />
            <SecondaryButton
              onClick={() => {
                generatePDF(this.props.typography, this.props.colors)
              }}
              variant='outline'
            >
              Save as PDF
            </SecondaryButton>
          </div>
        </SpacingStack>
        <BorderedBox>
          <SpacingInset size='m'>
            <p>You are building the following:</p>
            <SpacingStack size='m' />
            <div className={css(styles.scopesWrapper)}>
              {this.buildScopeSummary(this.props.setup.scopes)}
            </div>
          </SpacingInset>
        </BorderedBox>

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
      </div>
    )
  }
}

const styles = StyleSheet.create({
  ContainerStyles: {
    textAlign: 'center'
  },
  singleScopeStyles: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '64px',
    color: appColors.secondary,
    ':last-child': {
      marginRight: 0
    }
  },
  scopesWrapper: {
    display: 'flex',
    flexDirection: 'row'
  }
})

export default Summary

import React from 'react'
import pdfConverter from 'jspdf'

import { extractScopeInformation } from '../helpers/functions/scopes.js'
import {appColors} from '../../styles/base/colors.js'
import SpacingStack from '../helpers/spacing/SpacingStack.jsx'
import SpacingInline from '../helpers/spacing/SpacingInline.jsx'
import ColorDisplay from '../colors/ColorDisplay.jsx'
import Icon from '../Icon.jsx'
import SecondaryButton from '../shared/SecondaryButton.jsx'
import { convertToRgb } from '../helpers/functions/colorCalculations.js'

class Summary extends React.Component {
  constructor(props) {
    super(props)

    this.pdfToHTML = this.pdfToHTML.bind(this)
  }

  pdfToHTML(){
    var pdf = new pdfConverter('p', 'mm', 'a4')

    let imgData = 'data:image/png;base64,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'

    pdf.addImage(imgData, 'PNG', 65, 10, 81, 30)
    pdf.setFontSize(10)
    pdf.text('These are the values you gathered with the help of 25knots', 10, 50)

    pdf.setFontSize(20)
    pdf.text('Typography', 10, 70)
    pdf.setFontSize(10)
    pdf.text('Font Family:', 10, 80)
    pdf.text(this.props.typography.general.fontFamily, 50, 80)
    pdf.text('Font Size:', 10, 85)
    pdf.text(this.props.typography.general.fontSize + 'px', 50, 85)
    pdf.text('Line Height:', 10, 90)
    pdf.text(this.props.typography.general.lineHeight + 'px', 50, 90)
    pdf.text('Text Width:', 10, 95)
    pdf.text(this.props.typography.general.textWidth + 'px', 50, 95)
    pdf.text('Paragraph Spacing:', 10, 100)
    pdf.text(this.props.typography.general.textSpacing + 'px', 50, 100)

    pdf.setFontSize(14)
    pdf.text('Headline 1', 10, 120)
    pdf.setFontSize(10)
    pdf.text('Size', 10, 125)
    pdf.text(this.props.typography.headline1.size + 'px', 50, 125)
    pdf.text('Spacing Top', 10, 130)
    pdf.text(this.props.typography.headline1.spacingTop + 'px', 50, 130)
    pdf.text('Spacing Bottom', 10, 135)
    pdf.text(this.props.typography.headline1.spacingBottom + 'px', 50, 135)

    pdf.setFontSize(14)
    pdf.text('Headline 2', 70, 120)
    pdf.setFontSize(10)
    pdf.text('Size', 70, 125)
    pdf.text(this.props.typography.headline2.size + 'px', 110, 125)
    pdf.text('Spacing Top', 70, 130)
    pdf.text(this.props.typography.headline2.spacingTop + 'px', 110, 130)
    pdf.text('Spacing Bottom', 70, 135)
    pdf.text(this.props.typography.headline2.spacingBottom + 'px', 110, 135)

    pdf.setFontSize(14)
    pdf.text('Headline 3', 130, 120)
    pdf.setFontSize(10)
    pdf.text('Size', 130, 125)
    pdf.text(this.props.typography.headline3.size + 'px', 170, 125)
    pdf.text('Spacing Top', 130, 130)
    pdf.text(this.props.typography.headline3.spacingTop + 'px', 170, 130)
    pdf.text('Spacing Bottom', 130, 135)
    pdf.text(this.props.typography.headline3.spacingBottom + 'px', 170, 135)

    pdf.setFontSize(14)
    pdf.text('Colors', 10, 155)
    pdf.setFontSize(10)
    pdf.text('Foreground:', 10, 160)
    pdf.text(this.props.typography.colors.foreground, 50, 160)
    let foregroundRgb = convertToRgb(this.props.typography.colors.foreground)
    pdf.setFillColor(foregroundRgb.r, foregroundRgb.g, foregroundRgb.b)
    pdf.circle(70, 160, 1, 'F')
    pdf.text('Background', 10, 165)
    pdf.text(this.props.typography.colors.background, 50, 165)
    let backgroundRgb = convertToRgb(this.props.typography.colors.background)
    pdf.setFillColor(backgroundRgb.r, backgroundRgb.g, backgroundRgb.b)
    pdf.circle(70, 165, 1, 'F')

    pdf.setFontSize(20)
    pdf.text('Colors', 10, 190)
    pdf.setFontSize(12)

    let xVal = 10
    for (var i = 0; i < this.props.colors.baseColors.length; i++) {
      let currColor = this.props.colors.baseColors[i]
      let rgbColor = convertToRgb(currColor)
      pdf.setFillColor(rgbColor.r, rgbColor.g, rgbColor.b)
      pdf.circle(xVal, 210, 20, 'F')
      pdf.text(currColor, xVal - 20, 240)
      xVal += 20
    }

    for (var j = 0; j < this.props.colors.contrast.colors.length; j++) {
      let currColor = this.props.colors.contrast.colors[j]
      let rgbColor = convertToRgb(currColor)
      pdf.setFillColor(rgbColor.r, rgbColor.g, rgbColor.b)
      pdf.circle(xVal, 210, 20, 'F')
      pdf.text(currColor, xVal - 20, 240)
      xVal += 20
    }

    pdf.save('test.pdf')
  }

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
            this.pdfToHTML()
          }}
        >
          Print
        </SecondaryButton>
      </div>
    )
  }
}

export default Summary

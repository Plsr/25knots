import React from 'react'

import {convertToHsl, calculateCompelemntary, claculateHueInDirection, convertToHex, DIRECTIONS} from '../helpers/functions/colorCalculations.js'

import ColorDisplay from './ColorDisplay.jsx'
import SecondaryButton from '../shared/SecondaryButton.jsx'

class GeneralAccentColorController extends React.Component {

  checkForSimilarColors(colors, candidate) {
    let similarValues = false
    for (var j = 0; j < colors.length; j++) {
      let saturationDifference = Math.abs(colors[j].s - candidate.s)
      let lightnessDifference = Math.abs(colors[j].l - candidate.l)

      if (saturationDifference > 0.1 && lightnessDifference > 0.1) {
        similarValues = true
      }
    }

    return similarValues
  }

  changeValuesOfColor(values, color) {
    let manipulatedColor = Object.assign({}, color)
    // Switch case
    // Do the changes that need to be DropdownController
    switch (values) {
      case 0:
        // change lightness
        manipulatedColor.l = Math.random().toFixed(2)
        break
      case 1:
        // change Saturation
        manipulatedColor.s = Math.random().toFixed(2)
        break
      case 2:
        // change lightning and saturation
        manipulatedColor.l = Math.random().toFixed(2)
        manipulatedColor.s = Math.random().toFixed(2)
        break
      default:
        throw new 'Oops, seems like the randomizer messed something up.'
    }

    return manipulatedColor
  }

  // TODO: These are several functions in here!
  calculateMonochromaticColors(amount) {

    let colors = []

    for (var i = 0; i < amount; i++) {
      let currentColor = Object.assign({}, convertToHsl(this.props.baseColor))
      // Figure out if only one or two values should be changed
      // Random: 0 = Lightness, 1 = Saturation, 2 = Both
      let randomOption = Math.floor(Math.random() * 3)
      currentColor = this.changeValuesOfColor(randomOption, currentColor)

      if (colors.length < 1) {
        colors.push(currentColor)
      } else {
        let similarColors = this.checkForSimilarColors(colors, currentColor)

        while (similarColors) {
          currentColor = this.changeValuesOfColor(randomOption, currentColor)
          similarColors = this.checkForSimilarColors(colors, currentColor)
        }
        colors.push(currentColor)
      }
    }

    return colors
  }

  render() {
    let hslColor = convertToHsl(this.props.baseColor)
    let complementary = calculateCompelemntary(hslColor)
    let triad1 = claculateHueInDirection(hslColor, 30, DIRECTIONS.CLOCKWISE)
    let triad2 = claculateHueInDirection(hslColor, 30, DIRECTIONS.COUNTER_CLOCKWISE)
    let monochromColors = this.calculateMonochromaticColors(3)

    console.log(hslColor); //eslint-disable-line
    console.log(complementary); //eslint-disable-line
    console.log(triad1); //eslint-disable-line
    console.log(triad2); //eslint-disable-line
    for (var i = 0; i < monochromColors.length; i++) {
      console.log(monochromColors[i]) //eslint-disable-line
    }

    return (
      <div>
        <h1>Accent Color</h1>
        <h3>Base Color</h3>
        <ColorDisplay hexVal={this.props.baseColor}/>
        <h3>Complenentary Color</h3>
        <ColorDisplay hexVal={convertToHex(complementary)}/>
        <h3>Triad Contrast</h3>
        <ColorDisplay hexVal={convertToHex(triad1)}/>
        <ColorDisplay hexVal={convertToHex(triad2)}/>
        <h3>Triad Contrast</h3>
        <ColorDisplay hexVal={convertToHex(monochromColors[0])}/>
        <ColorDisplay hexVal={convertToHex(monochromColors[1])}/>
        <ColorDisplay hexVal={convertToHex(monochromColors[2])}/>

        <h3>Your Color Scheme</h3>

        <ColorDisplay hexVal={this.props.baseColor}/>
        <ColorDisplay hexVal='#000000'/>
        <ColorDisplay hexVal='#FFFFFF'/>
        <SecondaryButton
          onClick={this.props.onButtonClick}
          variant={'outline'}
        >
          Back
        </SecondaryButton>
      </div>
    )
  }
}

export default GeneralAccentColorController

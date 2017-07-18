import React from 'react'

import {convertToHsl, calculateCompelemntary, claculateHueInDirection, DIRECTIONS} from '../helpers/functions/colorCalculations.js'

import ColorDisplay from './ColorDisplay.jsx'
import SecondaryButton from '../shared/SecondaryButton.jsx'

class GeneralAccentColorController extends React.Component {

  render() {
    let hslColor = convertToHsl(this.props.baseColor)
    let complementary = calculateCompelemntary(hslColor)
    let triad1 = claculateHueInDirection(hslColor, 30, DIRECTIONS.CLOCKWISE)
    let triad2 = claculateHueInDirection(hslColor, 30, DIRECTIONS.COUNTER_CLOCKWISE)

    console.log(hslColor); //eslint-disable-line
    console.log(complementary); //eslint-disable-line
    console.log(triad1); //eslint-disable-line
    console.log(triad2); //eslint-disable-line
    return (
      <div>
        <h1>Accent Color</h1>
        <h3>Base Color</h3>
        <ColorDisplay hexVal={this.props.baseColor}/>
        <h3>Choose Accent Color</h3>
        <h3>HSL Color</h3>
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

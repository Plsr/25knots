import React from 'react'

import {convertToHsl, calculateCompelemntary, claculateHueInDirection, convertToHex, calculateMonochromaticColors, DIRECTIONS} from '../helpers/functions/colorCalculations.js'

import ColorDisplay from './ColorDisplay.jsx'
import SecondaryButton from '../shared/SecondaryButton.jsx'
import DropdownController from '../DropdownController.jsx'

const CONTRAST_OPTIONS = {
  complementary: 'Complementary',
  triad: 'Triad',
  monochromatic: 'Monochromatic'
}

// TODO: There should be a single method to calculate triadic colors
// TODO: Conversion to hex should be done inside the color functions, not in the component
class GeneralAccentColorController extends React.Component {
  constructor(props) {
    super(props)

    let hslColor = convertToHsl(this.props.baseColor)
    let complementaryColors = [convertToHex(calculateCompelemntary(hslColor))]
    let triadColors = [
      convertToHex(claculateHueInDirection(hslColor, 30, DIRECTIONS.CLOCKWISE)),
      convertToHex(claculateHueInDirection(hslColor, 30, DIRECTIONS.COUNTER_CLOCKWISE))
    ]
    let monochromaticColors = calculateMonochromaticColors(3, this.props.baseColor)

    this.accentColors = {}
    this.accentColors[CONTRAST_OPTIONS.complementary] = complementaryColors
    this.accentColors[CONTRAST_OPTIONS.triad] = triadColors
    this.accentColors[CONTRAST_OPTIONS.monochromatic] = monochromaticColors

    this.state = {
      contrastToShow: CONTRAST_OPTIONS.complementary
    }

    this.updateContrastToShow = this.updateContrastToShow.bind(this)
  }

  updateContrastToShow(key, value) {
    this.setState({
      contrastToShow: value
    })
  }

  getContrastStrings() {
    let contrastStrings = []

    for (var contrast in CONTRAST_OPTIONS) {
      if (CONTRAST_OPTIONS.hasOwnProperty(contrast)) {
        contrastStrings.push(CONTRAST_OPTIONS[contrast])
      }
    }

    return contrastStrings
  }

  displayColors() {
    let colorDisplays = []
    let colors = this.accentColors[this.state.contrastToShow]

    console.log(colors); // eslint-disable-line

    for (var i = 0; i < colors.length; i++) {
      colorDisplays.push(
        <ColorDisplay
          hexVal={colors[i]}
        />
      )
    }

    console.log(colorDisplays); // eslint-disable-line
    return colorDisplays
  }


  render() {
    console.log(this.accentColors); // eslint-disable-line
    return (
      <div>
        <h1>Accent Color</h1>
        <h3>Base Color</h3>
        <ColorDisplay hexVal={this.props.baseColor}/>
        <h3>Pick a contrast type</h3>
        <DropdownController
          title='Choose a contrast type'
          options={this.getContrastStrings()}
          onChange={this.updateContrastToShow}
        />

        {this.displayColors()}

        <h3>Your Color Scheme</h3>

        <ColorDisplay hexVal={this.props.baseColor}/>
        <ColorDisplay hexVal='#000000'/>
        <ColorDisplay hexVal='#FFFFFF'/>
        <SecondaryButton
          onClick={this.props.onBackButtonClick}
          variant={'outline'}
        >
          Back
        </SecondaryButton>
        <SecondaryButton
          onClick={() => {
            console.log(this.state.contrastToShow, this.state.colors); // eslint-disable-line
            this.props.onNextButtonClick(this.state.contrastToShow, this.accentColors[this.state.contrastToShow])
          }}
        >
          Next
        </SecondaryButton>
      </div>
    )
  }
}

export default GeneralAccentColorController

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

class GeneralAccentColorController extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      contrastToShow: CONTRAST_OPTIONS.complementary,
      colors: [
        convertToHex(calculateCompelemntary(convertToHsl(this.props.baseColor)))
      ]
    }

    this.updateContrastToShow = this.updateContrastToShow.bind(this)
    this.calculateColors = this.calculateColors.bind(this)
  }

  updateContrastToShow(key, value) {
    this.setState({
      contrastToShow: value
    })
  }

  // FIXME: Legacy soon?
  renderContrast(key, value) {
    let hslColor = convertToHsl(this.props.baseColor)

    switch (value) {
      case CONTRAST_OPTIONS.complementary: {
        let complementary = calculateCompelemntary(hslColor)
        return (
          <div>
            <h3>Complementary Contrast</h3>
            <ColorDisplay hexVal={convertToHex(complementary)}/>
          </div>
        )
      }
      case CONTRAST_OPTIONS.triad: {
        let triad1 = claculateHueInDirection(hslColor, 30, DIRECTIONS.CLOCKWISE)
        let triad2 = claculateHueInDirection(hslColor, 30, DIRECTIONS.COUNTER_CLOCKWISE)
        return (
          <div>
            <h3>Triad Contrast</h3>
            <ColorDisplay hexVal={convertToHex(triad1)}/>
            <ColorDisplay hexVal={convertToHex(triad2)}/>
          </div>
        )
      }
      case CONTRAST_OPTIONS.monochromatic: {
        let monoColors = calculateMonochromaticColors(3, convertToHsl(this.props.baseColor))
        let displays = []

        for (var i = 0; i < monoColors.length; i++) {
          displays.push(
            <ColorDisplay hexVal={convertToHex(monoColors[i])}/>
          )
        }
        return (
          <div>
            <h3>Monochromatic Contrast</h3>
            {displays}
          </div>
        )
      }
      default:

    }
  }

  calculateColors(key, value) {
    let hslColor = convertToHsl(this.props.baseColor)
    let colors = []

    switch (value) {
      case CONTRAST_OPTIONS.complementary: {
        let complementary = calculateCompelemntary(hslColor)
        colors.push(
          convertToHex(complementary)
        )
        break
      }
      case CONTRAST_OPTIONS.triad: {
        let triad1 = claculateHueInDirection(hslColor, 30, DIRECTIONS.CLOCKWISE)
        let triad2 = claculateHueInDirection(hslColor, 30, DIRECTIONS.COUNTER_CLOCKWISE)
        colors.push(
          convertToHex(triad1),
          convertToHex(triad2)
        )
        break
      }
      case CONTRAST_OPTIONS.monochromatic: {
        let monoColors = calculateMonochromaticColors(3, convertToHsl(this.props.baseColor))

        for (var i = 0; i < monoColors.length; i++) {
          colors.push(
            convertToHex(monoColors[i])
          )
        }
      }
        break
      default:

    }

    this.setState({
      contrastToShow: CONTRAST_OPTIONS.complementary,
      colors: colors
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
    let colors = []

    for (var i = 0; i < this.state.colors.length; i++) {
      colors.push(
        <ColorDisplay
          hexVal={this.state.colors[i]}
        />
      )
    }

    return colors
  }


  render() {
    console.log(this.state); // eslint-disable-line
    return (
      <div>
        <h1>Accent Color</h1>
        <h3>Base Color</h3>
        <ColorDisplay hexVal={this.props.baseColor}/>
        <h3>Pick a contrast type</h3>
        <DropdownController
          title='Choose a contrast type'
          options={this.getContrastStrings()}
          onChange={this.calculateColors}
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
            this.props.onNextButtonClick(this.state.contrastToShow, this.state.colors)
          }}
        >
          Next
        </SecondaryButton>
      </div>
    )
  }
}

export default GeneralAccentColorController

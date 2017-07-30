import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import DropdownController from '../DropdownController.jsx'
import ColorDisplay from './ColorDisplay.jsx'
import ColorSelector from './ColorSelector.jsx'
import SecondaryButton from '../shared/SecondaryButton.jsx'
import Headline1 from '../shared/Headline1.jsx'
import { ChromePicker } from 'react-color'
import {SCOPES} from '../helpers/constants/scopes.js'
import { getMaterialColorObjectForShade } from '../helpers/functions/colorCalculations.js'

class BaseColorController extends React.Component {
  constructor(props) {
    super(props)

    this.handleColorPickerChange = this.handleColorPickerChange.bind(this)
    this.handleDropdownChange = this.handleDropdownChange.bind(this)
    this.handleColorSelectorChange = this.handleColorSelectorChange.bind(this)
    this.handleNextButtonClick = this.handleNextButtonClick.bind(this)

    this.state = {
      baseColor: this.props.colorSet[0].color
    }
  }

  handleColorPickerChange(value) {
    this.setState({
      baseColor: value.hex
    })
  }

  handleDropdownChange(key, value) {
    for (var i = 0; i < this.props.colorSet.length; i++) {
      let currColor = this.props.colorSet[i]
      if (currColor.adjective === value) {
        this.setState({
          baseColor: currColor.color
        })
      }
    }
  }

  handleColorSelectorChange(value) {
    if (this.props.scope === SCOPES.ANDROID) {
      let colorObject = getMaterialColorObjectForShade(value)
      this.setState({
        baseColor: value,
        shades: [
          colorObject[300],
          colorObject[700]
        ]
      })
    } else {
      this.setState({
        baseColor: value
      })
    }
  }

  handleNextButtonClick() {
    let colorsArray = [ this.state.baseColor ]

    if (this.state.shades != undefined) {
      colorsArray = colorsArray.concat(this.state.shades)
    }
    this.props.onButtonClick(colorsArray)
  }


  // Display Colorpicker for the currently set scope
  displayColorpickerForScope(scope) {
    if (scope == SCOPES.ANDROID || scope == SCOPES.IOS) {
      return (
        <ColorSelector
          options={this.constructDatasetForKey('color')}
          active={this.state.baseColor}
          onClick={this.handleColorSelectorChange}
        />
      )
    } else {
      return (
        <ChromePicker
          color={this.state.baseColor}
          onChange={this.handleColorPickerChange}
        />
      )
    }
  }

  /**
   * Constructs a data set from the current colorSet for
   * a given key.
   * A color object as defined in /helpers/constants/colors.js
   * must always have an adjective and a color attribute. It can
   * also have an optional displayName.
   *
   */
  constructDatasetForKey(key) {
    let colorSet = this.props.colorSet
    let colors = []

    for (var i = 0; i < colorSet.length; i++) {
      let currColorObj = colorSet[i]
      colors.push(currColorObj[key])
    }
    return colors
  }

  displayColorsForScope(scope) {
    let colorDisplays = []

    colorDisplays.push(
      <ColorDisplay hexVal={this.state.baseColor} />
    )

    if (scope === SCOPES.ANDROID && this.state.shades != undefined) {
      for (var i = 0; i < this.state.shades.length; i++) {
        colorDisplays.push(
          <ColorDisplay hexVal={this.state.shades[i]} />
        )
      }
    }

    return colorDisplays
  }

  getHeadlineStringForScope(scope) {
    return scope === SCOPES.ANDROID ? 'Choose your Base Color' : 'Choose your Base Colors'
  }

  render() {
    console.log(this.state.baseColor); //eslint-disable-line
    return (
      <div>
        <div className={css(styles.HeadlineWrapper)}>
          <Headline1 content={this.getHeadlineStringForScope(this.props.scope)} />
        </div>

        <DropdownController
          title='Choose colors by adjectives'
          options={this.constructDatasetForKey('adjective')}
          storeKey='baseColor'
          onChange={this.handleDropdownChange}
        />
        {this.displayColorpickerForScope(this.props.scope)}
        {this.displayColorsForScope(this.props.scope)}
        <SecondaryButton onClick={this.handleNextButtonClick}>
          Next Step
        </SecondaryButton>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  HeadlineWrapper: {
    textAlign: 'center'
  }
})


export default BaseColorController

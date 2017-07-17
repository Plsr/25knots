import React from 'react'

import DropdownController from '../DropdownController.jsx'
import { ChromePicker } from 'react-color'
import ColorDisplay from './ColorDisplay.jsx'
import ColorSelector from './ColorSelector.jsx'

import {COLORS, MATERIAL_COLORS, IOS_COLORS} from '../helpers/constants/colors.js'
import {SCOPES} from '../helpers/constants/scopes.js'

class Colors extends React.Component {
  constructor(props) {
    super(props)

    // Set the colorset to be used
    this.colorSet = this.getColorsetForScope()

    this.handleDropdownChange = this.handleDropdownChange.bind(this)
    this.handleColorPickerChange = this.handleColorPickerChange.bind(this)
    this.handleColorSelectorClick = this.handleColorSelectorClick.bind(this)
    this.getColorsetForScope = this.getColorsetForScope.bind(this)
    this.displayColorpickerForScope = this.displayColorpickerForScope.bind(this)
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
    let colors = []

    for (var i = 0; i < this.colorSet.length; i++) {
      let currColorObj = this.colorSet[i]
      colors.push(currColorObj[key])
    }

    return colors
  }

  // Get the colors for the currently set scope
  getColorsetForScope() {
    switch (this.props.scopes[1]) {
      case SCOPES.ANDROID:
        return MATERIAL_COLORS
      case SCOPES.IOS:
        return IOS_COLORS
      default:
        return COLORS
    }
  }

  // Display Colorpicker for the currently set scope
  displayColorpickerForScope() {
    if (this.props.scopes[1] == SCOPES.ANDROID || this.props.scopes[1] == SCOPES.IOS) {
      return (
        <ColorSelector
          options={this.constructDatasetForKey('color')}
          active={this.props.baseColor}
          onClick={this.handleColorSelectorClick}
        />
      )
    } else {
      return (
        <ChromePicker
          color={this.props.baseColor}
          onChange={this.handleColorPickerChange}
        />
      )
    }
  }

  /**
   * Gets the corresponding color for the selected adjective in the dropdown
   * and writes it to the state
   */
  handleDropdownChange(key, value) {
    for (var i = 0; i < this.colorSet.length; i++) {
      let currColor = this.colorSet[i]
      if (currColor.adjective === value) {
        this.props.setValueForKey(key, currColor.color)
      }
    }
  }

  /**
   * Explicitly handles the change of the <ChromePicker> Component as
   * that component returns a color object with color representations
   * for the different color models. We want to optain the hex value here.
   */
  handleColorPickerChange(value) {
    this.props.setValueForKey('baseColor', value.hex)
  }

  handleColorSelectorClick(value) {
    this.props.setValueForKey('baseColor', value)
  }

  render() {
    return (
      <div>
        <h1>Colors!</h1>
        <DropdownController
          title='Choose colors by adjectives'
          options={this.constructDatasetForKey('adjective')}
          storeKey='baseColor'
          onChange={this.handleDropdownChange}
        />
        {this.displayColorpickerForScope()}
        <ColorDisplay hexVal={this.props.baseColor}/>
      </div>
    )
  }
}

export default Colors

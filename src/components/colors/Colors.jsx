import React from 'react'

import DropdownController from '../DropdownController.jsx'
import { ChromePicker } from 'react-color'
import ColorDisplay from './ColorDisplay.jsx'
import ColorSelector from './ColorSelector.jsx'

import {COLORS, MATERIAL_COLORS} from '../helpers/constants/colors.js'
import {SCOPES} from '../helpers/constants/scopes.js'

class Colors extends React.Component {
  constructor(props) {
    super(props)

    // Set the colorset to be used
    this.colorSet = this.getColorsetForScope()

    this.handleDropdownChange = this.handleDropdownChange.bind(this)
    this.handleColorChange = this.handleColorChange.bind(this)
    this.handleColorSelectorClick = this.handleColorSelectorClick.bind(this)
    this.getColorsetForScope = this.getColorsetForScope.bind(this)
    this.displayColorpickerForScope = this.displayColorpickerForScope.bind(this)
  }

  /**
   * Constructs the options array for the color adjectives
   * dropdown.
   * For now, just takes a static colors object, but later on will
   * Distinguish which colors to use by scope.
   */
  constructAdjectiveOptions() {
    let colors = []

    for (var color in this.colorSet) {
      if (this.colorSet.hasOwnProperty(color)) {
        colors.push(color)
      }
    }

    return colors
  }

  constructColorOptions() {
    let colors = []

    for (var color in this.colorSet) {
      if (this.colorSet.hasOwnProperty(color)) {
        colors.push(this.colorSet[color].color)
      }
    }

    return colors
  }

  // Get the colors for the currently set scope
  getColorsetForScope() {
    switch (this.props.scopes[1]) {
      case SCOPES.ANDROID:
        return MATERIAL_COLORS
      default:
        return COLORS
    }
  }

  // Display Colorpicker for the currently set scope
  displayColorpickerForScope() {
    switch (this.props.scopes[1]) {
      case SCOPES.ANDROID:
        return (
          <ColorSelector
            options={this.constructColorOptions()}
            active={this.props.baseColor}
            onClick={this.handleColorSelectorClick}
          />
        )
      default:
        return (
          <ChromePicker
            color={this.props.baseColor}
            onChange={this.handleColorChange}
          />
        )
    }
  }

  /**
   * Gets the corresponding color for the selected adjective in the dropdown
   * and writes it to the state
   */
  handleDropdownChange(key, value) {
    let selectedColor = this.colorSet[value].color
    this.props.setValueForKey(key, selectedColor)
  }

  handleColorChange(value) {
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
          options={this.constructAdjectiveOptions()}
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

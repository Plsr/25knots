import React from 'react'

import DropdownController from '../DropdownController.jsx'
import { ChromePicker } from 'react-color'
import ColorDisplay from './ColorDisplay.jsx'

import {COLORS, MATERIAL_COLORS} from '../helpers/constants/colors.js'
import {SCOPES} from '../helpers/constants/scopes.js'

class Colors extends React.Component {
  constructor(props) {
    super(props)

    // Set the colorset to be used
    this.colorSet = this.getColorsetForScope()

    this.handleDropdownChange = this.handleDropdownChange.bind(this)
    this.handleColorChange = this.handleColorChange.bind(this)
    this.getColorsetForScope = this.getColorsetForScope.bind(this)
  }

  /**
   * Constructs the options array for the color adjectives
   * dropdown.
   * For now, just takes a static colors object, but later on will
   * Distinguish which colors to use by scope.
   */
  constructColorOptions() {
    let colors = []

    for (var color in this.colorSet) {
      if (this.colorSet.hasOwnProperty(color)) {
        colors.push(color)
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

  render() {
    return (
      <div>
        <h1>Colors!</h1>
        <DropdownController
          title='Choose colors by adjectives'
          options={this.constructColorOptions()}
          storeKey='baseColor'
          onChange={this.handleDropdownChange}
        />
        <ChromePicker
          color={this.props.baseColor}
          onChange={this.handleColorChange}
        />
        <ColorDisplay hexVal={this.props.baseColor}/>
      </div>
    )
  }
}

export default Colors

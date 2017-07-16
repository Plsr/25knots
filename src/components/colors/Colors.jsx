import React from 'react'

import DropdownController from '../DropdownController.jsx'
import { ChromePicker } from 'react-color'
import ColorDisplay from './ColorDisplay.jsx'

import {COLORS} from '../helpers/constants/colors.js'

class Colors extends React.Component {
  constructor(props) {
    super(props)

    this.handleDropdownChange = this.handleDropdownChange.bind(this)
    this.handleColorChange = this.handleColorChange.bind(this)
  }

  /**
   * Constructs the options array for the color adjectives
   * dropdown.
   * For now, just takes a static colors object, but later on will
   * Distinguish which colors to use by scope.
   */
  constructColorOptions() {
    let colors = []

    for (var color in COLORS) {
      if (COLORS.hasOwnProperty(color)) {
        colors.push(color)
      }
    }

    return colors
  }

  /**
   * Gets the corresponding color for the selected adjective in the dropdown
   * and writes it to the state
   */
  handleDropdownChange(key, value) {
    let selectedColor = COLORS[value].color
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

import React from 'react'

import DropdownController from '../DropdownController.jsx'
import ColorDisplay from './ColorDisplay.jsx'
import ColorSelector from './ColorSelector.jsx'
import SecondaryButton from '../shared/SecondaryButton.jsx'
import { ChromePicker } from 'react-color'
import {SCOPES} from '../helpers/constants/scopes.js'

class BaseColorController extends React.Component {

  // Display Colorpicker for the currently set scope
  displayColorpickerForScope(scope) {
    if (scope == SCOPES.ANDROID || scope == SCOPES.IOS) {
      return (
        <ColorSelector
          options={this.constructDatasetForKey('color')}
          active={this.props.colors[0]}
          onClick={this.props.colorSelectorClick}
        />
      )
    } else {
      return (
        <ChromePicker
          color={this.props.colors[0]}
          onChange={this.props.colorPickerChange}
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

  displayBaseColors() {
    let baseColors = []

    for (var i = 0; i < this.props.colors.length; i++) {
      baseColors.push(
        <ColorDisplay hexVal={this.props.colors[i]}/>
      )
    }

    return baseColors
  }


  render() {
    return (
      <div>
        <h1>Colors!</h1>
        <DropdownController
          title='Choose colors by adjectives'
          options={this.constructDatasetForKey('adjective')}
          storeKey='baseColor'
          onChange={this.props.dropdownChange}
        />
        {this.displayColorpickerForScope(this.props.scope)}
        {this.displayBaseColors()}
        <SecondaryButton onClick={this.props.onButtonClick}>
          Next Step
        </SecondaryButton>
      </div>
    )
  }
}


export default BaseColorController

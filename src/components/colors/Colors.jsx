import React from 'react'

import BaseColorController from './BaseColorController.jsx'
import AndroidAccentColorController from './AndroidAccentColorController.jsx'
import GeneralAccentColorController from './GeneralAccentColorController.jsx'
import ColorSummary from './ColorSummary.jsx'

import {MATERIAL_COLOR_SHADES} from '../helpers/constants/colors.js'
import {SCOPES} from '../helpers/constants/scopes.js'

class Colors extends React.Component {
  constructor(props) {
    super(props)

    this.handleColorPickerChange = this.handleColorPickerChange.bind(this)
    this.handleBaseColorPickerChange = this.handleBaseColorPickerChange.bind(this)
    this.handleAccentColorSelectorClick = this.handleAccentColorSelectorClick.bind(this)
    this.handleDropdownChange = this.handleDropdownChange.bind(this)
    this.determineNextStep = this.determineNextStep.bind(this)
    this.determinePreviousStep = this.determinePreviousStep.bind(this)
    this.handleContrastChange = this.handleContrastChange.bind(this)
    this.handleNextButtonClick = this.handleNextButtonClick.bind(this)
  }


  /**
   * Gets the corresponding color for the selected adjective in the dropdown
   * and dispatches an action
   */
  handleDropdownChange(key, value) {
    for (var i = 0; i < this.props.colorSet.length; i++) {
      let currColor = this.props.colorSet[i]
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

  handleBaseColorPickerChange(value) {
    this.props.setValueForKey('baseColor', value)
  }

  handleAccentColorSelectorClick(value) {
    this.props.setValueForKey('accentColor', value)
  }

  handleContrastChange(contrastType, colors) {
    this.props.setColorContrast(contrastType, colors)
  }

  handleNextButtonClick(contrastType, colors) {
    this.props.setColorContrast(contrastType, colors)
    this.props.nextSetupStep()
  }

  determineNextStep() {
    if (this.props.scopes[1] === SCOPES.IOS) {
      this.props.finishColorWizard()
    } else {
      this.props.nextSetupStep()
    }
  }

  determinePreviousStep() {
    if (this.props.scopes[1] === SCOPES.IOS) {
      this.props.firstColorWizardStep()
    } else {
      this.props.previousSetupStep()
    }
  }

  // Display controller for the current step
  displayControllerForScope() {
    switch (this.props.step) {
      case 1:
        return (
          <BaseColorController
            scope={this.props.scopes[1]}
            colorSet={this.props.colorSet}
            color={this.props.baseColor}
            dropdownChange={this.handleDropdownChange}
            colorSelectorClick={this.handleBaseColorPickerChange}
            colorPickerChange={this.handleColorPickerChange}
            onButtonClick={this.determineNextStep}
          />
        )
      case 2:
        if (this.props.scopes[1] === SCOPES.ANDROID) {
          return (
            <AndroidAccentColorController
              baseColor={this.props.baseColor}
              accentColor={this.props.accentColor}
              onBackButtonClick={this.props.previousSetupStep}
              onNextButtonClick={this.handleNextButtonClick}
              colorSet={MATERIAL_COLOR_SHADES}
              colorSelectorClick={this.handleAccentColorSelectorClick}
            />
          )
        } else {
          return (
            <GeneralAccentColorController
              baseColor={this.props.baseColor}
              accent={this.props.accent}
              onBackButtonClick={this.props.previousSetupStep}
              onNextButtonClick={this.handleNextButtonClick}
              onContrastChange={this.handleContrastChange}
              colorSet={MATERIAL_COLOR_SHADES}
              colorSelectorClick={this.handleAccentColorSelectorClick}
            />
          )
        }
      case 3:
        return (
          <ColorSummary
            onBackButtonClick={this.determinePreviousStep}
            baseColor={this.props.baseColor}
            accentColors={this.props.contrast.colors}
            black='#333333'
            white='#ffffff'
          />
        )
    }
  }

  render() {
    return (
      <div>
        {this.displayControllerForScope()}
      </div>
    )
  }
}

export default Colors

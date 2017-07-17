import React from 'react'

import ColorDisplay from './ColorDisplay.jsx'
import SecondaryButton from '../shared/SecondaryButton.jsx'
import ColorSelector from './ColorSelector.jsx'
import ColorDisplayWrapper from './ColorDisplayWrapper.jsx'

class AccentColorController extends React.Component {
  constructAccentColors() {
    let colorSet = this.props.colorSet
    let colors = []

    for (var i = 0; i < colorSet.length; i++) {
      let currColorObj = colorSet[i]
      if (currColorObj[500] !== this.props.baseColor) {
        if (currColorObj.a400 !== undefined) {
          colors.push(currColorObj.a400)
        }
      }
    }
    return colors
  }

  getColorObjectForShade(shade) {
    let colorSet = this.props.colorSet

    for (var i = 0; i < colorSet.length; i++) {
      let currColorObj = colorSet[i]
      for (var currShade in currColorObj) {
        if (currColorObj.hasOwnProperty(currShade)) {
          if (currColorObj[currShade] == shade) {
            return currColorObj
          }
        }
      }
      if (currColorObj[500] == shade) {
        return currColorObj
      }
    }
  }

  constructAccentColorOptions() {
    if (this.props.accentColor === undefined) {
      return
    }

    let accentColorObject = this.getColorObjectForShade(this.props.accentColor)

    return (
      {
        a100: {
          name: 'a100',
          color: accentColorObject.a100
        },
        a200: {
          name: 'a200',
          color: accentColorObject.a200
        },
        a400: {
          name: 'a400',
          color: accentColorObject.a400
        },
        a700: {
          name: 'a700',
          color: accentColorObject.a700
        }
      }
    )
  }

  render() {
    let baseColorObject = this.getColorObjectForShade(this.props.baseColor)

    return (
      <div>
        <h1>Accent Color</h1>
        <h3>Base Color</h3>
        <ColorDisplay hexVal={this.props.baseColor}/>
        <h3>Choose Accent Color</h3>
        <ColorSelector
          options={this.constructAccentColors()}
          active={this.props.accentColor}
          onClick={this.props.colorSelectorClick}
        />
        <h3>Your Color Scheme</h3>

        <ColorDisplay hexVal={this.props.baseColor}/>
        <ColorDisplay hexVal={baseColorObject[300]}/>
        <ColorDisplay hexVal={baseColorObject[700]}/>
        <ColorDisplayWrapper color={this.props.accentColor} options={this.constructAccentColorOptions()} onOptionClick={this.props.colorSelectorClick}/>
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

export default AccentColorController

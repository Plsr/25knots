import React from 'react'

import ColorDisplay from './ColorDisplay.jsx'
import SecondaryButton from '../shared/SecondaryButton.jsx'
import ColorSelector from './ColorSelector.jsx'

class AccentColorController extends React.Component {
  constructAccentColors() {
    let colorSet = this.props.colorSet
    let colors = []
    console.log(colorSet) //eslint-disable-line

    for (var i = 0; i < colorSet.length; i++) {
      let currColorObj = colorSet[i]
      if (currColorObj[500] !== this.props.baseColor) {
        if (currColorObj.a200 !== undefined) {
          colors.push(currColorObj.a400)
        }
      }
    }
    return colors
  }

  render() {
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
        <ColorDisplay hexVal={this.props.accentColor}/>
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

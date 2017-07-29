import React from 'react'

import ColorDisplay from './ColorDisplay.jsx'
import SecondaryButton from '../shared/SecondaryButton.jsx'
import ColorSelector from './ColorSelector.jsx'
import DropdownController from '../DropdownController.jsx'

class AndroidAccentColorController extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      accentShadeToShow: 'a400'
    }

    this.updateAccentShadeToShow = this.updateAccentShadeToShow.bind(this)
    this.handleColorSelectorClick = this.handleColorSelectorClick.bind(this)
  }


  constructAccentColors() {
    let colorSet = this.props.colorSet
    let colors = []

    for (var i = 0; i < colorSet.length; i++) {
      let currColorObj = colorSet[i]
      if (currColorObj[500] !== this.props.baseColor) {
        if (currColorObj[this.state.accentShadeToShow] !== undefined) {
          colors.push(currColorObj[this.state.accentShadeToShow])
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

  updateAccentShadeToShow(key, value) {
    this.setState({
      accentShadeToShow: value
    })
  }

  handleColorSelectorClick(color) {
    this.setState({
      selectedColor: color
    })
  }

  render() {
    let contrastShades = ['a100', 'a200', 'a400', 'a700']

    return (
      <div>
        <h1>Accent Color</h1>
        <h3>Base Color</h3>
        <ColorDisplay hexVal={this.props.baseColor}/>
        <h3>Choose Accent Color</h3>
        <DropdownController
          title='Choose a contrast shade'
          options={contrastShades}
          value={this.state.accentShadeToShow}
          onChange={this.updateAccentShadeToShow}
        />
        <ColorSelector
          options={this.constructAccentColors()}
          active={this.state.selectedColor}
          onClick={this.handleColorSelectorClick}
        />
        <SecondaryButton
          onClick={this.props.onBackButtonClick}
          variant={'outline'}
        >
          Back
        </SecondaryButton>
        <SecondaryButton
          inactive={this.state.selectedColor === undefined}
          onClick={() => {
            this.props.onNextButtonClick(this.state.accentShadeToShow, [ this.state.selectedColor])
          }}
        >
          Next
        </SecondaryButton>
      </div>
    )
  }
}

export default AndroidAccentColorController

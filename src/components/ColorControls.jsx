import React from 'react'
import tinycolor from 'react-color/modules/tinycolor2'

import SpacingStack from './helpers/spacing/SpacingStack.jsx'
import ColorpickerController from './ColorpickerController.jsx'

class ColorControls extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.calculateRatio = this.calculateRatio.bind(this)
  }

  handleChange(key, value) {
    this.props.onChange(this.props.area, key, value)
    this.props.onChange(this.props.area, 'contrastPassing', this.setContrastPassing())
  }

  // Check contrast of the two currently picked colors
  // based on WCAG 2.0 G18
  // https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20160317/G18
  calculateRatio() {
    // Get currently set colors
    let bgColor = tinycolor(this.props.background).toRgb()
    let fgColor = tinycolor(this.props.foreground).toRgb()
    var colors = [bgColor, fgColor]
    var lumis = []
    var ratio

    for (var i = 0; i <colors.length; i++) {
      var currColor = colors[i]

      // Convert RGB values of colors to sRGB
      // Then do claculations as specified in WCAG 2.0 G18
      // https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20160317/G18#G18-tests
      for (var singleColor in currColor) {
        if (currColor.hasOwnProperty(singleColor)) {
          currColor[singleColor] = currColor[singleColor] / 255

          if (currColor[singleColor] <= 0.03928) {
            currColor[singleColor] = currColor[singleColor] / 12.92
          } else {
            currColor[singleColor] = Math.pow(((currColor[singleColor] + 0.055) / 1.055), 2.4)
          }
        }
      }
      // Store luminances of foreground and background color
      lumis.push((0.2126 * currColor.r + 0.7152 * currColor.g + 0.0722 * currColor.b) + 0.05)
    }

    let multiplicator
    // Normalize luminances so that the darker one is 1
    if (lumis[0] > lumis[1]) {
      multiplicator = 1 / lumis[1]
      lumis[0] = lumis[0] * multiplicator
      ratio = lumis[0]
    } else {
      multiplicator = 1 / lumis[0]
      lumis[1] = lumis[1] * multiplicator
      ratio = lumis[1]
    }

    return ratio
  }

  setContrastPassing() {
    let ratio = this.calculateRatio()
    let contrastPassing = {
      AAA: ratio >= 7,
      AA: ratio >= 4.5,
      A: ratio >= 3
    }

    return contrastPassing
  }


  render() {
    return (
      <div>
        <ColorpickerController
          color={this.props.background}
          handleChange={this.handleChange}
          storeKey={'background'}
          title={'Background Color'}
        />
        <SpacingStack size={'l'} />
        <ColorpickerController
          color={this.props.foreground}
          handleChange={this.handleChange}
          storeKey={'foreground'}
          title={'Text Color'}
        />
        <SpacingStack size={'l'} />
        {this.props.contrastPassing.AAA ? 'AAA passing' : 'AAA failing'}
        <SpacingStack size={'l'} />
        {this.props.contrastPassing.AA ? 'AA passing' : 'AA failing'}
        <SpacingStack size={'l'} />
        {this.props.contrastPassing.A ? 'A passing' : 'A failing'}
      </div>
    )
  }
}

export default ColorControls

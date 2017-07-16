import React from 'react'

import DropdownController from '../DropdownController.jsx'

import {COLORS} from '../helpers/constants/colors.js'

class Colors extends React.Component {

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

  render() {
    return (
      <div>
        <h1>Colors!</h1>
        <DropdownController
          title='Choose colors by adjectives'
          options={this.constructColorOptions()}
          value={this.constructColorOptions()[0]}
        />
      </div>
    )
  }
}

export default Colors

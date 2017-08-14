import React from 'react'
import SpacingInset from '../helpers/spacing/SpacingInset.jsx'

import ColorDisplay from './ColorDisplay.jsx'

class ColorSelector extends React.Component {
  // Construct set of ColoDisplays based on passed props
  constructColorOptions() {
    console.log(this.props.options); //eslint-disable-line
    let colorOptions = []
    for (var i = 0; i < this.props.options.length; i++) {
      let currVal = this.props.options[i]
      colorOptions.push(
        <SpacingInset size='xs' displayStyle='inline-block'>
          <ColorDisplay
            hexVal={currVal}
            key={i}
            active={this.props.active === this.props.options[i]}
            onClick={() => this.props.onClick(currVal)}
            size={this.props.displaySize}
          />
        </SpacingInset>
      )
    }

    return colorOptions
  }

  render() {
    return (
      <div>
        {this.constructColorOptions()}
      </div>
    )
  }
}

export default ColorSelector

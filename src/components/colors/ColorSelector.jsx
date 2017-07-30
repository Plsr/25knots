import React from 'react'

import ColorDisplay from './ColorDisplay.jsx'

class ColorSelector extends React.Component {
  // Construct set of ColoDisplays based on passed props
  constructColorOptions() {
    console.log(this.props.options); //eslint-disable-line
    let colorOptions = []
    for (var i = 0; i < this.props.options.length; i++) {
      let currVal = this.props.options[i]
      colorOptions.push(
        <ColorDisplay
          hexVal={currVal}
          key={i}
          active={this.props.active === this.props.options[i]}
          onClick={() => this.props.onClick(currVal)}
          size={this.props.displaySize}
        />
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

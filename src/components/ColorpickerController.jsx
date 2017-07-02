import React from 'react'

import ColorPicker from './ColorPicker.jsx'

class ColorpickerController extends React.Component {
  render() {
    return(
      <ColorPicker
        color={this.props.color}
        handleChange={this.props.handleChange}
        storeKey={this.props.storeKey}
      />
    )
  }
}

export default ColorpickerController

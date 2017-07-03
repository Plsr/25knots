import React from 'react'

import SpacingStack from './helpers/spacing/SpacingStack.jsx'
import ColorpickerController from './ColorpickerController.jsx'

class ColorControls extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(key, value) {
    this.props.onChange(this.props.area, key, value)
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
      </div>
    )
  }
}

export default ColorControls

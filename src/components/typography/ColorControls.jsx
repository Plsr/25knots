import React from 'react'

import SpacingStack from '../helpers/spacing/SpacingStack.jsx'
import ColorpickerController from './ColorpickerController.jsx'
import Callout from './Callout.jsx'

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
        <SpacingStack size={'xl'} />
        <Callout variant={this.props.componentErrors.AAA ? 'success' : 'warning'} >
          {this.props.componentErrors.AAA ? 'AAA passing' : 'AAA failing'}
        </Callout>
        <SpacingStack size={'l'} />
        <Callout variant={this.props.componentErrors.AA ? 'success' : 'warning'} >
          {this.props.componentErrors.AA ? 'AA passing' : 'AA failing'}
        </Callout>
        <SpacingStack size={'l'} />
        <Callout variant={this.props.componentErrors.A ? 'success' : 'error'} >
          {this.props.componentErrors.A ? 'A passing' : 'A failing'}
        </Callout>
      </div>
    )
  }
}

export default ColorControls

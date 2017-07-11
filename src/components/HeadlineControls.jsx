import React from 'react'

import SpacingStack from './helpers/spacing/SpacingStack.jsx'
import SliderController from './SliderController.jsx'

class HeadlineController extends React.Component {
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
        <SliderController
          title={this.props.title +  'Size'}
          value={this.props.size}
          min={8}
          max={120}
          unit={'px'}
          handleChange={this.handleChange}
          storeKey={'size'}
          errorMessages={this.props.componentErrors.size}
        />
        <SpacingStack size={'l'} />
        <SliderController
          title={this.props.title +  'Spacing Top'}
          value={this.props.spacingTop}
          min={0}
          max={100}
          unit={'px'}
          handleChange={this.handleChange}
          storeKey={'spacingTop'}
          errorMessages={this.props.componentErrors.spacingTop}
        />
        <SpacingStack size={'l'} />
        <SliderController
          title={this.props.title +  'Spacing Bottom'}
          value={this.props.spacingBottom}
          min={0}
          max={100}
          unit={'px'}
          handleChange={this.handleChange}
          storeKey={'spacingBottom'}
          errorMessages={this.props.componentErrors.spacingBottom}
        />
      </div>
    )
  }
}

export default HeadlineController

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
    console.log(this.props.componentErrors) //eslint-disable-line no-console
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
        />
        {this.props.componentErrors.map(error => <p>{error}</p>)}
      </div>
    )
  }
}

export default HeadlineController

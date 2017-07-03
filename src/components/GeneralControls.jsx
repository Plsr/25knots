import React from 'react'

import DropdownController from './DropdownController.jsx'
import {fontFamilies} from './helpers/constants/fontFamilies.js'
import SpacingStack from './helpers/spacing/SpacingStack.jsx'
import SliderController from './SliderController.jsx'

class GeneralControls extends React.Component {
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
        <DropdownController
          title={'Font Family'}
          options={fontFamilies}
          storeKey={'fontFamily'}
          value={this.props.fontFamily}
          onChange={this.handleChange}
        />
        <SpacingStack size={'l'} />
        <SliderController
          title={'Text Size'}
          value={this.props.fontSize}
          min={8}
          max={80}
          unit={'px'}
          handleChange={this.handleChange}
          storeKey={'fontSize'}
        />
        <SpacingStack size={'l'} />
        <SliderController
          title={'Line Height'}
          value={this.props.lineHeight}
          min={80}
          max={300}
          unit={'%'}
          handleChange={this.handleChange}
          storeKey={'lineHeight'}
        />
        <SpacingStack size={'l'} />
        <SliderController
          title={'Text Width'}
          value={this.props.textWidth}
          min={100}
          max={1000}
          unit={'px'}
          handleChange={this.handleChange}
          storeKey={'textWidth'}
        />
        <SpacingStack size={'l'} />
        <SliderController
          title={'Paragraph Spacing'}
          value={this.props.textSpacing}
          min={0}
          max={100}
          unit={'px'}
          handleChange={this.handleChange}
          storeKey={'textSpacing'}
        />
      </div>
    )
  }
}

export default GeneralControls

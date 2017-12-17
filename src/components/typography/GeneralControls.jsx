import React from 'react'

import DropdownController from '../shared/DropdownController.jsx'
import {FONTS} from '../../helpers/constants/fonts.js'
import SpacingStack from '../helpers/spacing/SpacingStack.jsx'
import SliderController from './SliderController.jsx'
import Callout from './Callout.jsx'

class GeneralControls extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.displayGeneralErrors = this.displayGeneralErrors.bind(this)
  }

  handleChange(key, value) {
    this.props.onChange(this.props.area, key, value)
  }

  displayGeneralErrors(errors) {
    let generalErrors = []

    for (var i = 0; i < errors.length; i++) {
      generalErrors.push(
        <SpacingStack key={i} size={'l'}>
          <Callout variant={'warning'} >
            {errors[i]}
          </Callout>
        </SpacingStack>
      )
    }

    return generalErrors
  }

  determineFontFamilies = () => {
    const { scopes } = this.props
    const fonts = []

    scopes.map(scope => {
      if (FONTS[scope.value]) fonts.push(...FONTS[scope.value])
    })

    return fonts
  }

  render() {
    const fontFamilies = this.determineFontFamilies()
    return (
      <div>
        <DropdownController
          title={'Font Family'}
          options={fontFamilies}
          storeKey={'fontFamily'}
          value={this.props.fontFamily}
          defaultValue={fontFamilies[0]}
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
          errorMessages={this.props.componentErrors.size}
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
          errorMessages={this.props.componentErrors.lineHeight}
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
          errorMessages={this.props.componentErrors.width}
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
          errorMessages={this.props.componentErrors.spacing}
        />
        {this.props.componentErrors.headlines.length > 0 &&
          <div>
            <SpacingStack size={'xl'} />
            <hr />
            <SpacingStack size={'xl'} />
            {this.displayGeneralErrors(this.props.componentErrors.headlines)}
          </div>
        }
      </div>
    )
  }
}

export default GeneralControls

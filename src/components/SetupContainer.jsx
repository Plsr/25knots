import React from 'react'
import {StyleSheet, css} from 'aphrodite'

import {ICONS} from './helpers/constants/icons.js'
import {baseColors} from '../styles/base/colors.js'
import SpacingInset from './helpers/spacing/SpacingInset.jsx'
import SpacingStack from './helpers/spacing/SpacingStack.jsx'
import IconButton from './IconButton.jsx'
import SecondaryButton from './SecondaryButton.jsx'

class SetupContainer extends React.Component {
  constructor(props) {
    super(props)
    this.handleIconButtonClick = this.handleIconButtonClick.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.constructIconButtons = this.constructIconButtons.bind(this)
    this.generateContent = this.generateContent.bind(this)

    this.state = {
      activeOption: false,
    }
  }

  handleIconButtonClick(key) {
    this.setState({
      activeOption: key
    })
  }

  handleButtonClick() {
    this.props.setScope(this.state.activeOption)

    if(this.props.setupStep == this.props.setupSteps) {
      this.props.setSetupToFinished()
    }

    this.setState({
      activeOption: false
    })
  }

  generateContent() {
    let setupOptions = []

    if(this.props.setupStep == 1) {
      for (var i = 0; i < this.props.setupOptions.length; i++) {
        let currentOption = this.props.setupOptions[i]

        if (currentOption.initialOption)
          setupOptions.push(currentOption)
      }
    } else {
      for (var i = 0; i < this.props.setupOptions.length; i++) {
        let currentOption = this.props.setupOptions[i]

        if (this.props.scopes.indexOf(currentOption.shouldDisplayForScope) > -1)
          setupOptions.push(currentOption)
      }
    }

    return this.constructIconButtons(setupOptions)
  }

  constructIconButtons(setupOptions) {
    let iconButtons = []
    for (var i = 0; i < setupOptions.length; i++) {
      let currentOption = setupOptions[i]
      iconButtons.push(
        <IconButton
          icon={currentOption.icon}
          onClick={this.handleIconButtonClick}
          key={currentOption.value}
          identifier={currentOption.value}
          active={this.state.activeOption === currentOption.value}
        >
          {currentOption.text}
        </IconButton>
      )
    }

    return iconButtons
  }

  render() {
    return(
      <div className={css(styles.containerStyles)}>
        <SpacingInset size='l'>
          <span>This will later be some explanation</span>
          <SpacingInset size='l' />
          <div className={css(styles.buttonWrapperStyles)}>
            {this.generateContent()}
          </div>
          <SpacingInset size='l' />
          <SecondaryButton inactive={this.state.activeOption == false} onClick={this.handleButtonClick}>Next Step</SecondaryButton>
        </SpacingInset>
        {/* TODO: Remove, just debug */}
        {this.props.setupStep}
        {this.props.setupFinished.toString()}
        {this.props.scopes}
      </div>
    )
  }
}

const styles = StyleSheet.create({
  containerStyles: {
    borderRadius: '4px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: baseColors.lighterMidGrey,
    maxWidth: '800px',
    margin: '0 auto'
  },
  buttonWrapperStyles: {
    display: 'flex',
    justifyContent: 'space-between'
  }
})

export default SetupContainer

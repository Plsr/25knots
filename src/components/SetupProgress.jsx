import React from 'react'
import {StyleSheet, css} from 'aphrodite'

import {ICONS} from './helpers/constants/icons.js'
import {baseColors} from '../styles/base/colors.js'
import SpacingInset from './helpers/spacing/SpacingInset.jsx'
import SpacingStack from './helpers/spacing/SpacingStack.jsx'
import IconButton from './IconButton.jsx'
import SecondaryButton from './SecondaryButton.jsx'
import BorderedBox from './BorderedBox.jsx'

class SetupProgress extends React.Component {
  constructor(props) {
    super(props)
    this.handleIconButtonClick = this.handleIconButtonClick.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this)
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

    // If the current setup step is the last, also set the setup state to finished
    if(this.props.setupStep == this.props.setupSteps) {
      this.props.setSetupToFinished()
    }

    // Reset this components' internal state to disable the button
    this.setState({
      activeOption: false
    })
  }

  handleBackButtonClick() {
    this.props.previousSetupStep()
  }

  /**
   * Generates the main content for the setup component (i.e. Iconbuttons).
   * Determines the correct subset of options and calls constructIconButtons()
   * with that supset.
   *
   * @return {Array} An array of IconButtons ready for rendering
   */
  generateContent() {
    let setupOptions = []

    /**
     * If this is the first step in the setup, only use options
     * marked as initial options.
     * Else, got through all options and determine for every one,
     * if it should be displayed
     */
    if(this.props.setupStep == 1) {
      for (var i = 0; i < this.props.setupOptions.length; i++) {
        let currentOption = this.props.setupOptions[i]

        if (currentOption.initialOption)
          setupOptions.push(currentOption)
      }
    } else {
      for (var i = 0; i < this.props.setupOptions.length; i++) {
        let currentOption = this.props.setupOptions[i]

        // An element should only be displayed, if its scope matches on of the global scopes
        if (this.props.scopes.indexOf(currentOption.shouldDisplayForScope) > -1)
          setupOptions.push(currentOption)
      }
    }

    return this.constructIconButtons(setupOptions)
  }

  /**
   * Constrocts an array of IconButtons based on a given set of options
   *
   * NOTE: This will construct an IconButton for every element in the given options
   * and does not validate them.
   *
   * @param {Array} setupOptions
   * @returns {Array} An Array of iconButtons
   */
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
      <BorderedBox>
        <SpacingInset size='l'>
          <span>This will later be some explanation</span>
          <SpacingInset size='l' />
          <div className={css(styles.buttonWrapperStyles)}>
            {this.generateContent()}
          </div>
          <SpacingInset size='l' />
          <div className={css(styles.buttonWrapperStyles)}>
            <SecondaryButton inactive={this.props.setupStep < 2} onClick={this.handleBackButtonClick} variant={'outline'}>Back</SecondaryButton>
            <SecondaryButton inactive={this.state.activeOption == false} onClick={this.handleButtonClick}>Next Step</SecondaryButton>
          </div>
        </SpacingInset>
      </BorderedBox>
    )
  }
}

const styles = StyleSheet.create({
  buttonWrapperStyles: {
    display: 'flex',
    justifyContent: 'space-between'
  }
})

export default SetupProgress

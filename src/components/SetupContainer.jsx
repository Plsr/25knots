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

    this.state = {
      activeOption: false
    }
  }

  handleIconButtonClick(key) {
    this.setState({
      activeOption: key
    })
  }

  handleButtonClick() {
    this.props.onNextButtonClick(this.state.activeOption)
  }

  constructIconButtons(steps) {
    console.log(steps);
    let iconButtons = []
    for (var i = 0; i < steps.length; i++) {
      let step = steps[i]

      if(step.shouldDisplayForScope == this.props.artifactScope) {
        iconButtons.push(
          <IconButton
            icon={step.icon}
            onClick={this.handleIconButtonClick}
            key={step.value}
            identifier={step.value}
            active={this.state.activeOption === step.value}
          >
            {step.text}
          </IconButton>
        )
      }
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
            {this.constructIconButtons(this.props.steps)}
          </div>
          <SpacingInset size='l' />
          <SecondaryButton onClick={this.handleButtonClick}>Next Step</SecondaryButton>
        </SpacingInset>
        {this.props.setupStep}
        {this.props.setupFinished}
        {this.props.artifactScope}
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

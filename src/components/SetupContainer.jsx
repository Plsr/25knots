import React from 'react'
import {StyleSheet, css} from 'aphrodite'

import {ICONS} from './helpers/constants/icons.js'
import {baseColors} from '../styles/base/colors.js'
import SpacingInset from './helpers/spacing/SpacingInset.jsx'
import SpacingStack from './helpers/spacing/SpacingStack.jsx'
import IconButton from './IconButton.jsx'

class SetupContainer extends React.Component {
  constructor(props) {
    super(props)
    this.handleIconButtonClick = this.handleIconButtonClick.bind(this)
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

  constructIconButtons(steps) {
    let iconButtons = []
    for (var i = 0; i < steps.length; i++) {
      let currentStep = steps[i]
      iconButtons.push(
        <IconButton
          icon={currentStep.icon}
          onClick={this.handleIconButtonClick}
          key={i}
          identifier={currentStep.value}
          active={this.state.activeOption === currentStep.value}
        >
          {currentStep.text}
        </IconButton>
      )
    }

    return iconButtons
  }

  render() {
    return(
      <div className={css(styles.containerStyles)}>
        <SpacingInset size='l'>
          <SpacingStack size='xl'>
            <span>This will later be some explanation</span>
          </SpacingStack>
          <div className={css(styles.buttonWrapperStyles)}>
            {this.constructIconButtons(this.props.steps)}
          </div>
        </SpacingInset>
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

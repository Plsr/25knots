import React from 'react'

import Intro from './Intro.jsx'
import Progress from './shared/Progress.jsx'
import IntroductionHero from './IntroductionHero.jsx'
import SpacingInset from './helpers/spacing/SpacingInset.jsx'
import NavigationButton from './NavigationButton.jsx'
import SetupProgress from './SetupProgress.jsx'
import SetupSummary from './SetupSummary.jsx'
import NavigationBackground from './shared/NavigationBackground.jsx'
import {AppContainer} from '../containers/AppContainer.js'

import {setupOptions} from './helpers/constants/setupOptions.js' // Remove after setupSteps was moved to redux container

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.renderSetupStep = this.renderSetupStep.bind(this)
  }

  renderSetupStep() {
    if(this.props.setupFinished) {
      return(
        <SetupSummary
          setupOptions={setupOptions}
          scopes={this.props.scopes}
          resetSetup={this.props.resetSetup}
        />
      )
    } else {
      return(
        <SetupProgress
          scopes={this.props.scopes}
          setupStep={this.props.setupStep}
          setupSteps={'2'}
          setupOptions={setupOptions}
          setScope={this.props.setScope}
          setSetupToFinished={this.props.setSetupToFinished}
          previousSetupStep={this.props.previousSetupStep}
        />
      )
    }
  }

  render() {
    return (
      <div>
        <Progress />
        <SpacingInset size='l'>
          <IntroductionHero />
          {this.renderSetupStep()}
        </SpacingInset>
        <NavigationBackground>
          <NavigationButton to='/typography' inactive={!this.props.setupFinished}>
            Next Section
          </NavigationButton>
        </NavigationBackground>
      </div>
    )
  }
}

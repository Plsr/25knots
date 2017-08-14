import React from 'react'

import Progress from '../shared/Progress.jsx'
import IntroductionHero from './IntroductionHero.jsx'
import SpacingStack from '../helpers/spacing/SpacingStack.jsx'
import SetupProgress from './SetupProgress.jsx'
import SetupSummary from './SetupSummary.jsx'
import BottomNavigation from '../shared/BottomNavigation.jsx'

import {setupOptions} from '../../helpers/constants/setupOptions.js'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.renderSetupStep = this.renderSetupStep.bind(this)
  }

  renderSetupStep() {
    if (this.props.setupFinished) {
      return (
        <SetupSummary
          setupOptions={setupOptions}
          scopes={this.props.scopes}
          resetSetup={this.props.resetSetup}
        />
      )
    } else {
      return (
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
        <Progress currentPath={this.props.location.pathname} />
        <SpacingStack size='l' />
        <IntroductionHero />
        {this.renderSetupStep()}
        <SpacingStack size='xxl' />
        <BottomNavigation to='/typography' inactive={!this.props.setupFinished} title='Next Section' />
      </div>
    )
  }
}

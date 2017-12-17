import React from 'react'

import Progress from '../shared/Progress.jsx'
import IntroductionHero from './IntroductionHero.jsx'
import SpacingStack from '../helpers/spacing/SpacingStack.jsx'
import SetupWizard from './SetupWizard.jsx'
import SetupSummary from './SetupSummary.jsx'
import BorderedBox from '../shared/BorderedBox.jsx'
import BottomNavigation from '../shared/BottomNavigation.jsx'

import {setupOptions} from '../../helpers/constants/setupOptions.js'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.renderSetupStep = this.renderSetupStep.bind(this)
  }

  renderSetupStep() {
    if (this.props.scopesSelected) {
      return (
        <SetupSummary
          scopes={this.props.scopes}
          onButtonClick={this.props.resetScopes}
        />
      )
    }
    return (
      <SetupWizard
        setupOptions={setupOptions}
        setScopes={this.props.setScopes}
      />
    )
  }

  render() {
    return (
      <div>
        <Progress currentPath={this.props.location.pathname} />
        <SpacingStack size='l' />
        <IntroductionHero />
        <BorderedBox>
          {this.renderSetupStep()}
        </BorderedBox>
        <SpacingStack size='xxl' />
        <BottomNavigation to='/typography' inactive={!this.props.scopesSelected} title='Next Section' />
      </div>
    )
  }
}

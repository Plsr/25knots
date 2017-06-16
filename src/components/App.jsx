import React from 'react'
import { Link } from 'react-router-dom'

import Intro from './Intro.jsx'
import Progress from './shared/Progress.jsx'
import IntroductionHero from './IntroductionHero.jsx'
import SpacingInset from './helpers/spacing/SpacingInset.jsx'
import SetupContainer from './SetupContainer.jsx'

import {ICONS} from './helpers/constants/icons.js' // Remove after setupSteps was moved to redux container

export default class App extends React.Component {
  render() {

    // Will later be in redux container
    const setupSteps = [
      {
        icon: ICONS.SMARTPHONE,
        text: 'Native App',
        value: 'NATIVE_APP'
      },
      {
        icon: ICONS.WEBSITE,
        text: 'Website',
        value: 'WEBSITE'
      },
      {
        icon: ICONS.PAGE,
        text: 'Text Document',
        value: 'TEXT_DOCUMENT'
      }
    ]
    return (
      <div>
        <Progress />
        <SpacingInset size='xl'>
          <IntroductionHero />
          <Link to='/intro'>Intro</Link>
          <SetupContainer steps={setupSteps} />
        </SpacingInset>
      </div>
    )
  }
}

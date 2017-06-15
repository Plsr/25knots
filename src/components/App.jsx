import React from 'react'
import { Link } from 'react-router-dom'

import Intro from './Intro.jsx'
import Progress from './shared/Progress.jsx'
import IntroductionHero from './IntroductionHero.jsx'
import SpacingInset from './helpers/spacing/SpacingInset.jsx'
import SetupContainer from './SetupContainer.jsx'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Progress />
        <SpacingInset size='xl'>
          <IntroductionHero />
          <Link to='/intro'>Intro</Link>
        </SpacingInset>
      </div>
    )
  }
}

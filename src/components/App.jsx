import React from 'react'
import { Link } from 'react-router-dom'

import Intro from './Intro.jsx'
import Progress from './shared/Progress.jsx'
import IntroductionHero from './IntroductionHero.jsx'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Progress />
        <IntroductionHero />
        <Link to='/intro'>Intro</Link>
      </div>
    )
  }
}

import React from 'react'
import { Link } from 'react-router-dom'

import Intro from './Intro.jsx'
import Progress from './shared/Progress.jsx'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Progress />
        <h1>Hello World!</h1>
        <Link to='/intro'>Intro</Link>
      </div>
    )
  }
}

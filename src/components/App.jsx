import React from 'react'
import { Link } from 'react-router-dom'

import Intro from './Intro.jsx'
import Navigation from './shared/Navigation.jsx'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation/>
        <h1>Hello World!</h1>
        <Link to='/intro'>Intro</Link>
      </div>
    )
  }
}

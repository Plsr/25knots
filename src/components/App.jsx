import React from 'react'
import { Link } from 'react-router-dom'

import Intro from './Intro.jsx'

export default class App extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Hello World!</h1>
        <Link to='/intro'>Intro</Link>
      </div>
    )
  }
}

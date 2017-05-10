import React from 'react';
import { Link } from 'react-router-dom'

import Typography from './Typography.jsx'

export default class Intro extends React.Component {
  render() {
    return (
      <div>
        <div style={{textAlign: 'center'}}>
          <h1>Intro!</h1>
        </div>
        <Link to='/typography'>Typography</Link>
      </div>
    )
  }
}

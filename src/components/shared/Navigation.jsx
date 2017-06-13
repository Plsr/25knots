import React from 'react'
import { Link } from 'react-router-dom'

import SpacingInset from '../helpers/spacing/SpacingInset.jsx'

export default class Navigation extends React.Component {
  render() {
    return (
      <SpacingInset size='m'>
        <nav>
          <ul>
            <li>
              <Link to='/intro'>Intro</Link>
            </li>
            <li>
              <Link to='/typography'>Typography</Link>
            </li>
            <li>
              <Link to='/intro'>Grids & Layout</Link>
            </li>
            <li>
              <Link to='/intro'>Farben</Link>
            </li>
            <li>
              <Link to='/intro'>Ergebnisse</Link>
            </li>
          </ul>
        </nav>
      </SpacingInset>
    )
  }
}

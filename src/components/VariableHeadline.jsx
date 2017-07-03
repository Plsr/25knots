import React from 'react'

import {randomDummyHeadline} from './helpers/constants/dummyText'

export default class VariableHeadline extends React.Component {
  constructor(props) {
    super(props)

    this.text = randomDummyHeadline()
  }

  render() {
    const styles = {
      fontSize: this.props.fontSize + 'px',
      marginTop: this.props.spacingTop + 'px',
      marginBottom: this.props.spacingBottom + 'px',
      display: 'block'
    }

    return (
      <span style={styles}>
        {this.text}
      </span>
    )
  }
}

import React from 'react'

import {randomDummyParagraph} from '../../helpers/constants/dummyText'

export default class VariableText extends React.Component {
  constructor(props) {
    super(props)

    this.text = randomDummyParagraph()
  }

  render(){
    return (
      <p style={setStyles(this.props)}>{this.text}</p>
    )
  }
}

function setStyles(props) {
  let styles = {
    fontSize: props.fontSize + 'px',
    lineHeight: props.lineHeight + '%',
    marginBottom: props.spacingBottom + 'px'
  }

  return styles
}

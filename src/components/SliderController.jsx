import React from 'react'
import {StyleSheet, css} from 'aphrodite'

import SliderInput from './SliderInput.jsx'
import UnitValueDisplay from './UnitValueDisplay.jsx'
import ErrorContainer from './ErrorContainer.jsx'


function SliderController(props) {
  return (
    <div>
      <span className={css(styles.titleStyles)}>{props.title}</span>
      <span>{props.error}</span>
      <SliderInput
        value={props.value}
        handleChange={props.handleChange}
        storeKey={props.storeKey}
        min={props.min}
        max={props.max}
      />
      <UnitValueDisplay value={props.value} unit={props.unit} />
      {renderErrorMessages(props.errorMessages)}
    </div>
  )
}

function renderErrorMessages(messages) {
  if (!(messages === undefined)) {
    let renderedMessages = []

    for (var i = 0; i < messages.length; i++) {
      renderedMessages.push(
        <ErrorContainer key={i}>
          {messages[i]}
        </ErrorContainer>
      )
    }

    return renderedMessages
  }
}

const styles = StyleSheet.create({
  titleStyles: {
    display: 'block'
  }
})

export default SliderController

import React from 'react'
import {StyleSheet, css} from 'aphrodite'

import SliderInput from './SliderInput.jsx'
import UnitValueDisplay from './UnitValueDisplay.jsx'
import Callout from './Callout.jsx'
import SpacingStack from '../helpers/spacing/SpacingStack.jsx'


function SliderController(props) {
  return (
    <div>
      <span className={css(styles.titleStyles)}>{props.title}</span>
      <SpacingStack size={'s'} />
      <SliderInput
        value={props.value}
        handleChange={props.handleChange}
        storeKey={props.storeKey}
        min={props.min}
        max={props.max}
      />
      <SpacingStack size={'xs'} />
      <UnitValueDisplay value={props.value} unit={props.unit} />
      <SpacingStack size={'m'} />
      {renderErrorMessages(props.errorMessages)}
    </div>
  )
}

function renderErrorMessages(messages) {
  if (!(messages === undefined)) {
    let renderedMessages = []

    for (var i = 0; i < messages.length; i++) {
      renderedMessages.push(
        <Callout key={i} variant='warning'>
          {messages[i]}
        </Callout>
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

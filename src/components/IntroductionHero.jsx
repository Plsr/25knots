import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import Headline1 from './shared/Headline1.jsx'
import SpacingStack from './helpers/spacing/SpacingStack.jsx'

function IntroductionHero() {
  return (
    <SpacingStack size='xxl'>
      <div className={css(styles.ContainerStyles)}>
        <Headline1 content='25knots' />
        <p>Some explanation about what exectly is going on in this view and what the user should do.
    I guess, this could also be two or more lines.</p>
      </div>
    </SpacingStack>
  )
}

const styles = StyleSheet.create({
  ContainerStyles: {
    textAlign: 'center'
  }
})

export default IntroductionHero

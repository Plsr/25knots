import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import Headline1 from './shared/Headline1.jsx'
import SpacingStack from './helpers/spacing/SpacingStack.jsx'

function IntroductionHero() {
  return (
    <SpacingStack size='xxl'>
      <div className={css(styles.ContainerStyles)}>
        <Headline1 content='25knots' />
        <p>25knots can help you defining some design basics for your project. At first. please tell us what you are going to build today.</p>
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

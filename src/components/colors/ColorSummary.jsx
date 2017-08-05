import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import ColorDisplay from './ColorDisplay.jsx'
import SecondaryButton from '../shared/SecondaryButton.jsx'
import Headline1 from '../shared/Headline1.jsx'
import BorderedBox from '../shared/BorderedBox.jsx'
import SpacingInset from '../helpers/spacing/SpacingInset.jsx'
import SpacingStack from '../helpers/spacing/SpacingStack.jsx'

const ColorSummary = ({baseColors, accentColors, black, white, onBackButtonClick}) => {

  const constructAccentColors = (accentColors) => {
    let accentColorDisplays = []

    for (var i = 0; i < accentColors.length; i++) {
      accentColorDisplays.push(
        <ColorDisplay
          hexVal={accentColors[i]}
        />
      )
    }

    return accentColorDisplays
  }

  const displayBaseColors = (baseColors) => {
    let baseColorDisplays = []

    for (var i = 0; i < baseColors.length; i++) {
      baseColorDisplays.push(
        <ColorDisplay hexVal={baseColors[i]} />
      )
    }

    return baseColorDisplays
  }

  return (
    <div>
      <SpacingStack size='l' />
      <div className={css(styles.HeadlineWrapper)}>
        <Headline1 content='Your Color Scheme' />
      </div>
      <BorderedBox>
        <SpacingInset size='m'>
          <p>This is you finished color scheme. Black and White have been added for you.</p>
          <p>If you like it, go to the next step with the red button. Otherwise, you can go back and change it up!</p>
          <SpacingStack size='l' />
          <div className={css(styles.CenterContent)}>
            {displayBaseColors(baseColors)}
            {constructAccentColors(accentColors)}
            <ColorDisplay
              hexVal={black}
            />
            <ColorDisplay
              hexVal={white}
            />
          </div>
        </SpacingInset>
        <SpacingStack size='l' />
        <SpacingInset size='m' >
          <SecondaryButton
            onClick={onBackButtonClick}
            variant='outline'
          >
            Back
          </SecondaryButton>
        </SpacingInset>
      </BorderedBox>
      <SpacingStack size='l' />
    </div>
  )
}

const styles = StyleSheet.create({
  HeadlineWrapper: {
    textAlign: 'center'
  },
  CenterContent: {
    display: 'flex',
    justifyContent: 'space-around'
  }
})

export default ColorSummary

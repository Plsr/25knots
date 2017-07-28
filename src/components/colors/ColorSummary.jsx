import React from 'react'

import ColorDisplay from './ColorDisplay.jsx'
import SecondaryButton from '../shared/SecondaryButton.jsx'

const ColorSummary = ({baseColor, accentColors, black, white, onBackButtonClick}) => {
  return (
    <div>
      <ColorDisplay
        hexVal={baseColor}
      />
      {constructAccentColors(accentColors)}
      <ColorDisplay
        hexVal={black}
      />
      <ColorDisplay
        hexVal={white}
      />
      <SecondaryButton
        onClick={onBackButtonClick}
        variant='outline'
      >
        Back
      </SecondaryButton>
    </div>
  )
}

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

export default ColorSummary

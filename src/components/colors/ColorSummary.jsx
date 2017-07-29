import React from 'react'

import ColorDisplay from './ColorDisplay.jsx'
import SecondaryButton from '../shared/SecondaryButton.jsx'

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
      {displayBaseColors(baseColors)}
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

export default ColorSummary

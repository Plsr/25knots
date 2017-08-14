import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import { calculateComplementary, calculateMonochromaticColors, calculateTriadContrast } from '../helpers/functions/colorCalculations.js'

import ColorDisplay from './ColorDisplay.jsx'
import SecondaryButton from '../shared/SecondaryButton.jsx'
import Headline1 from '../shared/Headline1.jsx'
import BorderedBox from '../shared/BorderedBox.jsx'
import SpacingInset from '../helpers/spacing/SpacingInset.jsx'
import SpacingStack from '../helpers/spacing/SpacingStack.jsx'
import SpacingInline from '../helpers/spacing/SpacingInline.jsx'
import PlainButton from '../PlainButton.jsx'

const CONTRAST_OPTIONS = {
  complementary: 'Complementary',
  triad: 'Triad',
  monochromatic: 'Monochromatic'
}

class GeneralAccentColorController extends React.Component {
  constructor(props) {
    super(props)

    let complementaryColors = [ calculateComplementary(this.props.baseColor) ]
    let triadColors = calculateTriadContrast(this.props.baseColor)
    let monochromaticColors = calculateMonochromaticColors(3, this.props.baseColor)

    this.accentColors = {}
    this.accentColors[CONTRAST_OPTIONS.complementary] = complementaryColors
    this.accentColors[CONTRAST_OPTIONS.triad] = triadColors
    this.accentColors[CONTRAST_OPTIONS.monochromatic] = monochromaticColors

    this.state = {
      contrastToShow: CONTRAST_OPTIONS.complementary
    }

    this.updateContrastToShow = this.updateContrastToShow.bind(this)
  }

  updateContrastToShow(value) {
    this.setState({
      contrastToShow: value
    })
  }

  getContrastStrings() {
    let contrastStrings = []

    for (var contrast in CONTRAST_OPTIONS) {
      if (CONTRAST_OPTIONS.hasOwnProperty(contrast)) {
        contrastStrings.push(CONTRAST_OPTIONS[contrast])
      }
    }

    return contrastStrings
  }

  displayColors() {
    let colorDisplays = []
    let colors = this.accentColors[this.state.contrastToShow]

    console.log(colors); // eslint-disable-line

    for (var i = 0; i < colors.length; i++) {
      colorDisplays.push(
        <ColorDisplay
          hexVal={colors[i]}
        />
      )
    }

    console.log(colorDisplays); // eslint-disable-line
    return colorDisplays
  }

  buildContrastOptions(options) {
    let displayOptions = []

    for (var i = 0; i < options.length; i++) {
      displayOptions.push(
        <PlainButton
          onClick={this.updateContrastToShow}
          identifier={options[i]}
          active={this.state.contrastToShow === options[i]}
        >
          {options[i]}
        </PlainButton>
      )

      if (!(i === options.length)) {
        displayOptions.push(
          <SpacingInline size='m' />
        )
      }
    }

    return displayOptions
  }


  render() {
    const styles = StyleSheet.create({
      HeadlineWrapper: {
        textAlign: 'center'
      },
      ColorDisplayStyles: {
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        backgroundColor: this.props.baseColor
      },
      ColorFloatStyles: {
        display: 'flex',
        position: 'relative',
        zIndex: '1',
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.16)'
      },
      SpaceEven: {
        display: 'flex',
        justifyContent: 'space-between'
      },
      CenterContent: {
        display: 'flex',
        justifyContent: 'space-around'
      }
    })

    return (
      <div>
        <SpacingStack size='l' />
        <div className={css(styles.HeadlineWrapper)}>
          <Headline1 content='Choose your Accent Color' />
        </div>
        <BorderedBox>
          <SpacingInset size='m'>
            <p>Pick a contrast type</p>
            <SpacingStack size='m' />
            {this.buildContrastOptions(this.getContrastStrings())}
          </SpacingInset>
          <SpacingStack size='m' />
          <div className={css(styles.ColorDisplayStyles)}>
            <SpacingInset size='l' >
              <div className={css(styles.ColorFloatStyles)}>
                <SpacingInset size='l' >
                  <p>Your Accent Color(s)</p>
                  <p style={{fontSize: '14px', fontStyle: 'italic'}}>
                    Your Base Color is placed in the background for you to check
                  </p>
                  <SpacingStack size='m' />
                  <div className={css(styles.CenterContent)}>
                    {this.displayColors()}
                  </div>
                </SpacingInset>
              </div>
            </SpacingInset>
          </div>
          <SpacingInset size='m' >
            <div className={css(styles.SpaceEven)}>
              <SecondaryButton
                onClick={this.props.onBackButtonClick}
                variant={'outline'}
              >
                Back
              </SecondaryButton>
              <SecondaryButton
                onClick={() => {
                  this.props.onNextButtonClick(this.state.contrastToShow, this.accentColors[this.state.contrastToShow])
                }}
              >
                Next
              </SecondaryButton>
            </div>
          </SpacingInset>
        </BorderedBox>
      </div>
    )
  }
}

export default GeneralAccentColorController

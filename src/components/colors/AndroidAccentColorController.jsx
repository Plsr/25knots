import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import ColorDisplay from './ColorDisplay.jsx'
import SecondaryButton from '../shared/SecondaryButton.jsx'
import ColorSelector from './ColorSelector.jsx'
import Headline1 from '../shared/Headline1.jsx'
import BorderedBox from '../shared/BorderedBox.jsx'
import SpacingInset from '../helpers/spacing/SpacingInset.jsx'
import SpacingStack from '../helpers/spacing/SpacingStack.jsx'
import SpacingInline from '../helpers/spacing/SpacingInline.jsx'
import PlainButton from '../PlainButton.jsx'
import { getMaterialColorObjectForShade } from '../helpers/functions/colorCalculations.js'

class AndroidAccentColorController extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      accentShadeToShow: 'a400'
    }

    this.updateAccentShadeToShow = this.updateAccentShadeToShow.bind(this)
    this.handleColorSelectorClick = this.handleColorSelectorClick.bind(this)
  }


  constructAccentColors() {
    let colorSet = this.props.colorSet
    let colors = []

    for (var i = 0; i < colorSet.length; i++) {
      let currColorObj = colorSet[i]
      if (currColorObj[500] !== this.props.baseColor) {
        if (currColorObj[this.state.accentShadeToShow] !== undefined) {
          colors.push(currColorObj[this.state.accentShadeToShow])
        }
      }
    }
    return colors
  }

  getColorObjectForShade(shade) {
    let colorSet = this.props.colorSet

    for (var i = 0; i < colorSet.length; i++) {
      let currColorObj = colorSet[i]
      for (var currShade in currColorObj) {
        if (currColorObj.hasOwnProperty(currShade)) {
          if (currColorObj[currShade] == shade) {
            return currColorObj
          }
        }
      }
      if (currColorObj[500] == shade) {
        return currColorObj
      }
    }
  }

  constructAccentColorOptions() {
    if (this.props.accentColor === undefined) {
      return
    }

    let accentColorObject = getMaterialColorObjectForShade(this.props.accentColor)

    return (
      {
        a100: {
          name: 'a100',
          color: accentColorObject.a100
        },
        a200: {
          name: 'a200',
          color: accentColorObject.a200
        },
        a400: {
          name: 'a400',
          color: accentColorObject.a400
        },
        a700: {
          name: 'a700',
          color: accentColorObject.a700
        }
      }
    )
  }

  updateAccentShadeToShow(value) {
    this.setState({
      accentShadeToShow: value
    })
  }

  handleColorSelectorClick(color) {
    this.setState({
      selectedColor: color
    })
  }

  displayBaseColors(baseColors) {
    let baseColorDisplays = []

    for (var i = 0; i < baseColors.length; i++) {
      baseColorDisplays.push(
        <ColorDisplay hexVal={baseColors[i]} />
      )
    }

    return baseColorDisplays
  }

  buildContrastOptions(options) {
    let displayOptions = []

    for (var i = 0; i < options.length; i++) {
      displayOptions.push(
        <PlainButton
          onClick={this.updateAccentShadeToShow}
          identifier={options[i]}
          active={this.state.accentShadeToShow === options[i]}
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
        backgroundColor: this.props.baseColors[0],
        ':before' :{
          content: "' '", // eslint-disable-line
          left: 0,
          height: '100%',
          width: '33%',
          position:'absolute',
          backgroundColor: this.props.baseColors[1] === undefined ? 'transparent' : this.props.baseColors[1]
        },
        ':after' :{
          content: "' '", // eslint-disable-line
          right: 0,
          height: '100%',
          width: '33%',
          position:'absolute',
          backgroundColor: this.props.baseColors[2] === undefined ? 'transparent' : this.props.baseColors[2]
        }
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
      }
    })

    let contrastShades = ['a100', 'a200', 'a400', 'a700']

    return (
      <div>
        <SpacingStack size='l' />
        <div className={css(styles.HeadlineWrapper)}>
          <Headline1 content='Choose your Accent Color' />
        </div>
        <BorderedBox>
          <SpacingInset size='m'>
            <p>Pick a contrast shade</p>
            <SpacingStack size='m' />
            {this.buildContrastOptions(contrastShades)}
          </SpacingInset>
          <SpacingInset size='m'>
            <p>Pick a contrast color</p>
            <SpacingStack size='m' />
            <ColorSelector
              options={this.constructAccentColors()}
              active={this.state.selectedColor}
              onClick={this.handleColorSelectorClick}
            />
          </SpacingInset>
          <SpacingStack size='m' />
          <div className={css(styles.ColorDisplayStyles)}>
            <SpacingInset size='l' >
              <div className={css(styles.ColorFloatStyles)}>
                <SpacingInset size='l' >
                  <p>Your Accent Color</p>
                  <p style={{fontSize: '14px', fontStyle: 'italic'}}>
                    Your Base Color shades are placed in the background for you to check
                  </p>
                  <SpacingStack size='m' />
                  <ColorDisplay hexVal={this.state.selectedColor} />
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
                inactive={this.state.selectedColor === undefined}
                onClick={() => {
                  this.props.onNextButtonClick(this.state.accentShadeToShow, [ this.state.selectedColor])
                }}
              >
                Next
              </SecondaryButton>
            </div>
          </SpacingInset>
        </BorderedBox>
        <SpacingStack size='l' />
      </div>
    )
  }
}

export default AndroidAccentColorController

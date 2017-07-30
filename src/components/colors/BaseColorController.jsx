import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import DropdownController from '../DropdownController.jsx'
import ColorDisplay from './ColorDisplay.jsx'
import ColorSelector from './ColorSelector.jsx'
import SecondaryButton from '../shared/SecondaryButton.jsx'
import Headline1 from '../shared/Headline1.jsx'
import BorderedBox from '../shared/BorderedBox.jsx'
import SpacingInset from '../helpers/spacing/SpacingInset.jsx'
import SpacingStack from '../helpers/spacing/SpacingStack.jsx'
import { ChromePicker } from 'react-color'
import {SCOPES} from '../helpers/constants/scopes.js'
import { getMaterialColorObjectForShade } from '../helpers/functions/colorCalculations.js'

class BaseColorController extends React.Component {
  constructor(props) {
    super(props)

    this.handleColorPickerChange = this.handleColorPickerChange.bind(this)
    this.handleDropdownChange = this.handleDropdownChange.bind(this)
    this.handleColorSelectorChange = this.handleColorSelectorChange.bind(this)
    this.handleNextButtonClick = this.handleNextButtonClick.bind(this)

    this.state = {
      baseColor: this.props.colorSet[0].color
    }
  }

  componentWillMount() {
    if (this.props.scope === SCOPES.ANDROID) {
      let colorObject = getMaterialColorObjectForShade(this.state.baseColor)
      this.setState({
        shades: [
          colorObject[300],
          colorObject[700]
        ]
      })
    }
  }

  handleColorPickerChange(value) {
    this.setState({
      baseColor: value.hex
    })
  }

  handleDropdownChange(key, value) {
    if (this.props.scope === SCOPES.ANDROID) {
      for (var i = 0; i < this.props.colorSet.length; i++) {
        let currColor = this.props.colorSet[i]
        if (currColor.adjective === value) {
          let colorObject = getMaterialColorObjectForShade(currColor.color)
          this.setState({
            baseColor: currColor.color,
            shades: [
              colorObject[300],
              colorObject[700]
            ]
          })
        }
      }
    } else {
      for (var j = 0; j < this.props.colorSet.length; j++) {
        let currColor = this.props.colorSet[j]
        if (currColor.adjective === value) {
          this.setState({
            baseColor: currColor.color
          })
        }
      }
    }

  }

  handleColorSelectorChange(value) {
    if (this.props.scope === SCOPES.ANDROID) {
      let colorObject = getMaterialColorObjectForShade(value)
      this.setState({
        baseColor: value,
        shades: [
          colorObject[300],
          colorObject[700]
        ]
      })
    } else {
      this.setState({
        baseColor: value
      })
    }
  }

  handleNextButtonClick() {
    let colorsArray = [ this.state.baseColor ]

    if (this.state.shades != undefined) {
      colorsArray = colorsArray.concat(this.state.shades)
    }
    this.props.onButtonClick(colorsArray)
  }


  // Display Colorpicker for the currently set scope
  displayColorpickerForScope(scope) {
    if (scope == SCOPES.ANDROID || scope == SCOPES.IOS) {
      return (
        <ColorSelector
          options={this.constructDatasetForKey('color')}
          active={this.state.baseColor}
          onClick={this.handleColorSelectorChange}
          displaySize='80px'
        />
      )
    } else {
      return (
        <ChromePicker
          color={this.state.baseColor}
          onChange={this.handleColorPickerChange}
        />
      )
    }
  }

  /**
   * Constructs a data set from the current colorSet for
   * a given key.
   * A color object as defined in /helpers/constants/colors.js
   * must always have an adjective and a color attribute. It can
   * also have an optional displayName.
   *
   */
  constructDatasetForKey(key) {
    let colorSet = this.props.colorSet
    let colors = []

    for (var i = 0; i < colorSet.length; i++) {
      let currColorObj = colorSet[i]
      colors.push(currColorObj[key])
    }
    return colors
  }

  displayColorsForScope(scope) {
    let colorDisplays = []

    colorDisplays.push(
      <ColorDisplay hexVal={this.state.baseColor} />
    )

    if (scope === SCOPES.ANDROID && this.state.shades != undefined) {
      for (var i = 0; i < this.state.shades.length; i++) {
        colorDisplays.push(
          <ColorDisplay hexVal={this.state.shades[i]} />
        )
      }
    }

    return colorDisplays
  }

  getHeadlineStringForScope(scope) {
    return scope === SCOPES.ANDROID ? 'Choose your Base Color' : 'Choose your Base Colors'
  }

  getColorDisplayContentForScope(scope) {
    if (scope === SCOPES.ANDROID) {
      return (
        <div>
          <p>Your Colors</p>
          <p style={{fontSize: '14px', fontStyle: 'italic'}}>
            Two matching shades from the Material Design Guidelines were selected for you
          </p>
        </div>
      )
    } else {
      return (
        <p>Your Color</p>
      )
    }
  }

  render() {
    const styles = StyleSheet.create({
      HeadlineWrapper: {
        textAlign: 'center'
      },
      FlexParentStyles: {
        display: 'flex'
      },
      FlexChildrenStyles: {
        flex: '1 1 0'
      },
      ColorDisplayStyles: {
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        backgroundColor: this.state.baseColor,
        ':before' :{
          content: "' '", // eslint-disable-line
          left: 0,
          height: '100%',
          width: '33%',
          position:'absolute',
          backgroundColor: this.state.shades === undefined ? 'transparent' : this.state.shades[0]
        },
        ':after' :{
          content: "' '", // eslint-disable-line
          right: 0,
          height: '100%',
          width: '33%',
          position:'absolute',
          backgroundColor: this.state.shades === undefined ? 'transparent' : this.state.shades[1]
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
      AlignContentEnd: {
        display: 'flex',
        justifyContent: 'flex-end'
      }
    })

    console.log(this.state.baseColor); //eslint-disable-line
    return (
      <div>
        <SpacingStack size='l' />
        <div className={css(styles.HeadlineWrapper)}>
          <Headline1 content={this.getHeadlineStringForScope(this.props.scope)} />
        </div>

        <BorderedBox>
          <div className={css(styles.FlexParentStyles)} >
            <div className={css(styles.FlexChildrenStyles)} >
              <SpacingInset size='m' >
                <p>By an adjective that represents your project</p>
                <SpacingStack size='m' />
                <DropdownController
                  options={this.constructDatasetForKey('adjective')}
                  storeKey='baseColor'
                  onChange={this.handleDropdownChange}
                />
              </SpacingInset>
            </div>
            <div className={css(styles.FlexChildrenStyles)} >
              <SpacingInset size='m' >
                <p>Freely select a color</p>
                <SpacingStack size='m' />
                {this.displayColorpickerForScope(this.props.scope)}
              </SpacingInset>
            </div>
          </div>
          <SpacingStack size='m' />
          <div className={css(styles.ColorDisplayStyles)}>
            <SpacingInset size='l' >
              <div className={css(styles.ColorFloatStyles)}>
                <SpacingInset size='l' >
                  {this.getColorDisplayContentForScope(this.props.scope)}
                  <SpacingStack size='m' />
                  {this.displayColorsForScope(this.props.scope)}
                </SpacingInset>
              </div>
            </SpacingInset>
          </div>
          <SpacingInset size='m' >
            <div className={css(styles.AlignContentEnd)}>
              <SecondaryButton onClick={this.handleNextButtonClick}>
                Next Step
              </SecondaryButton>
            </div>
          </SpacingInset>
        </BorderedBox>
        <SpacingStack size='l' />
      </div>
    )
  }
}




export default BaseColorController

import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import {appColors} from '../../styles/base/colors.js'
import SpacingStack from '../helpers/spacing/SpacingStack.jsx'
import SpacingInset from '../helpers/spacing/SpacingInset.jsx'
import SpacingInline from '../helpers/spacing/SpacingInline.jsx'
import ColorDisplay from '../colors/ColorDisplay.jsx'
import Icon from '../shared/Icon.jsx'
import Headline1 from '../shared/Headline1.jsx'
import Progress from '../shared/Progress.jsx'
import BorderedBox from '../shared/BorderedBox.jsx'
import SecondaryButton from '../shared/SecondaryButton.jsx'
import { generatePDF } from '../../helpers/functions/pdfGenerator.js'
import TableDisplay from './TableDisplay.jsx'

class Summary extends React.Component {

  buildScopeSummary(scopes) {
    let summaryElemets = []

    for (var i = 0; i < scopes.length; i++) {
      let currentScope = scopes[i]
      summaryElemets.push(
        <div className={css(styles.singleScopeStyles)}>
          <SpacingInline size={'l'} >
            ➜
          </SpacingInline>
          <SpacingInline size={'l'} >
            <Icon icon={currentScope.icon} color={appColors.secondary} size={42} />
          </SpacingInline>
          <span>{currentScope.name}</span>
        </div>
      )
    }

    return summaryElemets
  }

  constructAccentColors(accentColors) {
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

  displayBaseColors(baseColors) {
    let baseColorDisplays = []

    for (var i = 0; i < baseColors.length; i++) {
      baseColorDisplays.push(
        <ColorDisplay hexVal={baseColors[i]} />
      )
    }

    return baseColorDisplays
  }

  /**
   * Builds a string with spaces from a camelCase key
   * See https://stackoverflow.com/a/4149393/4181679
   */
  stringifyKey(key) {
    return key
      // insert a space before all caps
      .replace(/([A-Z])/g, ' $1')
      // uppercase the first character
      .replace(/^./, function(str){
        return str.toUpperCase()
      })
  }

  constructArrayForTable(object) {
    let valuesArray = []

    for (var key in object) {
      if (object.hasOwnProperty(key)) {
        valuesArray.push(
          {
            name: this.stringifyKey(key),
            value: object[key]
          }
        )
      }
    }
    console.log(valuesArray); //eslint-disable-line

    return valuesArray
  }

  render() {
    return (
      <div>
        <Progress currentPath={this.props.location.pathname} />
        <SpacingStack size='l' />
        <div className={css(styles.ContainerStyles)}>
          <Headline1 content='Your Results' />
          <p>Following, you can find a summary of what you worked out. <br />
You can also save this as a pdf for later use.</p>
          <SpacingStack size='l' />
          <SecondaryButton
            onClick={() => {
              generatePDF(this.props.typography, this.props.colors)
            }}
            variant='outline'
          >
            Save as PDF
          </SecondaryButton>
          <SpacingStack size='l' />
          <p>Want to help and improve this Tool? <br/>Help is always welcome in the <a href="https://github.com/Plsr/25knots">Github Repository</a></p>
          <SpacingStack size='l' />
        </div>
        <SpacingStack size='l' />
        <BorderedBox>
          <SpacingInset size='m'>
            <p>You are building the following:</p>
            <SpacingStack size='m' />
            <div className={css(styles.flexRow)}>
              {this.buildScopeSummary(this.props.setup.scopes)}
            </div>
          </SpacingInset>
        </BorderedBox>
        <SpacingStack size='l' />
        <BorderedBox>
          <SpacingInset size='m'>
            <p>Typography:</p>
            <SpacingStack size='m' />
            <div className={css(styles.flexRow)}>
              <TableDisplay
                title='General'
                content={this.constructArrayForTable(this.props.typography.general)}
              />
              <SpacingInline size='xl' />
              <div>
                <h4 className={css(styles.headlineStyles)}>Colors</h4>
                <table>
                  <tr>
                    <td>Background Color:</td>
                    <td>
                      <ColorDisplay
                        hexVal={this.props.typography.colors.background}
                        size={70}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Text Color:</td>
                    <td>
                      <ColorDisplay
                        hexVal={this.props.typography.colors.foreground}
                        size={70}
                      />
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <SpacingStack size='l' />
            <div className={css(styles.flexRow)}>
              <TableDisplay
                title='Headline1'
                content={this.constructArrayForTable(this.props.typography.headline1)}
              />
              <SpacingInline size='xl' />
              <TableDisplay
                title='Headline2'
                content={this.constructArrayForTable(this.props.typography.headline2)}
              />
              <SpacingInline size='xl' />
              <TableDisplay
                title='Headline3'
                content={this.constructArrayForTable(this.props.typography.headline3)}
              />
            </div>
          </SpacingInset>
        </BorderedBox>
        <SpacingStack size='l' />
        <BorderedBox>
          <SpacingInset size='m'>
            <p>Colors:</p>
            <SpacingStack size='m' />
            <div className={css(styles.centerContent)}>
              {this.displayBaseColors(this.props.colors.baseColors)}
              {this.constructAccentColors(this.props.colors.contrast.colors)}
              <ColorDisplay
                hexVal={'#333333'}
              />
              <ColorDisplay
                hexVal={'#ffffff'}
              />
            </div>
          </SpacingInset>
        </BorderedBox>
        <SpacingStack size='l' />
      </div>
    )
  }
}

const styles = StyleSheet.create({
  ContainerStyles: {
    textAlign: 'center'
  },
  singleScopeStyles: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '64px',
    color: appColors.secondary,
    ':last-child': {
      marginRight: 0
    }
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row'
  },
  headlineStyles: {
    color: appColors.secondary
  },
  centerContent: {
    display: 'flex',
    justifyContent: 'space-around'
  }
})

export default Summary

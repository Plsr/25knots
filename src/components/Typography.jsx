import React from 'react'
import {StyleSheet, css} from 'aphrodite'

import TabNavigation from './TabNavigation.jsx'
import TabTitle from './TabTitle.jsx'
import TabContent from './TabContent.jsx'
import VariableHeadline from './VariableHeadline.jsx'
import VariableText from './VariableText.jsx'
import SpacingInset from './helpers/spacing/SpacingInset.jsx'
import GeneralControls from './GeneralControls.jsx'
import HeadlineControls from './HeadlineControls.jsx'
import ColorControls from './ColorControls.jsx'
import TextWidthCalculator from './TextWidthCalculator.jsx'

import calculateApplicationErrors from './helpers/errors'

export default class Typography extends React.Component {
  constructor(props) {
    super(props)

    this.bodyWidthConstraints = {
      min: 200,
      max: 400
    }
    this.handleChange = this.handleChange.bind(this)
    this.updateBodyWidthConstraints = this.updateBodyWidthConstraints.bind(this)
  }

  handleChange(key, value) {
    this.props.setValueForKey(key, value)
  }

  updateBodyWidthConstraints(min, max) {
    this.bodyWidthConstraints.min = min
    this.bodyWidthConstraints.max = max
  }

  calculateErrors() {
    return calculateApplicationErrors(this.props, this.bodyWidthConstraints)
  }

  render() {
    const errors = this.calculateErrors()
    const textWrapperStyles = {
      margin: '0 auto',
      width: this.props.general.textWidth,
      backgroundColor: this.props.colors.background,
      color: this.props.colors.foreground,
      fontFamily: this.props.general.fontFamily
    }

    return (
      <div style={{textAlign: 'center'}}>
        <h1>Typo!</h1>
        <div className={css(styles.wrapperStyles)}>
          <div className={css(styles.textStyles)}>
            <SpacingInset size={'m'}>
              <div style={textWrapperStyles}>
                <VariableHeadline
                  fontSize={this.props.headline1.size}
                  spacingTop={this.props.headline1.spacingTop}
                  spacingBottom={this.props.headline1.spacingBottom}
                />

                <VariableText
                  fontSize={this.props.general.fontSize}
                  lineHeight={this.props.general.lineHeight}
                  spacingBottom={0}
                />

                <VariableHeadline
                  fontSize={this.props.headline2.size}
                  spacingTop={this.props.headline2.spacingTop}
                  spacingBottom={this.props.headline2.spacingBottom}
                />

                <VariableText
                  fontSize={this.props.general.fontSize}
                  lineHeight={this.props.general.lineHeight}
                  spacingBottom={0}
                />

                <VariableHeadline
                  fontSize={this.props.headline3.size}
                  spacingTop={this.props.headline3.spacingTop}
                  spacingBottom={this.props.headline3.spacingBottom}
                />

                <VariableText
                  fontSize={this.props.general.fontSize}
                  lineHeight={this.props.general.lineHeight}
                  spacingBottom={this.props.general.textSpacing}
                />
                <VariableText
                  fontSize={this.props.general.fontSize}
                  lineHeight={this.props.general.lineHeight}
                  spacingBottom={0}
                />
                <TextWidthCalculator
                  fontSize={this.props.general.fontSize}
                  fontFamily={this.props.general.fontFamily}
                  onChange={this.updateBodyWidthConstraints}
                />
              </div>
            </SpacingInset>
          </div>

          <div>
            <TabNavigation>
              <TabTitle title={'General'} />
              <TabTitle title={'Headline 1'} />
              <TabTitle title={'Headline 2'} />
              <TabTitle title={'Headline 3'} />
              <TabTitle title={'Colors'} />

              <TabContent>
                <GeneralControls
                  onChange={this.props.setValueInArea}
                  area={'general'}
                  {...this.props.general}
                  componentErrors={errors.general}
                />
              </TabContent>

              <TabContent>
                <HeadlineControls
                  onChange={this.props.setValueInArea}
                  area={'headline1'}
                  title={'Headline 1'}
                  componentErrors={errors.headline1}
                  {...this.props.headline1}
                />
              </TabContent>

              <TabContent>
                <HeadlineControls
                  onChange={this.props.setValueInArea}
                  area={'headline2'}
                  title={'Headline 2'}
                  componentErrors={errors.headline2}
                  {...this.props.headline2}
                />
              </TabContent>

              <TabContent>
                <HeadlineControls
                  onChange={this.props.setValueInArea}
                  area={'headline3'}
                  title={'Headline 3'}
                  componentErrors={errors.headline3}
                  {...this.props.headline3}
                />
              </TabContent>

              <TabContent>
                <ColorControls
                  onChange={this.props.setValueInArea}
                  area={'colors'}
                  componentErrors={errors.colors}
                  {...this.props.colors}
                />
              </TabContent>
            </TabNavigation>
          </div>
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  wrapperStyles:{
    display: 'flex',
    flexDirection: 'row'
  },
  textStyles: {
    display: 'flex',
    flexDirection: 'column',
    width: '75%'
  }
})

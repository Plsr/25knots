import React from 'react'
import {StyleSheet, css} from 'aphrodite'

import {ICONS} from './helpers/constants/icons.js'

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
import Progress from './shared/Progress.jsx'
import BottomNavigation from './shared/BottomNavigation.jsx'

import calculateApplicationErrors from './helpers/errors'

export default class Typography extends React.Component {
  constructor(props) {
    super(props)

    // TODO: Set reasonable base constraints
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
    let errors = calculateApplicationErrors(this.props, this.bodyWidthConstraints)
    console.log(errors) // eslint-disable-line no-console

    return errors
  }

  render() {
    const errors = this.calculateErrors()
    const styles = StyleSheet.create({
      wrapperStyles:{
        display: 'flex',
        backgroundColor: this.props.colors.background,
        flexDirection: 'row'
      },
      textStyles: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        width: '75%'
      },
      textWrapperStyles: {
        width: this.props.general.textWidth + 'px',
        color: this.props.colors.foreground,
        fontFamily: this.props.general.fontFamily
      }
    })

    return (
      <div>
        <Progress />
        <div style={{textAlign: 'center'}}>
          <div className={css(styles.wrapperStyles)}>
            <div className={css(styles.textStyles)}>
              <SpacingInset size={'m'}>
                <div className={css(styles.textWrapperStyles)}>
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
                <TabTitle title={'General'} icon={ICONS.TEXT} errorsPresent={errors.general.present} />
                <TabTitle title={'Headline 1'} icon={ICONS.HEADLINE1} errorsPresent={errors.headline1.present} />
                <TabTitle title={'Headline 2'} icon={ICONS.HEADLINE2} errorsPresent={errors.headline2.present} />
                <TabTitle title={'Headline 3'} icon={ICONS.HEADLINE3} errorsPresent={errors.headline3.present} />
                <TabTitle title={'Colors'} icon={ICONS.COLOR} errorsPresent={errors.colors.present}/>

                <TabContent>
                  <GeneralControls
                    onChange={this.props.setValueInArea}
                    area={'general'}
                    {...this.props.general}
                    scopes={this.props.scopes}
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
        <BottomNavigation
          to='/colors'
          inactive={false}
          title='Next Section'
        />
      </div>
    )
  }
}

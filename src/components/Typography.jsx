import React from 'react'
import {StyleSheet, css} from 'aphrodite'

import TabNavigation from './TabNavigation.jsx'
import TabTitle from './TabTitle.jsx'
import TabContent from './TabContent.jsx'
import VariableHeadline from './VariableHeadline.jsx'
import VariableText from './VariableText.jsx'
import SpacingInset from './helpers/spacing/SpacingInset.jsx'
import SpacingStack from './helpers/spacing/SpacingStack.jsx'
import SliderController from './SliderController.jsx'
import ColorpickerController from './ColorpickerController.jsx'
import DropdownController from './DropdownController.jsx'
import {fontFamilies} from './helpers/constants/fontFamilies.js'

export default class Typography extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(key, value) {
    this.props.setValueForKey(key, value)
  }

  render() {
    const textWrapperStyles = {
      margin: '0 auto',
      width: this.props.textWidth,
      backgroundColor: this.props.backgroundColor,
      color: this.props.foregroundColor,
      fontFamily: this.props.fontFamily
    }

    return (
      <div style={{textAlign: 'center'}}>
        <h1>Typo!</h1>
        <div className={css(styles.wrapperStyles)}>
          <div className={css(styles.textStyles)}>
            <SpacingInset size={'m'}>
              <div style={textWrapperStyles}>
                <VariableHeadline
                  fontSize={this.props.headline1Size}
                  spacingTop={this.props.headline1SpacingTop}
                  spacingBottom={this.props.headline1SpacingBottom}
                />

                <VariableText
                  fontSize={this.props.fontSize}
                  lineHeight={this.props.lineHeight}
                  spacingBottom={0}
                />

                <VariableHeadline
                  fontSize={this.props.headline2Size}
                  spacingTop={this.props.headline2SpacingTop}
                  spacingBottom={this.props.headline2SpacingBottom}
                />

                <VariableText
                  fontSize={this.props.fontSize}
                  lineHeight={this.props.lineHeight}
                  spacingBottom={0}
                />

                <VariableHeadline
                  fontSize={this.props.headline3Size}
                  spacingTop={this.props.headline3SpacingTop}
                  spacingBottom={this.props.headline3SpacingBottom}
                />

                <VariableText
                  fontSize={this.props.fontSize}
                  lineHeight={this.props.lineHeight}
                  spacingBottom={this.props.textSpacing}
                />
                <VariableText
                  fontSize={this.props.fontSize}
                  lineHeight={this.props.lineHeight}
                  spacingBottom={0}
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
                <DropdownController
                  title={'Font Family'}
                  options={fontFamilies}
                  storeKey={'fontFamily'}
                  value={this.props.fontFamily}
                  onChange={this.handleChange}
                />
                <SpacingStack size={'l'} />
                <SliderController
                  title={'Text Size'}
                  value={this.props.fontSize}
                  min={8}
                  max={80}
                  unit={'px'}
                  handleChange={this.handleChange}
                  storeKey={'fontSize'}
                />
                <SpacingStack size={'l'} />
                <SliderController
                  title={'Line Height'}
                  value={this.props.lineHeight}
                  min={80}
                  max={300}
                  unit={'%'}
                  handleChange={this.handleChange}
                  storeKey={'lineHeight'}
                />
                <SpacingStack size={'l'} />
                <SliderController
                  title={'Text Width'}
                  value={this.props.textWidth}
                  min={100}
                  max={1000}
                  unit={'px'}
                  handleChange={this.handleChange}
                  storeKey={'textWidth'}
                />
                <SpacingStack size={'l'} />
                <SliderController
                  title={'Paragraph Spacing'}
                  value={this.props.textSpacing}
                  min={0}
                  max={100}
                  unit={'px'}
                  handleChange={this.handleChange}
                  storeKey={'textSpacing'}
                />
              </TabContent>

              <TabContent>
                <SliderController
                  title={'Headline 1 Size'}
                  value={this.props.headline1Size}
                  min={8}
                  max={120}
                  unit={'px'}
                  handleChange={this.handleChange}
                  storeKey={'headline1Size'}
                />
                <SpacingStack size={'l'} />
                <SliderController
                  title={'Headline 1 Spacing Top'}
                  value={this.props.headline1SpacingTop}
                  min={0}
                  max={100}
                  unit={'px'}
                  handleChange={this.handleChange}
                  storeKey={'headline1SpacingTop'}
                />
                <SpacingStack size={'l'} />
                <SliderController
                  title={'Headline 1 Spacing Bottom'}
                  value={this.props.headline1SpacingBottom}
                  min={0}
                  max={100}
                  unit={'px'}
                  handleChange={this.handleChange}
                  storeKey={'headline1SpacingBottom'}
                />
              </TabContent>

              <TabContent>
                <SliderController
                  title={'Headline 2 Size'}
                  value={this.props.headline2Size}
                  min={8}
                  max={120}
                  unit={'px'}
                  handleChange={this.handleChange}
                  storeKey={'headline2Size'}
                />
                <SpacingStack size={'l'} />
                <SliderController
                  title={'Headline 2 Spacing Top'}
                  value={this.props.headline2SpacingTop}
                  min={0}
                  max={100}
                  unit={'px'}
                  handleChange={this.handleChange}
                  storeKey={'headline2SpacingTop'}
                />
                <SpacingStack size={'l'} />
                <SliderController
                  title={'Headline 2 Spacing Bottom'}
                  value={this.props.headline2SpacingBottom}
                  min={0}
                  max={100}
                  unit={'px'}
                  handleChange={this.handleChange}
                  storeKey={'headline2SpacingBottom'}
                />
              </TabContent>

              <TabContent>
                <SliderController
                  title={'Headline 3 Size'}
                  value={this.props.headline3Size}
                  min={8}
                  max={120}
                  unit={'px'}
                  handleChange={this.handleChange}
                  storeKey={'headline3Size'}
                />
                <SpacingStack size={'l'} />
                <SliderController
                  title={'Headline 3 Spacing Top'}
                  value={this.props.headline3SpacingTop}
                  min={0}
                  max={100}
                  unit={'px'}
                  handleChange={this.handleChange}
                  storeKey={'headline3SpacingTop'}
                />
                <SpacingStack size={'l'} />
                <SliderController
                  title={'Headline 3 Spacing Bottom'}
                  value={this.props.headline3SpacingBottom}
                  min={0}
                  max={100}
                  unit={'px'}
                  handleChange={this.handleChange}
                  storeKey={'headline3SpacingBottom'}
                />
              </TabContent>

              <TabContent>
                <ColorpickerController
                  color={this.props.backgroundColor}
                  handleChange={this.handleChange}
                  storeKey={'backgroundColor'}
                  title={'Background Color'}
                />
                <SpacingStack size={'l'} />
                <ColorpickerController
                  color={this.props.foregroundColor}
                  handleChange={this.handleChange}
                  storeKey={'foregroundColor'}
                  title={'Text Color'}
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

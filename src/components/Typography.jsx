import React from 'react'
import {StyleSheet, css} from 'aphrodite'

import TabNavigation from './TabNavigation.jsx'
import TabTitle from './TabTitle.jsx'
import TabContent from './TabContent.jsx'
import VariableHeadline from './VariableHeadline.jsx'
import VariableText from './VariableText.jsx'
import SpacingInset from './helpers/spacing/SpacingInset.jsx'
import SliderController from './SliderController.jsx'

export default class Typography extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(key, value) {
    this.props.setValueForKey(key, value)
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Typo!</h1>
        <div className={css(styles.wrapperStyles)}>
          <div className={css(styles.textStyles)}>
            <SpacingInset size={'m'}>
              <VariableHeadline
                fontSize={this.props.headline1Size}
                spacingTop={this.props.headline1SpacingTop}
                spacingBottom={this.props.headline1SpacingBottom}
              />

              <VariableText
                fontSize={this.props.fontSize}
                lineHeight={this.props.lineHeight}
                spacingBottom={20}
              />

              <VariableHeadline
                fontSize={this.props.headline2Size}
                spacingTop={this.props.headline2SpacingTop}
                spacingBottom={this.props.headline2SpacingBottom}
              />

              <VariableText
                fontSize={this.props.fontSize}
                lineHeight={this.props.lineHeight}
                spacingBottom={20}
              />

              <VariableHeadline
                fontSize={this.props.headline3Size}
                spacingTop={this.props.headline3SpacingTop}
                spacingBottom={this.props.headline3SpacingBottom}
              />

              <VariableText
                fontSize={this.props.fontSize}
                lineHeight={this.props.lineHeight}
                spacingBottom={20}
              />
            </SpacingInset>
          </div>

          <div>
            <TabNavigation>
              <TabTitle>
                General
              </TabTitle>
              <TabTitle>
                Headlines
              </TabTitle>

              <TabContent>
                <SliderController
                  title={'Text Size'}
                  value={this.props.fontSize}
                  unit={'px'}
                  handleChange={this.handleChange}
                  storeKey={'fontSize'}
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

import React from 'react'

import TabNavigation from './TabNavigation.jsx'
import TabTitle from './TabTitle.jsx'
import TabContent from './TabContent.jsx'
import SliderInput from './SliderInput.jsx'
import UnitValueDisplay from './UnitValueDisplay.jsx'
import VariableHeadline from './VariableHeadline.jsx'
import VariableText from './VariableText.jsx'

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
        <VariableHeadline
          fontSize={this.props.headline1Size}
          spacingTop={this.props.headline1SpacingTop}
          spacingBottom={this.props.headline1SpacingTop}
        >
          This is a Headline
        </VariableHeadline>

        <VariableText
          fontSize={this.props.fontSize}
          lineHeight={this.props.lineHeight}
          spacingBottom={20}
        >
          Extracting components might seem like grunt work at first, but having a palette of reusable components pays off in larger apps. A good rule of thumb is that if a part of your UI is used several times (Button, Panel, Avatar), or is complex enough on its own (App, FeedStory, Comment), it is a good candidate to be a reusable component.
        </VariableText>

        <VariableHeadline
          fontSize={this.props.headline2Size}
          spacingTop={this.props.headline2SpacingTop}
          spacingBottom={this.props.headline2SpacingTop}
        >
          This is a Headline
        </VariableHeadline>

        <VariableText
          fontSize={this.props.fontSize}
          lineHeight={this.props.lineHeight}
          spacingBottom={20}
        >
          Extracting components might seem like grunt work at first, but having a palette of reusable components pays off in larger apps. A good rule of thumb is that if a part of your UI is used several times (Button, Panel, Avatar), or is complex enough on its own (App, FeedStory, Comment), it is a good candidate to be a reusable component.
        </VariableText>

        <VariableHeadline
          fontSize={this.props.headline3Size}
          spacingTop={this.props.headline3SpacingTop}
          spacingBottom={this.props.headline3SpacingTop}
        >
          This is a Headline
        </VariableHeadline>

        <VariableText
          fontSize={this.props.fontSize}
          lineHeight={this.props.lineHeight}
          spacingBottom={20}
        >
          Extracting components might seem like grunt work at first, but having a palette of reusable components pays off in larger apps. A good rule of thumb is that if a part of your UI is used several times (Button, Panel, Avatar), or is complex enough on its own (App, FeedStory, Comment), it is a good candidate to be a reusable component.
        </VariableText>

        <TabNavigation>
          <TabTitle>
            General
          </TabTitle>
          <TabTitle>
            Headlines
          </TabTitle>

          <TabContent>
            Text Size
            <SliderInput value={this.props.fontSize} handleChange={this.handleChange} storeKey={'fontSize'}/>
            <UnitValueDisplay value={this.props.fontSize} unit={'px'} />
          </TabContent>
        </TabNavigation>
      </div>
    )
  }
}

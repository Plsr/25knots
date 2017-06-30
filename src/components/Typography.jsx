import React from 'react'

import TabNavigation from './TabNavigation.jsx'
import TabTitle from './TabTitle.jsx'
import TabContent from './TabContent.jsx'
import SliderInput from './SliderInput.jsx'
import UnitValueDisplay from './UnitValueDisplay.jsx'

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

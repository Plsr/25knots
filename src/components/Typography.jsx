import React from 'react'

import TabNavigation from './TabNavigation.jsx'
import TabTitle from './TabTitle.jsx'
import TabContent from './TabContent.jsx'
import SliderInput from './SliderInput.jsx'
import UnitValueDisplay from './UnitValueDisplay.jsx'

export default class Typography extends React.Component {
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
            <SliderInput value={23} />
            <UnitValueDisplay value={23} unit={'px'} />
          </TabContent>
        </TabNavigation>
      </div>
    )
  }
}

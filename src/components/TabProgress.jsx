import React from 'react'

export default class TabProgress extends React.Component {

  setupTabs(amount) {
    let tabs = []

    for (var i = 0; i < amount; i++) {
      tabs.push(<p key={i}>tab {i+1}</p>)
    }

    return tabs
  }

  render() {
    let tabs = this.setupTabs(this.props.steps)
    
    return(
      <div className='tabs'>
        { tabs }
      </div>
    )
  }
}

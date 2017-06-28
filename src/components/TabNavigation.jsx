import React from 'react'

import TabTitle from './TabTitle.jsx'
import TabContent from './TabContent.jsx'

export default class TabNavigation extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedTab: 0
    }

    this.getChildrenOfType = this.getChildrenOfType.bind(this)
    this.renderTabs = this.renderTabs.bind(this)
    this.renderContent = this.renderContent.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(key) {
    this.setState({
      selectedTab: key
    })
  }

  /**
   * From the children passed as props, extract all children that are matching the passed type
   *
   * @return {Array} Array of all children of the given type
   */
  getChildrenOfType(type) {
    let children = this.props.children
    let collectedChildren = []

    children.forEach(function(child) {
      if (child.type === type) {
        collectedChildren.push(child)
      }
    })

    return collectedChildren
  }

  renderTabs() {
    let tabs = this.getChildrenOfType(TabTitle)
    let processedTabs = []

    for (var i = 0; i < tabs.length; i++) {
      let tab = React.cloneElement(tabs[i], {
        key: i,
        id: i,
        active: this.state.selectedTab === i,
        onClick: this.handleClick
      })
      processedTabs.push(tab)
    }

    return processedTabs
  }

  renderContent() {
    let contents = this.getChildrenOfType(TabContent)
    return contents[this.state.selectedTab]
  }

  render() {
    return(
      <div>
        {this.renderTabs()}
        {this.renderContent()}
      </div>
    )
  }
}

import React from 'react'
import {StyleSheet, css} from 'aphrodite'

import TabTitle from './TabTitle.jsx'
import TabContent from './TabContent.jsx'
import {baseColors} from '../styles/base/colors.js'

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

  /**
   * Renders all <TabTitles> that were passed top this components as children.
   * Every <TabTitle> is cloned and added some props.
   */
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

  // Renders the currently active content
  renderContent() {
    let contents = this.getChildrenOfType(TabContent)
    return contents[this.state.selectedTab]
  }

  render() {
    return(
      <div>
        <div className={css(styles.TabListStyles)}>
          {this.renderTabs()}
        </div>
        {this.renderContent()}
      </div>
    )
  }
}

const styles = StyleSheet.create({
  TabListStyles: {
    height: '100vh',
    float: 'left',
    backgroundColor: baseColors.ultraLightGrey
  }
})

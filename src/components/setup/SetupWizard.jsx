import React from 'react'

import SpacingInset from '../helpers/spacing/SpacingInset.jsx'
import IconButtonList from './IconButtonList.jsx'
import ButtonNavigation from './ButtonNavigation.jsx'

class SetupWizard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeOption: {},
      selectedScopes: [],
      currentOptions: Object.values(props.setupOptions)
    }
  }

  handleBackButtonClick = () => {
    const { selectedScopes } = this.state
    selectedScopes.pop()

    this.setState({
      selectedScopes: selectedScopes,
      currentOptions: Object.values(this.props.setupOptions),
      activeOption: {}
    })
  }

  handleNextButtonClick = () => {
    const { activeOption } = this.state
    if (!activeOption) return

    const reducedOption = {
      name: activeOption.name,
      value: activeOption.value,
      icon: activeOption.icon
    }

    if (!activeOption.subsequent_options) {
      return this.props.setScopes([...this.state.selectedScopes, reducedOption])
    }

    this.setState(({ selectedScopes }) => ({
      selectedScopes: [...selectedScopes, reducedOption],
      currentOptions: activeOption.subsequent_options,
      activeOption: {}
    }))
  }

  handleItemClick = value => {
    const { currentOptions } = this.state
    const mactchingOption = currentOptions.find(option => (
      option.value === value
    ))

    this.setState({
      activeOption: mactchingOption
    })
  }

  render() {
    const { selectedScopes } = this.state

    return (
      <div>
        <span>Choose what you are building</span>
        <SpacingInset size='l' />
        <IconButtonList
          items={this.state.currentOptions}
          activeItem={this.state.activeOption.value}
          onItemClick={this.handleItemClick}
        />
        <SpacingInset size='l' />
        <ButtonNavigation
          nextButtonAction={this.handleNextButtonClick}
          nextActionForbidden={!this.state.activeOption}
          previousButtonAction={selectedScopes.length > 0 ? this.handleBackButtonClick : null}
        />
      </div>
    )
  }
}

export default SetupWizard

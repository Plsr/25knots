import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import ColorDisplay from './ColorDisplay.jsx'

class ColorDisplayWrapper extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showShadeSelector: false
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleClick() {
    this.setState({ showShadeSelector: !this.state.showShadeSelector })
  }

  handleClose() {
    this.setState({ showShadeSelector: false })
  }

  constructShadeOptions() {
    let shadeOptions = []
    let key = 0

    for (var shade in this.props.options) {
      if (this.props.options.hasOwnProperty(shade)) {
        let hexVal = this.props.options[shade].color
        shadeOptions.push(
          <ColorDisplay
            key={key++}
            size='50px'
            hexVal={hexVal}
            active={hexVal == this.props.color}
            onClick={() => this.props.onOptionClick(hexVal)}
          />
        )
      }
    }

    return shadeOptions
  }

  render() {
    return (
      <div onClick={this.handleClick} className={css(styles.wrapperStyles)}>
        { this.state.showShadeSelector ? <div className={css(styles.PopoverStyles)}>
          <div className={css(styles.CoverStyles)} onClick={ this.handleClose }>
            {this.constructShadeOptions()}
          </div>
        </div> : null }
        <ColorDisplay hexVal={this.props.color}/>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  wrapperStyles: {
    display: 'inline-block',
    position: 'relative'
  },
  PopoverStyles: {
    zIndex: 2
  },
  CoverStyles: {
    position: 'absolute',
    backgroundColor: 'white',
    top: '0px',
    bottom: '0px',
    left: '0px',
    right: '0px'
  }
})

export default ColorDisplayWrapper

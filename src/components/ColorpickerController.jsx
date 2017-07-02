import React from 'react'
import {StyleSheet, css} from 'aphrodite'

import { ChromePicker } from 'react-color'
import tinycolor from 'react-color/modules/tinycolor2'

class ColorpickerController extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleClose = this.handleClose.bind(this)

    this.state = {
      displayColorPicker: false
    }
  }

  handleClick() {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose() {
    this.setState({ displayColorPicker: false })
  };

  handleChange(color) {
    this.props.handleChange(this.props.storeKey, color.hex)
  }

  render() {
    return (
      <div>
        {this.props.title}
        <div
          onClick={ this.handleClick }
          className={css(styles.PreviewStyles)}
          style={{backgroundColor: this.props.color}}
        />
        { this.state.displayColorPicker ? <div className={css(styles.PopoverStyles)}>
          <div className={css(styles.CoverStyles)} onClick={ this.handleClose }/>
          <ChromePicker
            color={this.props.color}
            onChange={this.handleChange}
          />
        </div> : null }
      </div>
    )
  }
}

const styles = StyleSheet.create({
  PreviewStyles: {
    padding: '20px',
    cursor: 'pointer',
    border: '1px solid #333'
  },
  PopoverStyles: {
    position: 'absolute',
    zIndex: 2
  },
  CoverStyles: {
    position: 'fixed',
    top: '0px',
    bottom: '0px',
    left: '0px',
    right: '0px',
  }
})

export default ColorpickerController

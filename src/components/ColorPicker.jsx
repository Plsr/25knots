import React from 'react'
import { CustomPicker } from 'react-color'
import {StyleSheet, css} from 'aphrodite'

var { Saturation } = require('react-color/lib/components/common');
var tinycolor = require('react-color/modules/tinycolor2/index.js');

class ColorPicker extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(color) {
    let hex = '#' + tinycolor(color).toHex()
    this.props.handleChange(this.props.storeKey, hex)
  }

  render() {
    return(
      <div className={css(styles.SaturationWrapper)}>
        <Saturation
          {...this.props}
          onChange={ this.handleChange }  />
      </div>
    )
  }
}

const styles = StyleSheet.create({
  SaturationWrapper: {
    position: 'relative',
    // TODO: Styling
    width: '200px',
    height: '100px'
  }
})

export default CustomPicker(ColorPicker)

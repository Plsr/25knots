import React from 'react'
import {StyleSheet, css} from 'aphrodite'

class TextWidthCalculator extends React.Component {

  componentDidUpdate() {
    // Get snippet DOM Element
    let snippet = this.refs.calculationSnippet

    // Get width of rendered DOM node
    let elementWidth = snippet.getBoundingClientRect().width

    // Get length (in terms of characters) of element content
    let elementLength = snippet.innerHTML.length

    // Get number of chars per pixel
    let charsPerPixel = elementLength / elementWidth

    // Calculate min an max width
    let minWidth = Math.floor(65 / charsPerPixel)
    let maxWidth = Math.floor(75 / charsPerPixel)

    // Update values in parent
    this.props.onChange(minWidth, maxWidth)
  }

  render () {
    const styles = StyleSheet.create({
      snippetStyles: {
        fontSize: this.props.fontSize + 'px',
        fontFamily: this.props.fontFamily,
        whiteSpace: 'nowrap',
        display: 'inline',
        position: 'absolute',
        top: '-9999px'
      }
    })

    return (
      <div className={css(styles.snippetStyles)}>
        <p ref="calculationSnippet" className="a-calculation-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et nibh euismod, dapibus elit vel, tincidunt massa.
        </p>
      </div>
    )
  }
}

export default TextWidthCalculator

import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import { appColors } from '../../styles/base/colors.js'

class TableDisplay extends React.Component {

  buildTable(content) {
    let tableContent = []

    for (var i = 0; i < content.length; i++) {
      tableContent.push(
        <tr>
          <td>{content[i].name}</td>
          <td>{content[i].value}</td>
        </tr>
      )
    }

    return (
      <table>
        <tbody>
          {tableContent}
        </tbody>
      </table>
    )
  }

  render() {
    return (
      <div>
        <h4 className={css(styles.headlineStyles)}>{this.props.title}</h4>
        {this.buildTable(this.props.content)}
      </div>
    )
  }
}

const styles = StyleSheet.create({
  headlineStyles: {
    color: appColors.secondary
  }
})

export default TableDisplay

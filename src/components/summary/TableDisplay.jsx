import React from 'react'

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
        <h4>{this.props.title}</h4>
        {this.buildTable(this.props.content)}
      </div>
    )
  }
}

export default TableDisplay

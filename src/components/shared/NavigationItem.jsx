import React from 'react'
import { Link } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite'


function NavigationItem(props) {
  return (
    <li>
      <Link to={props.path}>{props.title}</Link>
    </li>
  )
}

const styles = StyleSheet.create({
  NavigationItem: {

  }
})

export default NavigationItem

import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router'


const EnsureScopesPresent = (WrappedComponent) => {
  const EnsureScopesPresent = (props) => {
    if (props.scopesPresent) return <WrappedComponent {...props} />
    return <Redirect to="/" />
  }

  EnsureScopesPresent.propTypes = {
    scopesPresent: PropTypes.bool.isRequired
  }
  return EnsureScopesPresent
}

export default EnsureScopesPresent

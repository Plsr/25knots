import React from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'
import SpacingInset from '../helpers/spacing/SpacingInset.jsx'

import {baseColors} from '../../styles/base/colors.js'

const Box = glamorous.div({
  border: `1px solid ${baseColors.lighterMidGrey}`,
  borderRadius: '4px',
  maxWidth: '800px',
  margin: '0 auto'
})

const BorderedBox = ({ children }) => {
  return (
    <Box>
      <SpacingInset size='l'>
        {children}
      </SpacingInset>
    </Box>
  )
}

BorderedBox.propTypes = {
  children: PropTypes.node.isRequired
}

export default BorderedBox

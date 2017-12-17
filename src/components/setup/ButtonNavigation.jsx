import React from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'

import SecondaryButton from '../shared/SecondaryButton.jsx'

const Wrapper = glamorous.div({
  display: 'flex',
  justifyContent: 'space-between'
}, props => {
  if (props.singleItem) {
    return {
      justifyContent: 'flex-end'
    }
  }
})

const ButtonNavigation = ({ nextButtonAction, nextActionForbidden, previousButtonAction }) => (
  <Wrapper singleItem={!previousButtonAction}>
    {
      previousButtonAction &&
      <SecondaryButton
        onClick={previousButtonAction}
        variant='outline'
      >
        Back
      </SecondaryButton>
    }
    <SecondaryButton
      onClick={nextButtonAction}
      inactive={nextActionForbidden}
    >
      Next
    </SecondaryButton>
  </Wrapper>
)

ButtonNavigation.propTypes = {
  nextButtonAction: PropTypes.func,
  previousButtonAction: PropTypes.func
}

export default ButtonNavigation

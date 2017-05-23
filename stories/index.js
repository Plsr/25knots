import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import AppControlButton from './AppControlButton'
import AppControlButtonDisabled from './AppControlButtonDisabled'

storiesOf('Buttons', module)
  .add('Regular App Control Button', () => (
    <AppControlButton onClick={action('clicked')}>Next</AppControlButton>
  ))
  .add('Disabled App Control Button', () => (
    <AppControlButtonDisabled onClick={action('clicked')}>Next</AppControlButtonDisabled>
  ))

import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import AppControlButton from './AppControlButton'

storiesOf('Buttons', module)
  .add('Regular App Control Button', () => (
    <AppControlButton onClick={action('clicked')}>Next</AppControlButton>
  ))

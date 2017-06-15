import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import NavigationButton from '../src/components/NavigationButton.jsx'

storiesOf('Buttons', module)
  .add('Regular App Navigation Button', () => (
    <NavigationButton onClick={action('clicked')}>Next Step</NavigationButton>
  ))

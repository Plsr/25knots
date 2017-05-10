import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';

storiesOf('Button', module)
  .add('regular', () => (
    <Button onClick={action('clicked')}>Regular Button</Button>
  ))
  .add('danger', () => (
    <Button role='danger' onClick={action('clicked')}>Danger Button</Button>
  ));

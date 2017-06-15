import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import {ICONS} from '../src/components/helpers/constants/icons.js'
import { appColors } from '../src/styles/base/colors.js'

import NavigationButton from '../src/components/NavigationButton.jsx'
import Icon from '../src/components/Icon.jsx'

storiesOf('Buttons', module)
  .add('Regular App Navigation Button', () => (
    <NavigationButton onClick={action('clicked')}>Next Step</NavigationButton>
  ))
storiesOf('Icons', module)
  .add('Regular Icon', () => (
    <Icon icon={ICONS.SMARTPHONE} />
  ))
  .add('Colored Icon', () => (
    <Icon icon={ICONS.SMARTPHONE} color={appColors.primary} />
  ))
  .add('Bigger Icon', () => (
    <Icon icon={ICONS.SMARTPHONE} size={'40'}/>
  ))

import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import {ICONS} from '../src/components/helpers/constants/icons.js'
import { appColors } from '../src/styles/base/colors.js'

import NavigationButton from '../src/components/NavigationButton.jsx'
import SecondaryButton from '../src/components/SecondaryButton.jsx'
import IconButton from '../src/components/IconButton.jsx'
import Icon from '../src/components/Icon.jsx'
import TabNavigation from '../src/components/TabNavigation.jsx'
import TabTitle from '../src/components/TabTitle.jsx'
import TabContent from '../src/components/TabContent.jsx'

storiesOf('Buttons', module)
  .add('Regular App Navigation Button', () => (
    <NavigationButton onClick={action('clicked')}>Next Step</NavigationButton>
  ))
  .add('Regular Secondary Button', () => (
    <SecondaryButton onClick={action('clicked')}>Next Step</SecondaryButton>
  ))
  .add('Icon Button', () => (
    <IconButton
      onClick={action('clicked')}
      icon={ICONS.SMARTPHONE}
    >
      Smartphone
    </IconButton>
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

storiesOf('TabNavigation', module)
  .add('TabNavigation', () => (
    <TabNavigation>
      <TabTitle icon={ICONS.SMARTPHONE}>Tab1</TabTitle>
      <TabTitle icon={ICONS.PAGE}>Tab2</TabTitle>

      <TabContent>This is content for tab 1</TabContent>
      <TabContent>This is content for tab 2</TabContent>
    </TabNavigation>
  ))

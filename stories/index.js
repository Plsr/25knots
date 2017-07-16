import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import { MemoryRouter } from 'react-router'

import {ICONS} from '../src/components/helpers/constants/icons.js'
import { appColors } from '../src/styles/base/colors.js'

import NavigationButton from '../src/components/shared/NavigationButton.jsx'
import SecondaryButton from '../src/components/SecondaryButton.jsx'
import IconButton from '../src/components/IconButton.jsx'
import Icon from '../src/components/Icon.jsx'
import TabNavigation from '../src/components/TabNavigation.jsx'
import TabTitle from '../src/components/TabTitle.jsx'
import TabContent from '../src/components/TabContent.jsx'
import UnitValueDisplay from '../src/components/UnitValueDisplay.jsx'
import SliderInput from '../src/components/SliderInput.jsx'
import BottomNavigation from '../src/components/shared/BottomNavigation.jsx'

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
      <TabTitle icon={ICONS.SMARTPHONE} title={'Smartphone'} />
      <TabTitle icon={ICONS.PAGE} title={'Page'} />

      <TabContent>This is content for tab 1</TabContent>
      <TabContent>This is content for tab 2</TabContent>
    </TabNavigation>
  ))

storiesOf('UnitValueDisplay', module)
  .add('As pixel value', () => (
    <UnitValueDisplay value={23} unit={'px'}/>
  ))
  .add('As percentage value', () => (
    <UnitValueDisplay value={150} unit={'%'}/>
  ))

storiesOf('SliderInput', module)
  .add('SliderInput', () => (
    <SliderInput value={34} min={0} max={100} />
  ))

storiesOf('BottomNavigation', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('BottomNavigation', () => (
    <BottomNavigation to='/test' inactive={true} />
  ))

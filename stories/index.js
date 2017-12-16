import React from 'react'
import { storiesOf, action } from '@storybook/react'
import { MemoryRouter } from 'react-router'

import {ICONS} from '../src/helpers/constants/icons.js'
import { appColors } from '../src/styles/base/colors.js'

import SpacingInset from '../src/components/helpers/spacing/SpacingInset.jsx'

import NavigationButton from '../src/components/shared/NavigationButton.jsx'
import SecondaryButton from '../src/components/shared/SecondaryButton.jsx'
import IconButton from '../src/components/setup/IconButton.jsx'
import Icon from '../src/components/shared/Icon.jsx'
import TabNavigation from '../src/components/typography/TabNavigation.jsx'
import TabTitle from '../src/components/typography/TabTitle.jsx'
import TabContent from '../src/components/typography/TabContent.jsx'
import UnitValueDisplay from '../src/components/typography/UnitValueDisplay.jsx'
import SliderInput from '../src/components/typography/SliderInput.jsx'
import BottomNavigation from '../src/components/shared/BottomNavigation.jsx'
import PlainButton from '../src/components/shared/PlainButton.jsx'
import ColorDisplay from '../src/components/colors/ColorDisplay.jsx'
import BorderedBox from '../src/components/shared/BorderedBox.jsx'

storiesOf('Buttons', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('Regular App Navigation Button', () => (
    <NavigationButton onClick={action('clicked')} to='/test'>Next Step</NavigationButton>
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
  .add('BottomNavigation Inactive', () => (
    <BottomNavigation to='/test' inactive={true} title='I am inactive' />
  ))
  .add('BottomNavigation Active', () => (
    <BottomNavigation to='/test' inactive={false} title='I am active' />
  ))

storiesOf('Color Display', module)
  .add('ColorDisplay ', () => (
    <ColorDisplay
      hexVal='#ff00ff'
      active={false}
      onClick={action('clicked')}
    />
  ))
  .add('ColorDisplay Active', () => (
    <ColorDisplay
      hexVal='#ff00ff'
      active={true}
      onClick={action('clicked')}
    />
  ))
  .add('ColorDisplay Bigger', () => (
    <ColorDisplay
      hexVal='#ff00ff'
      active={false}
      size={200}
      onClick={action('clicked')}
    />
  ))
  .add('ColorDisplay Smaller', () => (
    <ColorDisplay
      hexVal='#ff00ff'
      active={false}
      size={50}
      onClick={action('clicked')}
    />
  ))
storiesOf('Bordered Box', module)
  .add('Bordered Box ', () => (
    <BorderedBox>
      <SpacingInset size='m' >
        A Bordered Box
      </SpacingInset>
    </BorderedBox>
  ))

storiesOf('Plain Button', module)
  .add('Plain Button ', () => (
    <PlainButton
      onClick={action('clicked')}
      active={false}
    >
      A Plain Button
    </PlainButton>
  ))
  .add('Plain Button Active', () => (
    <PlainButton
      onClick={action('clicked')}
      active={true}
    >
      I am Active
    </PlainButton>
  ))

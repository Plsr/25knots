import {ICONS} from './icons.js'

export const setupOptions = [
  {
    icon: ICONS.SMARTPHONE,
    text: 'Native App',
    value: 'NATIVE_APP',
    shouldDisplayForScope: undefined
  },
  {
    icon: ICONS.WEBSITE,
    text: 'Website',
    value: 'WEBSITE',
    shouldDisplayForScope: undefined
  },
  {
    icon: ICONS.PAGE,
    text: 'Text Document',
    value: 'TEXT_DOCUMENT',
    shouldDisplayForScope: undefined
  },
  {
    icon: ICONS.ANDROID,
    text: 'Android',
    value: 'ANDROID',
    shouldDisplayForScope: 'NATIVE_APP'
  },
  {
    icon: ICONS.IOS,
    text: 'iOS',
    value: 'IOS',
    shouldDisplayForScope: 'NATIVE_APP'
  },
  {
    icon: ICONS.WEBSITE,
    text: 'Show for Website',
    value: 'WEBSITE',
    shouldDisplayForScope: 'WEBSITE'
  },
  {
    icon: ICONS.PAGE,
    text: 'Show for Text Document',
    value: 'TEXT_DOCUMENT',
    shouldDisplayForScope: 'TEXT_DOCUMENT'
  }
]

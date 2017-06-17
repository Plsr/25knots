import {ICONS} from './icons.js'
import {SCOPES} from './scopes.js'

export const setupOptions = [
  {
    icon: ICONS.SMARTPHONE,
    text: 'Native App',
    value: SCOPES.NATIVE_APP,
    shouldDisplayForScope: undefined
  },
  {
    icon: ICONS.WEBSITE,
    text: 'Website',
    value: SCOPES.WEBSITE,
    shouldDisplayForScope: undefined
  },
  {
    icon: ICONS.PAGE,
    text: 'Text Document',
    value: SCOPES.TEXT_DOCUMENT,
    shouldDisplayForScope: undefined
  },
  {
    icon: ICONS.ANDROID,
    text: 'Android',
    value: SCOPES.ANDROID,
    shouldDisplayForScope: 'NATIVE_APP'
  },
  {
    icon: ICONS.IOS,
    text: 'iOS',
    value: SCOPES.IOS,
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

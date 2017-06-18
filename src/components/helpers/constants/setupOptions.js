import {ICONS} from './icons.js'
import {SCOPES} from './scopes.js'

export const setupOptions = [
  {
    icon: ICONS.SMARTPHONE,
    text: 'Native App',
    value: SCOPES.NATIVE_APP,
    shouldDisplayForScope: undefined,
    initialOption: true
  },
  {
    icon: ICONS.WEBSITE,
    text: 'Website',
    value: SCOPES.WEBSITE,
    shouldDisplayForScope: undefined,
    initialOption: true
  },
  {
    icon: ICONS.PAGE,
    text: 'Text Document',
    value: SCOPES.TEXT_DOCUMENT,
    shouldDisplayForScope: undefined,
    initialOption: true
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
    text: 'Responsive',
    value: SCOPES.RESPONSIVE,
    shouldDisplayForScope: 'WEBSITE'
  },
  {
    icon: ICONS.WEBSITE,
    text: 'Not responsive',
    value: SCOPES.NOT_RESPONSIVE,
    shouldDisplayForScope: 'WEBSITE'
  },
  {
    icon: ICONS.PAGE,
    text: 'Auf Papier',
    value: SCOPES.PAPER,
    shouldDisplayForScope: 'TEXT_DOCUMENT'
  },
  {
    icon: ICONS.PAGE,
    text: 'Am Display',
    value: SCOPES.DISPLAY,
    shouldDisplayForScope: 'TEXT_DOCUMENT'
  },
  {
    icon: ICONS.PAGE,
    text: 'Papier & Display',
    value: SCOPES.PAPER_DISPLAY,
    shouldDisplayForScope: 'TEXT_DOCUMENT'
  }
]

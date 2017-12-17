import {ICONS} from './icons.js'
import {SCOPES} from './scopes.js'

export const setupOptions = {
  [SCOPES.NATIVE_APP]: {
    icon: ICONS.SMARTPHONE,
    name: 'Native App',
    value: SCOPES.NATIVE_APP,
    'subsequent_options': [
      {
        icon: ICONS.ANDROID,
        name: 'Android',
        value: SCOPES.ANDROID,
        'subsequent_options': null
      },
      {
        icon: ICONS.IOS,
        name: 'iOS',
        value: SCOPES.IOS,
        'subsequent_options': null
      }
    ]
  },
  [SCOPES.WEBSITE]: {
    icon: ICONS.WEBSITE,
    name: 'Website',
    value: SCOPES.WEBSITE,
    'subsequent_options': null
  },
  [SCOPES.TEXT_DOCUMENT]: {
    icon: ICONS.PAGE,
    name: 'Text Document',
    value: SCOPES.TEXT_DOCUMENT,
    'subsequent_options': [
      {
        icon: ICONS.PAGE,
        name: 'On Paper',
        value: SCOPES.PAPER,
        'subsequent_options': null
      },
      {
        icon: ICONS.DISPLAY,
        name: 'On Display',
        value: SCOPES.DISPLAY,
        'subsequent_options': null
      },
      {
        icon: ICONS.DISPLAY_PAPER,
        name: 'Paper & Display',
        value: SCOPES.PAPER_DISPLAY,
        'subsequent_options': null
      }
    ]
  }
}

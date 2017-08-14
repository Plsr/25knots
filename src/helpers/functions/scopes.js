import { setupOptions } from '../constants/setupOptions.js'

export function extractScopeInformation(scopes) {
  let extractedScopes = []
  for (var i = 0; i < setupOptions.length; i++) {
    let currentOption = setupOptions[i]

    scopes.forEach(function(scope) {
      if (currentOption.value == scope)
        extractedScopes.push({
          text: currentOption.text,
          icon: currentOption.icon
        })
    })
  }

  return extractedScopes
}

import tinycolor from 'react-color/modules/tinycolor2'

/**
 * Check contrast of the two currently picked colors
 * based on WCAG 2.0 G18
 * https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20160317/G18
 */
function calculateRatio(foreground, background) {
  // Get currently set colors
  let bgColor = tinycolor(background).toRgb()
  let fgColor = tinycolor(foreground).toRgb()
  var colors = [bgColor, fgColor]
  var lumis = []
  var ratio

  for (var i = 0; i <colors.length; i++) {
    var currColor = colors[i]

    /**
     * Convert RGB values of colors to sRGB
     * Then do claculations as specified in WCAG 2.0 G18
     * https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20160317/G18#G18-tests
     */
    for (var singleColor in currColor) {
      if (currColor.hasOwnProperty(singleColor)) {
        currColor[singleColor] = currColor[singleColor] / 255

        if (currColor[singleColor] <= 0.03928) {
          currColor[singleColor] = currColor[singleColor] / 12.92
        } else {
          currColor[singleColor] = Math.pow(((currColor[singleColor] + 0.055) / 1.055), 2.4)
        }
      }
    }
    // Store luminances of foreground and background color
    lumis.push((0.2126 * currColor.r + 0.7152 * currColor.g + 0.0722 * currColor.b) + 0.05)
  }

  let multiplicator
  // Normalize luminances so that the darker one is 1
  if (lumis[0] > lumis[1]) {
    multiplicator = 1 / lumis[1]
    lumis[0] = lumis[0] * multiplicator
    ratio = lumis[0]
  } else {
    multiplicator = 1 / lumis[0]
    lumis[1] = lumis[1] * multiplicator
    ratio = lumis[1]
  }

  return ratio
}

/**
 * Returns an object with the passing status of the three values
 * that can be passed to the store.
 */
export default function calcualateContrast(foreground, background) {
  let ratio = calculateRatio(foreground, background)
  let contrastPassing = {
    AAA: ratio >= 7,
    AA: ratio >= 4.5,
    A: ratio >= 3
  }

  return contrastPassing
}

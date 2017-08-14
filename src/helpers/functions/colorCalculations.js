import tinycolor from 'react-color/modules/tinycolor2'

import {MATERIAL_COLOR_SHADES} from '../constants/colors.js'

export const DIRECTIONS = {
  CLOCKWISE: 'CLOCKWISE',
  COUNTER_CLOCKWISE: 'COUNTER_CLOCKWISE'
}

const CHANGABLE_COLOR_ATTRIBUTES = [
  'LIGHTNESS',
  'SATURATION',
  'LIGHTNESS_SATURATION'
]

// Simple wrapper for the tinycolor toHsl() method
export function convertToHsl(hexValue) {
  let color = tinycolor(hexValue)
  return color.toHsl()
}

// Simple wrapper for the tinycolor toHex() method
export function convertToHex(hslObject) {
  let color = tinycolor(hslObject)
  return '#' + color.toHex()
}

// Simple wrapper for the tinycolor toRgb() method
export function convertToRgb(hexValue) {
  let color = tinycolor(hexValue)
  return color.toRgb()
}

// Simple wrapper for the tinycolor isLight() function
export function isLight(hexValue) {
  let color = tinycolor(hexValue)
  return color.isLight()
}

// Simple wrapper for the tinycolor getBrightness() function
export function getBrightness(hexValue) {
  let color = tinycolor(hexValue)
  return color.getBrightness()
}

/**
 * From the set of material color shades, returns the whole object with all shades
 * for any given shade.
 *
 * @param shade The shade of a material color, as hex value
 * @returns The complete object in which the shade was found
 */
export function getMaterialColorObjectForShade(shade) {
  let colorSet = MATERIAL_COLOR_SHADES

  for (var i = 0; i < colorSet.length; i++) {
    let currColorObj = colorSet[i]
    for (var currShade in currColorObj) {
      if (currColorObj.hasOwnProperty(currShade)) {
        if (currColorObj[currShade] == shade) {
          return currColorObj
        }
      }
    }
    if (currColorObj[500] == shade) {
      return currColorObj
    }
  }
}

/**
 * Calculates a color scheme of monochromatic colors based on a base color with a variable amount of colors.
 * The colors returned by this function are random in saturation and lightness.
 * The colors returned by this function are guaranteed to not be equal to either each other, nor the base color.
 *
 * NOTE: Since the colors cannot be similar to each other, the amount of options in limited. Therefor, the number of colors to be returned should not be too high (6 will probably still work fine, whereas 25 will cause the function to break.)
 *
 * @param amount The number of colors that should be returned
 * @param baseColor A HEX-Value of a color that is the basis of the color scheme
 * @returns An Array of HEX-Values that build a monochromatic color scheme
 */
export function calculateMonochromaticColors(amount, baseColor) {

  let hslColor = convertToHsl(baseColor)
  let colors = []

  for (var i = 0; i < amount; i++) {
    let currentColor = Object.assign({}, hslColor)
    let randomOption = CHANGABLE_COLOR_ATTRIBUTES[Math.floor(Math.random() * 3)]
    let changedColor = changeValuesOfColor(randomOption, currentColor)

    // Check, if the color is similar to the base color
    let similarToBaseColor = colorsAreSimilar(hslColor, changedColor)
    while (similarToBaseColor) {
      changedColor = changeValuesOfColor(randomOption, changedColor)
      similarToBaseColor = colorsAreSimilar(hslColor, changedColor)
    }

    if (colors.length < 1) {
      colors.push(convertToHex(changedColor))
    } else {
      // Check, if the new color is similar to other colors that were calculated
      let similarColorsPresent = colorInArrayIsSimilar(colors, changedColor)
      while (similarColorsPresent) {
        changedColor = changeValuesOfColor(randomOption, changedColor)
        similarColorsPresent = colorsAreSimilar(colors, changedColor)
      }
      colors.push(convertToHex(changedColor))
    }
  }

  return colors
}

/**
 * Changes the lightness and/or saturation value of an HSL color object to a random value and returns a copy of that object.
 * The random values are restricted to prevent them from beign colorless (i.e. almost black or almost white).
 * A switch case determines, which attribute(s) of the color should be changed.
 *
 * @param attributeToChange The attribute on the color to be changed
 * @param color An HSL color object on which's hue the new color will be based
 * @returns An HSL color object with the manipulated attributes
 */
function changeValuesOfColor(attributeToChange, color) {
  let manipulatedColor = Object.assign({}, color)
  let lightnessVal = Math.random() * 0.85 + 0.15
  let saturationVal = Math.random() * 0.65 + 0.15

  switch (attributeToChange) {
    case 'LIGHTNESS':
      manipulatedColor.l = lightnessVal.toFixed(2)
      break
    case 'SATURATION':
      manipulatedColor.s = saturationVal.toFixed(2)
      break
    case 'LIGHTNESS_SATURATION':
      manipulatedColor.l = lightnessVal.toFixed(2)
      manipulatedColor.s = saturationVal.toFixed(2)
      break
    default:
      throw new 'Oops, seems like the randomizer messed something up.'
  }

  return manipulatedColor
}

/**
 * Checks if two HSL color objetcs are similar.
 * Similarity is defined as the Lightness and Saturation being less than 0.1 apart,
 * with the Hue being exactly the same.
 *
 * NOTE: The Hue of the colors is not taken into consideration.
 *
 * @param color The first HSL color object
 * @param candidate The second HSL color object
 * @returns true if the two colors are found to be similar
 */
function colorsAreSimilar(color, candidate) {
  let saturationDifference = Math.abs(color.s - candidate.s)
  let lightnessDifference = Math.abs(color.l - candidate.l)

  if (saturationDifference < 0.1 && lightnessDifference < 0.1) {
    return true
  }

  return false
}

/**
 * Checks if an HSL color objetc is similar to any HSL color object in a given array.
 * To check the similarity itself, the function colorsAreSimilar(color, candidate) is used.
 *
 * NOTE: The Hue of the colors is not taken into consideration.
 *
 * @param colors An array of HSL color objects
 * @param candidate The HSL color object to be tested
 * @returns true if the candidate is similar to any of the objects in the array
 */
function colorInArrayIsSimilar(colors, candidate) {
  let similarColorsPresent = false

  for (var i = 0; i < colors.length; i++) {
    if (colorsAreSimilar(colors[i], candidate)) {
      similarColorsPresent = true
    }
  }

  return similarColorsPresent
}

/**
 * Calculates the complementary color of a given color.
 * The given color needs to be in the hsl color system for the calculation to work.
 * The complementary color is calculated by getting the color opposite
 * of the given color (i.e. by changing the hue-value by 180 degrees)
 *
 * @param baseColor: color in the hsl system
 * @returns complementary color in the hsl system
 */
export function calculateComplementary(baseColor) {
  let hslColor = convertToHsl(baseColor)
  let complementary = Object.assign({}, hslColor)
  let hue = complementary.h

  hue += 180
  if (hue > 360) {
    hue -= 360
  }

  complementary.h = hue
  return convertToHex(complementary)
}

export function calculateTriadContrast(baseColor) {
  let triadColors = [
    calculateHueInDirection(baseColor, 30, DIRECTIONS.CLOCKWISE),
    calculateHueInDirection(baseColor, 30, DIRECTIONS.COUNTER_CLOCKWISE)
  ]

  return triadColors

}

/**
 * Calculates a new hue for the given amoutn and direction on the color circle.
 * The given color needs to be in the hsl color system for the calculation to work.
 * The amount can be any positive number, the direction must be in the DIRECTIONS constant
 * of this file.
 *
 * @param baseColor: color in the hsl system
 * @param amount: Amount of degrees the hue should shift
 * @param direction: Direction in which the change should be appllied
 * @returns color with shifted hue value in the hsl system
 */
export function calculateHueInDirection(baseColor, amount, direction) {
  let hslColor = convertToHsl(baseColor)
  let manipulatedColor = Object.assign({}, hslColor)
  let hue = manipulatedColor.h
  let degrees = amount

  if (degrees < 0) {
    throw new 'The amount to change must be positive'
  }

  if (degrees > 360) {
    degrees = degrees % 360
  }

  switch (direction) {
    case DIRECTIONS.CLOCKWISE:
      hue += degrees
      if (hue > 360) {
        hue -= 360
      }
      manipulatedColor.h = hue
      return convertToHex(manipulatedColor)
    case DIRECTIONS.COUNTER_CLOCKWISE:
      hue -= degrees
      if (hue < 0) {
        hue += 360
      }
      manipulatedColor.h = hue
      return convertToHex(manipulatedColor)
    default:
      throw 'Direction not supported. Please use one of the Directions defined in the DIRECTIONS constant'
  }
}

import tinycolor from 'react-color/modules/tinycolor2'

export const DIRECTIONS = {
  CLOCKWISE: 'CLOCKWISE',
  COUNTER_CLOCKWISE: 'COUNTER_CLOCKWISE'
}

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

// TODO: Documentation
export function calculateMonochromaticColors(amount, baseColor) {

  let hslColor = convertToHsl(baseColor)
  let colors = []

  for (var i = 0; i < amount; i++) {
    let currentColor = Object.assign({}, hslColor)
    // Figure out if only one or two values should be changed
    // Random: 0 = Lightness, 1 = Saturation, 2 = Both
    let randomOption = Math.floor(Math.random() * 3)
    let changedColor = changeValuesOfColor(randomOption, currentColor)

    if (colors.length < 1) {
      colors.push(convertToHex(changedColor))
    } else {
      let similarColors = checkForSimilarColors(colors, changedColor)
      while (similarColors) {
        changedColor = changeValuesOfColor(randomOption, changedColor)
        similarColors = checkForSimilarColors(colors, changedColor)
      }
      colors.push(convertToHex(changedColor))
    }
  }

  return colors
}

// TODO: Documentation
function changeValuesOfColor(values, color) {
  let manipulatedColor = Object.assign({}, color)
  // Switch case
  // Do the changes that need to be DropdownController
  switch (values) {
    case 0:
      // change lightness
      manipulatedColor.l = Math.random().toFixed(2)
      break
    case 1:
      // change Saturation
      manipulatedColor.s = Math.random().toFixed(2)
      break
    case 2:
      // change lightning and saturation
      manipulatedColor.l = Math.random().toFixed(2)
      manipulatedColor.s = Math.random().toFixed(2)
      break
    default:
      throw new 'Oops, seems like the randomizer messed something up.'
  }

  return manipulatedColor
}

// TODO: Documentation
function checkForSimilarColors(colors, candidate) {
  let similarValues = false
  for (var j = 0; j < colors.length; j++) {
    let saturationDifference = Math.abs(colors[j].s - candidate.s)
    let lightnessDifference = Math.abs(colors[j].l - candidate.l)

    if (saturationDifference < 0.1 && lightnessDifference < 0.1) {
      similarValues = true
    }
  }

  return similarValues
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
export function calculateCompelemntary(baseColor) {
  let complementary = Object.assign({}, baseColor)
  let hue = complementary.h

  hue += 180
  if (hue > 360) {
    hue -= 360
  }

  complementary.h = hue
  return complementary
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
export function claculateHueInDirection(baseColor, amount, direction) {
  let manipulatedColor = Object.assign({}, baseColor)
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
      return manipulatedColor
    case DIRECTIONS.COUNTER_CLOCKWISE:
      hue -= degrees
      if (hue < 0) {
        hue += 360
      }
      manipulatedColor.h = hue
      return manipulatedColor
    default:
      throw 'Direction not supported. Please use one of the Directions defined in the DIRECTIONS constant'
  }
}

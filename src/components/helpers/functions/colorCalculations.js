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

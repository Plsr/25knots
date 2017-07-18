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

export function claculateHueInDirection(baseColor, amount, direction) {
  let manipulatedColor = Object.assign({}, baseColor)
  let hue = manipulatedColor.h
  let degrees = amount

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

const TYPOGRAPHIC_SCALE = [6, 7, 8, 9, 10, 11, 12, 14, 16, 18, 21, 24, 36, 48, 60, 72]

export function getClosestValueFromScale (value) {
  for (var i = 0; i < TYPOGRAPHIC_SCALE.length; i++) {

    if (TYPOGRAPHIC_SCALE[i] == value) {
      return i
    }
    // Check if the next bigger number was found
    if (TYPOGRAPHIC_SCALE[i] > value) {
      var upper = TYPOGRAPHIC_SCALE[i]
      var lower = TYPOGRAPHIC_SCALE[i - 1]

      // Calculate differences to upper and lower neighbour
      var upperDiff = upper - value
      var lowerDiff = value - lower

      // Determine which neighbour is the closest
      if (upperDiff > lowerDiff) {
        return i - 1
      } else {
        return i
      }
    }
  }

  // Return null if no match was found
  return null
}

export function getPreviousSize(value) {
  return TYPOGRAPHIC_SCALE[value - 1]
}

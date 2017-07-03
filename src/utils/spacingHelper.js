import { spacing } from '../styles/base/spacing'

/**
 * Checks if the given size is valid and returns its pixel value.
 * Throws an error, if the size is not defined or invalid. There is no fallback size
 * here because styling shouldn't happen 'by chance'.
 *
 * @param {String} The size form the component's props
 * @return {spacing} The accroding spacing
 *
 */
export function getSize(size) {
  if (size === undefined)
    throw new Error('Spacing components need an explicit size')

  let pixelSize = spacing[size]

  if (pixelSize === undefined)
    throw new Error('The provided size for the spacing component is not valid.')

  return pixelSize
}

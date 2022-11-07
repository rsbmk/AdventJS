export const checkSledJump = (heights) => {
  if (!Array.isArray(heights)) throw new Error('heights must be an array')
  if (heights.length < 3) throw new Error('heights must have at least 2 elements')

  let itGoUp = true
  const top = Math.max(...heights)

  for (let i = 0; i < heights.length; i++) {
    const currentNum = heights[i]
    const nextNum = heights[i + 1]

    if (currentNum === top && nextNum !== undefined) itGoUp = false
    if (itGoUp && currentNum >= nextNum) return false
    if (!itGoUp && currentNum <= nextNum) return false
  }

  if (itGoUp) return false

  return true
}

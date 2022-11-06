
const NUM_OF_WRAPS = 2
const PAPER = '*'

export const wrapGift = (gifts) => {
  if (!Array.isArray(gifts)) throw new Error('gifts should be an array')
  if (gifts.length === 0) return []

  const wrappedGifts = gifts.map((gift) => `*${gift}*`)
  const lengthWrap = gifts[0].length + NUM_OF_WRAPS
  const UPPER_LOWER_WRAP = PAPER.repeat(lengthWrap)

  return [UPPER_LOWER_WRAP, ...wrappedGifts, UPPER_LOWER_WRAP]
}

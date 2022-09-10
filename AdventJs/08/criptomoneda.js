export const maxProfit = (prices) => {
  const isArray = Array.isArray(prices)
  if (!isArray) throw new Error('The first parameter must be an array')
  if (prices.length <= 1) return 0

  for (let i = 0; i < prices.length; i++) {
    const number = prices[i]
    const slicePrices = prices.slice(i + 1)
    const hasBiggerNumberThanCurrent = Math.max(...slicePrices)
    if (hasBiggerNumberThanCurrent > number) return hasBiggerNumberThanCurrent - number
  }

  return -1
}

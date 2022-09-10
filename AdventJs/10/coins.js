export const getCoins = change => {
  if (typeof change !== 'number') throw new Error()
  const coins = [50, 20, 10, 5, 2, 1]
  let currentChange = change

  const result = coins.map(coin => {
    const numberOfCoins = Math.floor(currentChange / coin)
    currentChange -= numberOfCoins * coin
    return numberOfCoins
  })

  return result.reverse()
}

export const shouldBuyFidelity = (times) => {
  if (typeof times !== 'number') throw new Error('times must be a number')

  const regularTicket = times * 12
  let fidelityDiscount = 250

  Array.from({ length: times }).forEach((_, i) => {
    fidelityDiscount += 12 * Math.pow(0.75, i)
  })

  return regularTicket > fidelityDiscount
}

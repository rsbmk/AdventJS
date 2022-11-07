const TICKET_SINGLE_USE = 12
const DISCOUNT_FIDELITY = 0.75
const FIDELITY_CARD = 250

export const shouldBuyFidelity = (times) => {
  if (typeof times !== 'number') throw new Error('times must be a number')

  const regularTicket = times * TICKET_SINGLE_USE
  let fidelityDiscount = FIDELITY_CARD

  Array.from({ length: times }).forEach((_, i) => {
    fidelityDiscount += TICKET_SINGLE_USE * Math.pow(DISCOUNT_FIDELITY, i)
  })

  return regularTicket > fidelityDiscount
}

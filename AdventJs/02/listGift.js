export const listGifts = (letter) => {
  if (typeof letter !== 'string') throw new Error()
  const isEmptyLetter = letter.length === 0
  if (isEmptyLetter) throw new Error()

  const listGifts = {}
  const list = letter.match(/\S+/g)

  list
    .filter(gift => !gift.startsWith('_'))
    .forEach(gift => {
      listGifts[gift] ??= 0
      listGifts[gift] += 1
    })

  return listGifts
}

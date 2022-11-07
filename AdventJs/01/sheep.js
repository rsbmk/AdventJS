const FILTERS = {
  COLOR_RED: 'rojo',
  LETTER_N: 'n',
  LETTER_A: 'a'
}

export const filterSheep = (sheepList) => {
  const isArray = Array.isArray(sheepList)
  if (!isArray) throw new Error()

  const redSheeps = sheepList.filter(sheep => {
    const sheepName = sheep.name.toLowerCase()
    const sheepColor = sheep.color

    const isSheepRed = sheepColor === FILTERS.COLOR_RED
    const hasAN = sheepName.includes(FILTERS.LETTER_N) && sheepName.includes(FILTERS.LETTER_A)

    return isSheepRed && hasAN
  })

  return redSheeps
}

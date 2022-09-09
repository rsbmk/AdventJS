export const filterSheep = (sheepList) => {
  const isArray = Array.isArray(sheepList)
  if (!isArray) throw new Error()

  const redSheeps = sheepList.filter(sheep => {
    const sheepName = sheep.name.toLowerCase()
    const sheepColor = sheep.color

    const isSheepRed = sheepColor === 'rojo'
    const hasAN = sheepName.includes('n') && sheepName.includes('a')

    return isSheepRed && hasAN
  })

  return redSheeps
}

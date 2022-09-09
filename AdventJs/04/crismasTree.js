const TREE_ELEM = {
  LEAF: '*',
  GAP: '_',
  TRUNK: '#'
}

export const createXmasTree = (height) => {
  if (typeof height !== 'number') throw new Error()
  if (height < 0 || height > 100) throw new Error()

  const thrunkGap = height - 1
  const width = height + thrunkGap

  const elementTrunk = TREE_ELEM.GAP.repeat(thrunkGap) + TREE_ELEM.TRUNK + TREE_ELEM.GAP.repeat(thrunkGap)
  const trunk = elementTrunk + '\n' + elementTrunk
  const baseOfTree = TREE_ELEM.LEAF.repeat(width) + '\n' + trunk

  let treeTop = ''
  let gapTreeTop = width - height
  let leafTreeTop = 1

  for (let i = 1; i < height; i++) {
    treeTop += TREE_ELEM.GAP.repeat(gapTreeTop) + TREE_ELEM.LEAF.repeat(leafTreeTop) + TREE_ELEM.GAP.repeat(gapTreeTop) + '\n'
    gapTreeTop = gapTreeTop - 1
    leafTreeTop = leafTreeTop + 2
  }

  const tree = treeTop + baseOfTree
  return tree
}

export const contains = (store, product) => {
  const notIsAObj = typeof store !== 'object'
  const isArray = Array.isArray(store)
  if (notIsAObj || isArray) throw new Error()
  if (typeof product !== 'string') throw new Error()

  const objIsEmpty = Object.keys(store).length === 0
  if (objIsEmpty) return false
  if (product.length === 0) return false

  return Object.values(store).some(prod => typeof prod === 'object' ? contains(prod, product) : prod === product)
}

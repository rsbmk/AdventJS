export const groupBy = (collection, it) => {
  if (!Array.isArray(collection)) throw new Error('The first parameter must be an array')
  if (typeof it !== 'function' && typeof it !== 'string') { throw new Error('The second parameter must be a function or a string') }
  if (collection.length === 0) return {}

  const result = {}

  collection.forEach((item) => {
    const key = typeof it === 'function' ? it(item) : item[it]
    result[key] ??= []
    result[key].push(item)
  })

  return result
}

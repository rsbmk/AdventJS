const idList = Array.from({ length: 100 }, (_, i) => i)
export const missingReindeer = (ids) => {
  if (!Array.isArray(ids)) throw new Error('ids must be an array')

  const missing = idList.find((id) => !ids.includes(id))
  return missing
}

export const daysToXmas = (date) => {
  const isDate = date instanceof Date
  if (!isDate) throw new Error()

  const crismasDay = new Date('Dec 25, 2021')
  const MS_X_DAY = 1000 * 3600 * 24
  const missDays = (crismasDay - date) / MS_X_DAY
  return Math.ceil(missDays)
}

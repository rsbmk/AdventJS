export const isValid = (letter) => {
  if (typeof letter !== 'string') throw new Error()

  const isEmptyLetter = letter.length === 0
  if (isEmptyLetter) throw new Error()

  if (letter.includes('[') || letter.includes(']')) return false
  if (letter.includes('{') || letter.includes('}')) return false

  let parenthesesCount = 0

  for (let i = 0; i < letter.length; i++) {
    const caracter = letter[i]
    if (caracter === '(' && letter[i + 1] === ')') return false
    if (caracter === '(') parenthesesCount++
    if (caracter === ')') parenthesesCount--
    if (parenthesesCount < 0) return false
  }

  return parenthesesCount === 0
}

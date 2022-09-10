// la primera que me salio pero es la mas tipica creo y la menos optima. Pero pasan los test
export const sumPairs = (arrNumbers, result) => {
  const notIsArray = !Array.isArray(arrNumbers)
  if (notIsArray) throw new Error('The parameter is not an array')
  if (arrNumbers.length <= 1) throw new Error()

  const notIsNumber = typeof result !== 'number'
  if (notIsNumber) throw new Error('The parameter is not a number')

  for (let i = 0; i < arrNumbers.length; i++) {
    const number = arrNumbers[i]
    const arraySliced = arrNumbers.slice(i + 1)
    const secondNumber = arraySliced.find(num2 => num2 + number === result)
    if (secondNumber) return [number, secondNumber]
  }

  return null
}

/*
  * esta fue mi primera solucion pero ya que nos retas a buscar la solucion mas optima
  * la solucion de arriba fue mi solucion mas optima

  let paisNumbers = null

 for (let i = 0; i < arrNumbers.length; i++) {
    const number = arrNumbers[i]
    const arraySliced = arrNumbers.slice(i + 1)

    for (let j = 0; j < arraySliced.length; j++) {
      const number2 = arraySliced[j]
      if (number + number2 === result) {
        paisNumbers = [number, number2]
        break
      }
    }

    if (paisNumbers) break
  }
  return paisNumbers
*/

/**
 * btw mi solucion me parece mas entendible que la de midudev xD
 *
  let lastNumber;
  for (let i = 0; i < arrNumbers.length; i++) {
    if (lastNumber && lastNumber === arrNumbers[i]) continue;
    lastNumber = arrNumbers[i];

    const sliced = arrNumbers.slice(i + 1);
    const sumIndex = sliced.indexOf(result - arrNumbers[i]);

    if (sumIndex !== -1) return [arrNumbers[i], sliced[sumIndex]];
  }
  return null;
 */

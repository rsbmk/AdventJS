import { describe, expect, it } from 'vitest'
import { sumPairs } from './sumPairs'

describe.only('06 sum of pairs numbers', () => {
  it('sumPairs should be a function', () => {
    expect(sumPairs).toBeTypeOf('function')
  })

  it('the first parameter must be an array', () => {
    expect(() => sumPairs(1, 2)).toThrow()
    expect(() => sumPairs('1', 2)).toThrow()
    expect(() => sumPairs({}, 2)).toThrow()
  })

  it('throw error if the array is less than 2', () => {
    expect(() => sumPairs([2], 5)).toThrow()
  })

  it('the second parameter must be a number', () => {
    expect(() => sumPairs([], '1')).toThrow()
    expect(() => sumPairs([], {})).toThrow()
    expect(() => sumPairs([], [])).toThrow()
  })

  it('if does not find a pair, return null', () => {
    expect(sumPairs([5, 8, 3], 4)).toBeNull()
  })

  it('Find a pair of number that sum is equal than result provided', () => {
    expect(sumPairs([6, 8, 3, 4, 5], 10)).toStrictEqual([6, 4])
    expect(sumPairs([3, 5, 7, 2], 10)).toStrictEqual([3, 7])
    expect(sumPairs([3, 9, 7, 5, 10], 15)).toStrictEqual([5, 10])
    expect(sumPairs([0, 2, 2, 3, -1, 1, 5], 6)).toStrictEqual([1, 5])
    expect(sumPairs([6, 7, 1, 2], 8)).toStrictEqual([6, 2])
  })

  // no aporta valor porque ya esta cubierto en el 4 test
  // it('if will not find the pair of number, must return null', () => {
  //   expect(sumPairs([-3, -2, 7, -5], 10)).toBeNull()
  // })
})

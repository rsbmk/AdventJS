import { describe, expect, it } from 'vitest'
import { maxProfit } from './criptomoneda'

describe('08 criptomonedas', () => {
  it('maxProfit must be a function', () => {
    expect(maxProfit).toBeTypeOf('function')
  })

  it('sould throw error if the parameter not is an Array', () => {
    expect(() => maxProfit('')).toThrow()
    expect(() => maxProfit(1)).toThrow()
    expect(() => maxProfit({})).toThrow()
    expect(() => maxProfit(null)).toThrow()
    expect(() => maxProfit(undefined)).toThrow()
    expect(() => maxProfit([])).not.toThrow()
  })

  it('should return 0 if the array is empty', () => {
    expect(maxProfit([])).toBe(0)
  })

  it('should return 0 if the array has only one element', () => {
    expect(maxProfit([1])).toBe(0)
  })

  it('should return 2 if the buy number if 8 and the sale number is 10', () => {
    expect(maxProfit([20, 8, 5, 9, 6, 7, 10])).toBe(2)
  })

  it('should return 9 if the by number is 9 and the sale number is 18', () => {
    expect(maxProfit([20, 9, 6, 7, 10, 18])).toBe(9)
  })

  it('should return 16 if the by number is 18 and the sale number is 34', () => {
    expect(maxProfit([39, 18, 29, 25, 34, 32, 5])).toBe(16)
  })

  it('should return -1 if it does not have gain', () => {
    expect(maxProfit([18, 15, 12, 11, 9, 7])).toBe(-1)
    expect(maxProfit([3, 3, 3, 3, 3])).toBe(-1)
  })
})

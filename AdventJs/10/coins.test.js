import { describe, expect, it } from 'vitest'
import { getCoins } from './coins'

describe('10 coins', () => {
  it('getCoins must be a function', () => {
    expect(getCoins).toBeTypeOf('function')
  })

  it('should throw error if the parameter not is a number', () => {
    expect(() => getCoins()).toThrow()
    expect(() => getCoins('')).toThrow()
    expect(() => getCoins(undefined)).toThrow()
    expect(() => getCoins(false)).toThrow()
    expect(() => getCoins({})).toThrow()
    expect(() => getCoins([])).toThrow()
    expect(() => getCoins(23)).not.toThrow()
  })

  it('should return an array', () => {
    const result = getCoins(23)
    expect(Array.isArray(result)).toBe(true)
  })

  it('should return an Array of 6 elements', () => {
    expect(getCoins(23)).toHaveLength(6)
  })

  it('should return a change of 20 coins', () => {
    expect(getCoins(20)).toEqual([0, 0, 0, 0, 1, 0])
  })

  it('should return a change of 50 coins', () => {
    expect(getCoins(50)).toEqual([0, 0, 0, 0, 0, 1])
  })

  it('should return a change of 70 coins', () => {
    expect(getCoins(70)).toEqual([0, 0, 0, 0, 1, 1])
  })
})

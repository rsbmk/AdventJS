import { describe, expect, it } from 'vitest'
import { missingReindeer } from './missingReindeer'

describe('missing reindeer', () => {
  // it('missingReindeer must be a function', () => {
  //   expect(missingReindeer).toBeTypeOf('function')
  // })

  it('should receive an array of reindeer ids', () => {
    expect(() => missingReindeer()).toThrow()
    expect(() => missingReindeer(1)).toThrow()
    expect(() => missingReindeer('1')).toThrow()
    expect(() => missingReindeer({})).toThrow()
    expect(() => missingReindeer([0])).not.toThrow()
  })

  it('should return a number', () => {
    expect(missingReindeer([0])).toBeTypeOf('number')
  })

  it('if the id of missing if 2, should return 2', () => {
    expect(missingReindeer([0, 1])).toBe(2)
  })

  it('if the id of missing if 4, should return 4', () => {
    expect(missingReindeer([3, 0, 2, 1, 5])).toBe(4)
  })

  it('return the id of the missing reindeer', () => {
    expect(missingReindeer([1, 2, 3, 4, 5])).toBe(0)
    expect(missingReindeer([0, 2, 3])).toBe(1)
    expect(missingReindeer([0, 1])).toBe(2)
    expect(missingReindeer([3, 0, 1])).toBe(2)
    expect(missingReindeer([0])).toBe(1)
    expect(missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1])).toBe(8)
  })
})

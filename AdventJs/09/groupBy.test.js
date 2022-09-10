import { describe, expect, it } from 'vitest'
import { groupBy } from './groupBy'

describe('09 agrupacion en la fabrica', () => {
  it('groupBy must be a function', () => {
    expect(groupBy).toBeTypeOf('function')
  })

  it('should throw error if the first parameter not is an array', () => {
    expect(() => groupBy('')).toThrow()
    expect(() => groupBy(1)).toThrow()
    expect(() => groupBy({})).toThrow()
    expect(() => groupBy(null)).toThrow()
    expect(() => groupBy(undefined)).toThrow()
  })

  it('should throw error if the second parameter not is a function or a string', () => {
    expect(() => groupBy([], false)).toThrow()
    expect(() => groupBy([], 1)).toThrow()
    expect(() => groupBy([], {})).toThrow()
    expect(() => groupBy([], null)).toThrow()
    expect(() => groupBy([], undefined)).toThrow()
  })

  it('should return an object', () => {
    expect(groupBy([], () => {})).toBeTypeOf('object')
  })

  it('should return an object empty if the array is empty', () => {
    expect(groupBy([], () => {})).toEqual({})
  })

  it('should return a grouped object when the second parameter is a property', () => {
    expect(groupBy(['one', 'two', 'three'], 'length')).toEqual({ 3: ['one', 'two'], 5: ['three'] })
    expect(groupBy([{ age: 23 }, { age: 24 }], 'age')).toEqual({
      23: [{ age: 23 }],
      24: [{ age: 24 }]
    })
  })

  it('should return a grouped object when the second parameter is a function', () => {
    expect(groupBy([6.1, 4.2, 6.3], Math.floor)).toEqual({ 6: [6.1, 6.3], 4: [4.2] })
    expect(
      groupBy([1397639141184, 1363223700000], (timestamp) => new Date(timestamp).getFullYear())
    ).toEqual({ 2014: [1397639141184], 2013: [1363223700000] })
  })
})

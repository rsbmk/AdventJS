import { describe, expect, it } from 'vitest'
import { daysToXmas } from './crismasDay'

describe('05 crismas day', () => {
  it('daysToXmas to be a function', () => {
    expect(daysToXmas).toBeTypeOf('function')
  })

  it('should throw error if daysToXmas not receives a Date as parameter', () => {
    expect(() => daysToXmas()).toThrow()
    expect(() => daysToXmas(23)).toThrow()
    expect(() => daysToXmas('')).toThrow()
    expect(() => daysToXmas({})).toThrow()
    expect(() => daysToXmas([])).toThrow()
  })

  it('should return a number', () => {
    expect(daysToXmas(new Date())).toBeTypeOf('number')
  })

  it('should return 24 if the date if "Dec 1, 2021"', () => {
    expect(daysToXmas(new Date('Dec 1, 2021'))).toBe(24)
  })

  it('should consider the time of date', () => {
    expect(daysToXmas(new Date('Dec 24, 2021 00:00:01'))).toBe(1)
  })

  it('shoul return a negative number if is a future date', () => {
    expect(daysToXmas(new Date('Dec 26, 2021'))).toBe(-1)
  })
})

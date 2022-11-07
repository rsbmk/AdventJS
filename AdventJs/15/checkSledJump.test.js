import { describe, expect, it } from 'vitest'
import { checkSledJump } from './checkSledJump'

describe('check sled jump', () => {
  // it('check sled jump must be a function', () => {
  //   expect(checkSledJump).toBeTypeOf('function')
  // })

  it('should receive an array of numbers', () => {
    expect(() => checkSledJump()).toThrow()
    expect(() => checkSledJump(1)).toThrow()
    expect(() => checkSledJump('1')).toThrow()
    expect(() => checkSledJump({})).toThrow()
  })

  it('should return a erros if the arrays is less than 3', () => {
    expect(() => checkSledJump([0])).toThrow()
    expect(() => checkSledJump([0, 1])).toThrow()
    expect(() => checkSledJump([0, 4, 1])).not.toThrow()
    expect(() => checkSledJump([0, 4, 2, 1])).not.toThrow()
  })

  it('should return a boolean', () => {
    expect(checkSledJump([0, 4, 1])).toBeTypeOf('boolean')
  })

  it('should return true, if it goes up and down correctly', () => {
    expect(checkSledJump([0, 1, 0])).toBe(true)
    expect(checkSledJump([0, 1000, 1])).toBe(true)
    expect(checkSledJump([0, 1, 0])).toBe(true)
    expect(checkSledJump([1, 2, 3, 2, 1])).toBe(true)
  })

  it('should return false if it does down', () => {
    expect(checkSledJump([0, 1, 2, 3, 4])).toBe(false)
    expect(checkSledJump([0, 1, 2])).toBe(false)
    expect(checkSledJump([1, 2, 3])).toBe(false)
  })

  it('should return false if it does up strictly', () => {
    expect(checkSledJump([2, 4, 4, 6, 2])).toBe(false)
    expect(checkSledJump([1, 2, 3, 2, 1, 2, 3])).toBe(false)
  })
})

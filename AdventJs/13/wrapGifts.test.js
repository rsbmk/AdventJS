import { describe, expect, it } from 'vitest'
import { wrapGift } from './wrapGifts'

describe('wrap gifts - challenge 13', () => {
  // it('wrapGift must be a function', () => {
  //   expect(typeof wrapGift).toBe('function')
  // })

  it('wrap Gift receives an Array else throw an error', () => {
    expect(() => wrapGift('gift')).toThrow()
    expect(() => wrapGift(1)).toThrow()
    expect(() => wrapGift({})).toThrow()
    expect(() => wrapGift(null)).toThrow()
    expect(() => wrapGift(undefined)).toThrow()
    expect(() => wrapGift()).toThrow()
  })

  it('if the array is empty, should return an empty array', () => {
    expect(wrapGift([])).toEqual([])
  })

  // it('should return an array', () => {
  //   expect(Array.isArray(wrapGift(['👨🏽‍💻']))).toBe(true)
  // })

  it('should return an array with one wrapped gift', () => {
    expect(wrapGift(['🎁'])).toEqual(['****', '*🎁*', '****'])
  })

  it('should return an array with two wrapped gift', () => {
    expect(wrapGift(['🎁', '📓'])).toEqual(['****', '*🎁*', '*📓*', '****'])
    expect(wrapGift(['📷', '⚽️'])).toEqual(['****', '*📷*', '*⚽️*', '****'])
    expect(wrapGift(['🏈🎸', '🎮🧸'])).toEqual(['******', '*🏈🎸*', '*🎮🧸*', '******'])
  })
})

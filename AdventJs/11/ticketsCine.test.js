import { describe, expect, it } from 'vitest'
import { shouldBuyFidelity } from './ticketsCine'

describe('11 entradas del cine', () => {
  it('shouldBuyFidelity must be a function', () => {
    expect(shouldBuyFidelity).toBeTypeOf('function')
  })

  it('throw error if the parameter not is a number', () => {
    expect(() => shouldBuyFidelity()).toThrow()
    expect(() => shouldBuyFidelity('')).toThrow()
    expect(() => shouldBuyFidelity([])).toThrow()
    expect(() => shouldBuyFidelity({})).toThrow()
    expect(() => shouldBuyFidelity(undefined)).toThrow()
    expect(() => shouldBuyFidelity(false)).toThrow()
    expect(() => shouldBuyFidelity(23)).not.toThrow()
  })

  it('should return a boolean', () => {
    expect(shouldBuyFidelity(23)).toBeTypeOf('boolean')
  })

  it('should return false when it is not convenient to buy the loyalty card', () => {
    expect(shouldBuyFidelity(1)).toBe(false)
    expect(shouldBuyFidelity(20)).toBe(false)
  })

  it('should return true when is convenient to buy the loyalty card', () => {
    expect(shouldBuyFidelity(100)).toBe(true)
    expect(shouldBuyFidelity(50)).toBe(true)
    expect(shouldBuyFidelity(30)).toBe(true)
  })
})

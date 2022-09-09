import { describe, it, expect } from 'vitest'
import { isValid } from './validLetter'

describe('03 is valid letter', () => {
  // it('isValid should be a function', () => {
  //   expect(isValid).toBeTypeOf('function')
  // })

  it('should throw an error if the parameter is not a string', () => {
    expect(() => isValid()).toThrow()
    expect(() => isValid(23)).toThrow()
    expect(() => isValid({})).toThrow()
    expect(() => isValid([])).toThrow()
  })

  it('shoul throw error if the string is empty', () => {
    expect(() => isValid('')).toThrow()
  })

  // it('should return a boolean', () => {
  //   expect(isValid('hola')).toBeTypeOf('boolean')
  // })

  it('should return false if receives a [] as parameter', () => {
    const letter = 'muñeca [consola ]bici'
    const letter2 = 'muñeca [consola bici'
    const letter3 = 'peluche (bici [coche) bici coche balón'

    expect(isValid(letter)).toBe(false)
    expect(isValid(letter2)).toBe(false)
    expect(isValid(letter3)).toBe(false)
  })

  it('should return false if receives a {} as parameter', () => {
    const letter = 'muñeca {consola }bici'
    const letter2 = 'muñeca {consola bici'
    const letter3 = '(peluche {) bici'

    expect(isValid(letter)).toBe(false)
    expect(isValid(letter2)).toBe(false)
    expect(isValid(letter3)).toBe(false)
  })

  it('should return false if receives an incomplete parentheses', () => {
    const letter = 'bici coche (balón bici coche'
    expect(isValid(letter)).toBe(false)
  })

  it('should return false if the parentheses is empty', () => {
    const letter = '() bici'
    expect(isValid(letter)).toBe(false)
  })

  it('should return false if parentheses are reversed', () => {
    const letter = ')bici( casa play'
    expect(isValid(letter)).toBe(false)
  })
})

import { describe, expect, it } from 'vitest'
import { filterSheep } from './sheep'

describe('01 - filter sheep', () => {
  // it('filterSheep should be a function', () => {
  //   expect(filterSheep).toBeTypeOf('function')
  // })

  it('throw error if not recives parameters', () => {
    expect(() => filterSheep()).toThrow()
  })

  it('should throw an error if it does not receive an array as a parameter', () => {
    expect(() => filterSheep('sheep')).toThrow()
    expect(() => filterSheep(34)).toThrow()
    expect(() => filterSheep({})).toThrow()
  })

  it('should return a Array always', () => {
    const res = filterSheep([])
    expect(res).toBeTruthy()
    expect(res.length >= 0).toBeTruthy()
  })

  it('should contain the letter "n" and "a" in the name sheep', () => {
    const sheeps = [
      { name: 'Anni', color: 'rojo' },
      { name: 'Aleja', color: 'yellow' },
      { name: 'Maria', color: 'red' }
    ]

    expect(filterSheep(sheeps)).toHaveLength(1)
    expect(filterSheep(sheeps)).toContainEqual(sheeps[0])
  })

  it('should return 2 sheeps', () => {
    const sheeps = [
      { name: 'Noa', color: 'azul' },
      { name: 'Euge', color: 'rojo' },
      { name: 'Navidad', color: 'rojo' },
      { name: 'Ki Na Ma', color: 'rojo' },
      { name: 'AAAAAaaaaa', color: 'rojo' },
      { name: 'Nnnnnnnn', color: 'rojo' }
    ]

    expect(filterSheep(sheeps)).toHaveLength(2)
  })
})

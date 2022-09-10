import { describe, expect, it } from 'vitest'
import { contains } from './almacen'

describe('07 almacen', () => {
  it('contains must be a function', () => {
    expect(contains).toBeTypeOf('function')
  })

  it('throw Error if the first parameter that receives not be a object', () => {
    expect(() => contains()).toThrow()
    expect(() => contains('')).toThrow()
    expect(() => contains(2)).toThrow()
    expect(() => contains([])).toThrow()
    expect(() => contains(false)).toThrow()
    expect(() => contains({}, '')).not.toThrow()
  })

  it('throw error if the second parameter that receives not be a string', () => {
    expect(() => contains({}, 23)).toThrow()
    expect(() => contains({}, [])).toThrow()
    expect(() => contains({}, true)).toThrow()
    expect(() => contains({})).toThrow()
    expect(() => contains({}, '')).not.toThrow()
  })

  it('the contains function must return a boolean', () => {
    expect(contains({}, '')).toBeTypeOf('boolean')
  })

  it('should return false if the store is empty', () => {
    expect(contains({}, 'camiseta')).toBe(false)
  })

  it('should return false if the product is empty', () => {
    const store = {
      algo: 'algo mas'
    }
    expect(contains(store, '')).toBe(false)
  })

  it('should find the product in the first level', () => {
    const store = {
      almacen: 'jean',
      almacen2: {
        caja: 'zapatos'
      }
    }
    expect(contains(store, 'jean')).toBe(true)
  })

  it('sould find the product in the second level', () => {
    const store = {
      almacen: 'jean',
      almacen2: {
        caja: 'zapatos'
      }
    }
    expect(contains(store, 'zapatos')).toBe(true)
  })

  it('should find the product in the third level', () => {
    const store = {
      almacen: 'jean',
      almacen2: {
        caja: 'zapatos',
        caja2: {
          bolsa: 'camiseta'
        }
      }
    }
    expect(contains(store, 'camiseta')).toBe(true)
  })

  it('should return false if the product not be in the store', () => {
    const store = {
      almacen: 'jean',
      almacen2: {
        caja: 'zapatos',
        caja2: {
          bolsa: 'camiseta'
        }
      }
    }
    expect(contains(store, 'pantalon')).toBe(false)
  })
})

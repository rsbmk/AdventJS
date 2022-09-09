import { describe, expect, it } from 'vitest'
import { listGifts } from './listGift'

describe.only('02 List gifts', () => {
  it('listGifts must be a function and receives a string as parameter', () => {
    expect(listGifts).toBeTypeOf('function')
    expect(() => listGifts()).toThrow()
    expect(() => listGifts(32)).toThrow()
    expect(() => listGifts({})).toThrow()
    expect(() => listGifts([])).toThrow()
  })

  it('should throw a error if the string if empty', () => {
    expect(() => listGifts('')).toThrow()
  })

  // it('Separate the card by space and return one item from each of the unique gifts', () => {
  //   const carta = 'bici coche balón _playstation bici coche peluche'

  //   expect(listGifts(carta)).toStrictEqual({ bici: 2, coche: 2, balón: 1, _playstation: 1, peluche: 1 })
  // })

  // it('should separate the card by multiple spaces', () => {
  //   const carta = 'bici  coche balón _playstation bici  coche peluche'
  //   expect(listGifts(carta)).toStrictEqual({ bici: 2, coche: 2, balón: 1, _playstation: 1, peluche: 1 })
  // })

  it('filter the items that contain "_"', () => {
    const carta = 'bici  coche balón _playstation bici  coche peluche'

    expect(listGifts(carta)).toStrictEqual({ bici: 2, coche: 2, balón: 1, peluche: 1 })
  })
})

import { describe, expect, it } from 'vitest'

const getMinJump = (obstacles) => {
  if (!Array.isArray(obstacles)) throw new Error('obstacles must be an array')
  if (obstacles.length > 0 && typeof obstacles[0] !== 'number') throw new Error('obstacles must be an array of numbers')

  // if (obstacles[2] === 3) return 4
  // if (obstacles[1] === 2) return 3
  // if (obstacles[0] === 1) return 2

  // return 0

  let minJum = null
  let step = 2
  const findBestJum = step => !obstacles.some(obs => {
    // console.log({ step, obs, res: !(obs % step), calc: obs % step })
    return !(obs % step)
  })

  while (!minJum) {
    const isBestJump = findBestJum(step)
    // console.log('isBestJump', isBestJump)

    if (isBestJump) {
      minJum = step
      return minJum
    }
    step++
  }
}

describe('Min Jump', () => {
  // it('getMinJump must be a function', () => {
  //   expect(typeof getMinJump).toBe('function')
  // })

  // it('should recieve an array of number as arguments', () => {
  //   expect(() => getMinJump(1, 2, 3)).toThrow()
  //   expect(() => getMinJump('1', '2', '3')).toThrow()
  //   expect(() => getMinJump(['1', '2', '3'])).toThrow()
  //   expect(() => getMinJump([1, 2, 3])).not.toThrow()
  // })

  // it('should return a number', () => {
  //   expect(typeof getMinJump([1, 2, 3])).toBe('number')
  // })

  // it('should return 0 if obstacles is empty', () => {
  //   expect(getMinJump([])).toBe(0)
  // })

  // it('should return 1 if has obstacles in the position 1', () => {
  //   expect(getMinJump([1])).toBe(2)
  // })

  // it('should return 2 if has obstacles in the position 2', () => {
  //   expect(getMinJump([1, 2])).toBe(3)
  // })

  it('should return 4 if has obstacles in the position 3', () => {
    // expect(getMinJump([1, 2, 3])).toBe(4)
    expect(getMinJump([5, 3, 6, 7, 9])).toBe(4)
  })
})

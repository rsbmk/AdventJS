import { describe, expect, it } from 'vitest'
import { createXmasTree } from './crismasTree'

describe('04 christmas tree', () => {
  it('createXmasTree to be a function', () => {
    expect(createXmasTree).toBeTypeOf('function')
  })

  it('should throw error if parameter are not a number', () => {
    expect(() => createXmasTree()).toThrow()
    expect(() => createXmasTree('')).toThrow()
    expect(() => createXmasTree({})).toThrow()
    expect(() => createXmasTree([])).toThrow()
  })

  it('should throw error if height are less than 0 or greater than 100', () => {
    expect(() => createXmasTree(-3)).toThrow()
    expect(() => createXmasTree(101)).toThrow()
  })

  it('should width tree of 11 if the heght is 6', () => {
    expect(createXmasTree(6)).toContain('***********')
  })

  it('The width of the tree should be the double of tree height less one', () => {
    expect(createXmasTree(3)).toContain('*****')
    expect(createXmasTree(8)).toContain('***************')
  })

  it('should render the trunk of the tree', () => {
    const trnuk = '____#____\n____#____'
    expect(createXmasTree(5)).toContain(trnuk)
  })

  it('should render the tree top', () => {
    const treeTop = '__*__\n_***_'
    expect(createXmasTree(3)).toContain(treeTop)

    const treeTro2 = '____*____\n___***___\n__*****__\n_*******_'
    expect(createXmasTree(5)).toContain(treeTro2)
  })
})

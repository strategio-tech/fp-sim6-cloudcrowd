const jest = require('@jest/globals')
const sum = require('./sum')

jest.describe('sum module', () => {
  jest.test('adds 1 + 2 to equal 3', () => {
    jest.expect(sum(1, 2)).toBe(3)
  })

  jest.test('adds 1 + 2 to NOT equal 4', () => {
    jest.expect(sum(1, 2)).not.toBe(4)
  })
})

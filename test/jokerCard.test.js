import { JokerCard } from '../src/jokerCard.js'
import { test, expect } from '@jest/globals'

test('create a joker', () => {
  const joker = new JokerCard()

  expect(joker).toBeInstanceOf(JokerCard)
})

test('expect return value to be "Joker"', () => {
  const joker = new JokerCard()

  expect(joker.toString()).toBe('Joker')
})

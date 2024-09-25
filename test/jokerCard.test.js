import { JokerCard } from '../src/jokerCard.js'

test('create a joker', () => {
  const joker = new JokerCard()

  expect(joker).toBeInstanceOf(JokerCard)
})

test('expect return value to be "Joker"', () => {
  const joker = new JokerCaord()

  expect(joker.valueOf()).toBe('Joker')
})
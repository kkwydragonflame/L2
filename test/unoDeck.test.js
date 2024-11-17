import { UnoDeck } from '../src/unoDeck.js'
import { test, expect } from '@jest/globals'

test('create a valid deck', () => {
  const deck = new UnoDeck()

  expect(deck).toBeInstanceOf(UnoDeck)

  expect(deck.cards.length).toBe(108)
})

test('should not be able to add more than valid amount of the same card', () => {
  const deck = new UnoDeck()

  expect(() =>
    deck.addCardToDeck(deck.cards[5], 2)
  ).toThrow('Cannot have more than 2 of the same card in deck.')
})

import { KilleDeck } from '../src/killeDeck'
import { test, expect } from '@jest/globals'

test('create a valid deck', () => {
  const deck = new KilleDeck()

  expect(deck).toBeInstanceOf(KilleDeck)
  expect(deck.cards.length).toBe(42)
})

test('should not be able to add more than two of the same card', () => {
  const deck = new KilleDeck()

  expect(() =>
    deck.addCardToDeck(deck.cards[0], 2)
  ).toThrow('Cannot have more than 2 of the same card in deck.')
})

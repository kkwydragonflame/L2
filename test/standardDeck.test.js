import { StandardDeck } from '../src/standardDeck'
import { JokerCard } from '../src/jokerCard'
import { test, expect } from '@jest/globals'

test('generate a deck of 52 cards', () => {
  const deck = new StandardDeck()

  expect(deck.remainingCards()).toBe(52)
})

test('add jokers to deck', () => {
  const deck = new StandardDeck()

  deck.addJokerToDeck()

  expect(deck.remainingCards()).toBe(54)
  expect(deck.cards[deck.remainingCards() - 1]).toBeInstanceOf(JokerCard)
})

test('should not be able to add a card that already exists in the deck', () => {
  const deck = new StandardDeck()

  const card = deck.cards[0]

  expect(() => deck.addCardToDeck(card, 1)).toThrow('Cannot have more than 1 of the same card in deck.')
})

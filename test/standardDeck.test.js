import { StandardDeck } from '../src/standardDeck'
import { JokerCard } from '../src/jokerCard'
import { test, expect } from '@jest/globals'

test('generate a deck of 52 cards', () => {
  const deck = new StandardDeck()

  expect(deck.remainingCards()).toBe(52)
})

test('add joker to deck', () => {
  const deck = new StandardDeck()

  deck.addJokerToDeck()

  expect(deck.remainingCards()).toBe(53)
  expect(deck.cards[deck.remainingCards() - 1]).toBeInstanceOf(JokerCard)
})

test('should not be able to add a card that already exists in the deck', () => {
  const deck = new StandardDeck()

  const card = deck.cards[0]

  expect(() => deck.addCardToBottomOfDeck(card)).toThrow('Card already exists in deck.')
})

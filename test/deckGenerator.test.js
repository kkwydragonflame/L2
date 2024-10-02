import { DeckGenerator } from '../src/deckGenerator'
import { StandardDeck } from '../src/standardDeck'
import { UnoDeck } from '../src/unoDeck'
import { KilleDeck } from '../src/killeDeck'

test('DeckGenerator generates a standard deck', () => {
  const deck = DeckGenerator.generateDeck('standard')
  expect(deck).toBeDefined()
  expect(deck).toBeInstanceOf(StandardDeck)
  expect(deck.cards.length).toBe(52)
})

test('DeckGenerator generates an uno deck', () => {
  const deck = DeckGenerator.generateDeck('uno')
  expect(deck).toBeDefined()
  expect(deck).toBeInstanceOf(UnoDeck)
  expect(deck.cards.length).toBe(108)
})

test('DeckGenerator generates an kille deck', () => {
  const deck = DeckGenerator.generateDeck('kille')
  expect(deck).toBeDefined()
  expect(deck).toBeInstanceOf(KilleDeck)
  expect(deck.cards.length).toBe(42)
})

test('DeckGenerator throws an error for an invalid deck type', () => {
  expect(() => {
    DeckGenerator.generateDeck('invalid')
  }).toThrowError('Invalid deck type.')
})

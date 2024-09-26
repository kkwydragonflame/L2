import { StandardDeck } from '../src/standardDeck'

test('generate a deck of 52 cards', () => {
  const deck = new StandardDeck()

  expect(deck.cards.length).toBe(52)
})

test('ensure the deck is correctly shuffled', () => {
  const deck = new StandardDeck()

  const unshuffledDeck = [...deck.cards]

  deck.shuffle()

  expect(deck).not.toEqual(unshuffledDeck)
})
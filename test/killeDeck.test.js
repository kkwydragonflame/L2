import { KilleDeck } from '../src/killeDeck'

test('create a valid deck', () => {
  const deck = new KilleDeck()

  expect(deck).toBeInstanceOf(KilleDeck)
  expect(deck.cards.length).toBe(42)
})

test('should not be able to add more than two of the same card', () => {
  const deck = new KilleDeck()

  expect(() => 
    deck.addCardToBottomOfDeck(deck.cards[0])
  ).toThrow('May not have more than two of the same card in deck.')
})
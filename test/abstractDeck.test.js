import { AbstractDeck } from '../src/abstractDeck'
import { StandardDeck } from '../src/standardDeck'

test('should not be able to instantiate an abstract class', () => {
  expect(() => {
    new AbstractDeck()
  }).toThrowError('Abstract class cannot be instantiated.')
})

test('should ensure the deck is correctly shuffled', () => {
  const deck = new StandardDeck()

  const unshuffledDeck = [...deck.cards]

  deck.shuffle()

  let sameOrder = 0

  for(let i = 0; i < deck.remainingCards(); i++) {
    if(deck.cards[i].rank === unshuffledDeck[i].rank && deck.cards[i].suit === unshuffledDeck[i].suit) {
      sameOrder++
    }
  }

  // Less than 30% of the cards may retain their starting position after shuffle for the test to pass.
  expect(sameOrder).toBeLessThan(deck.remainingCards() * 0.3)
})

test('should deal a card from top of deck', () => {
  const deck = new StandardDeck()

  const card = deck.dealCard()

  expect(deck.remainingCards()).toBe(51)

  expect(deck.cards.includes(card)).toBe(false)

  expect(deck.cards[0]).not.toBe(card)
})

test('should deal a card from bottom of deck', () => {
  const deck = new StandardDeck()

  const card = deck.dealCard()

  expect(deck.remainingCards()).toBe(51)

  expect(deck.cards.includes(card)).toBe(false)

  expect(deck.cards[deck.remainingCards() - 1]).not.toBe(card)
})

test('should check remaining cards in deck', () => {
  const deck = new StandardDeck()

  expect(deck.remainingCards()).toBe(52)

  deck.dealCard()

  expect(deck.remainingCards()).toBe(51)
})

test('should notify when the deck is out of cards', () => {
  const deck = new StandardDeck()

  for(let i = 0; i < 52; i++) {
    deck.dealCard()
  }

  expect(deck.dealCard()).toBe('Deck is out of cards.')
})

test('should save the current state of the deck', () => {
  const deck = new StandardDeck()

  deck.saveCurrentState()

  expect(deck.cards).toEqual(deck.originalDeck)
})

test('should reset the deck to its original state', () => {
  const deck = new StandardDeck()

  const copyOfDeck = [...deck.cards]
  
  deck.saveCurrentState()

  deck.dealCard()

  deck.resetDeck()

  expect(deck.remainingCards()).toBe(52)
  expect(deck.cards).toEqual(copyOfDeck)
})
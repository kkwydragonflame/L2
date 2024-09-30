import { StandardDeck } from '../src/standardDeck'
import { JokerCard } from '../src/jokerCard'

test('generate a deck of 52 cards', () => {
  const deck = new StandardDeck()

  expect(deck.remainingCards()).toBe(52)
})

test('ensure the deck is correctly shuffled', () => {
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

test('deal a card from top of deck', () => {
  const deck = new StandardDeck()

  const card = deck.dealCard()

  expect(deck.remainingCards()).toBe(51)

  expect(deck.cards.includes(card)).toBe(false)

  expect(deck.cards[0]).not.toBe(card)
})

test('deal a card from bottom of deck', () => {
  const deck = new StandardDeck()

  const card = deck.dealCard()

  expect(deck.remainingCards()).toBe(51)

  expect(deck.cards.includes(card)).toBe(false)

  expect(deck.cards[deck.remainingCards() - 1]).not.toBe(card)
})

test('check remaining cards in deck', () => {
  const deck = new StandardDeck()

  expect(deck.remainingCards()).toBe(52)

  deck.dealCard()

  expect(deck.remainingCards()).toBe(51)
})

test('reset deck', () => {
  const deck = new StandardDeck()

  const copyOfDeck = [...deck.cards]
  
  deck.createRestorePoint()

  deck.dealCard()

  deck.resetDeck()

  expect(deck.remainingCards()).toBe(52)
  expect(deck.cards).toEqual(copyOfDeck)
})

test('add joker to deck', () => {
  const deck = new StandardDeck()

  deck.addJokerToDeck()

  expect(deck.remainingCards()).toBe(53)
  expect(deck.cards[deck.remainingCards() - 1]).toBeInstanceOf(JokerCard)
})
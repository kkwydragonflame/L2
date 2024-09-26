import { StandardDeck } from '../src/standardDeck'

test('generate a deck of 52 cards', () => {
  const deck = new StandardDeck()

  expect(deck.cards.length).toBe(52)
})

test('ensure the deck is correctly shuffled', () => {
  const deck = new StandardDeck()

  const unshuffledDeck = [...deck.cards]

  deck.shuffle()

  let sameOrder = 0
  let differentOrder = 0

  for(let i = 0; i < deck.cards.length; i++) {
    if(deck.cards[i].rank === unshuffledDeck[i].rank && deck.cards[i].suit === unshuffledDeck[i].suit) {
      sameOrder++
    } else {
      differentOrder++
    }
  }

  expect(differentOrder).toBeGreaterThan(sameOrder)
  //expect(deck.cards).not.toEqual(unshuffledDeck)
})

test.todo('deal a card')

test.todo('check remaining cards in deck')
import { PlayingCard } from '../src/playingCard.js'

test('create a valid card', () => {
  let card = new PlayingCard('♠', 'A')

  expect(card).toBeInstanceOf(PlayingCard)

  expect(card.rank).toBe('A')
  expect(card.suit).toBe('♠')
})

test('create a card with invalid suit', () => {
  expect(() => {
    new PlayingCard('0', 'A')
  }).toThrow('Invalid suit')
})

test('create a card with invalid rank', () => {
  expect(() => {
    new PlayingCard('♠', '25')
  }).toThrow('Invalid rank')
})

test('check card value for face cards', () => {
  let cardJack = new PlayingCard('♥', 'J')
  let cardQueen = new PlayingCard('♥', 'Q')
  let cardKing = new PlayingCard('♥', 'K')

  expect(cardJack.valueOf()).toBe(11)
  expect(cardQueen.valueOf()).toBe(12)
  expect(cardKing.valueOf()).toBe(13)
})
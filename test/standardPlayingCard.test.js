import { StandardPlayingCard } from '../src/standardPlayingCard.js'
import { test, expect } from '@jest/globals'

test('create a valid card', () => {
  const card = new StandardPlayingCard('♠', 'A')

  expect(card).toBeInstanceOf(StandardPlayingCard)

  expect(card.rank).toBe('A')
  expect(card.suit).toBe('♠')
})

test('create a card with invalid suit', () => {
  expect(() => {
    new StandardPlayingCard('0', 'A')
  }).toThrow('Invalid suit')
})

test('create a card with invalid rank', () => {
  expect(() => {
    new StandardPlayingCard('♠', '25')
  }).toThrow('Invalid rank')
})

test('check card value for face cards', () => {
  const cardJack = new StandardPlayingCard('♥', 'J')
  const cardQueen = new StandardPlayingCard('♥', 'Q')
  const cardKing = new StandardPlayingCard('♥', 'K')

  expect(cardJack.valueOf()).toBe(11)
  expect(cardQueen.valueOf()).toBe(12)
  expect(cardKing.valueOf()).toBe(13)
})

test('test immutability of cards', () => {
  const card = new StandardPlayingCard('♥', 'J')

  expect(() => {
    card.rank = '5'
  }).toThrow()

  expect(() => {
    card.suit = '♠'
  }).toThrow()
})

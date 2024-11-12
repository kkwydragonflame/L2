import { UnoCard } from '../src/unoCard.js'
import { test, expect } from '@jest/globals'

test('create a valid card', () => {
  const card = new UnoCard(0, 'red')

  expect(card).toBeInstanceOf(UnoCard)

  expect(card.rank).toBe(0)
  expect(card.colour).toBe('red')
})

test('create a card with invalid colour', () => {
  expect(() => {
    new UnoCard(0, 'pink')
  }).toThrow('Invalid colour')
})

test('create a card with invalid rank', () => {
  expect(() => {
    new UnoCard(25, 'red')
  }).toThrow('Invalid rank')
})

test('ensure special cards are valid', () => {
  const cardWild = new UnoCard('wild')
  const cardWildDrawFour = new UnoCard('wildDrawFour')

  expect(cardWild).toBeInstanceOf(UnoCard)
  expect(cardWildDrawFour).toBeInstanceOf(UnoCard)

  expect(cardWild.rank).toBe('wild')
  expect(cardWildDrawFour.rank).toBe('wildDrawFour')
})

test('test immutability of cards', () => {
  const card = new UnoCard(0, 'red')

  expect(() => {
    card.rank = 5
  }).toThrow()

  expect(() => {
    card.colour = 'blue'
  }).toThrow()
})

test('check toString method', () => {
  const card = new UnoCard(0, 'red')

  expect(card.toString()).toBe('red 0')
})

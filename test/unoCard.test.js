import { UnoCard } from '../src/unoCard.js'
import { test, expect } from '@jest/globals'

test('create a valid card', () => {
  let card = new UnoCard('red', 0)

  expect(card).toBeInstanceOf(UnoCard)

  expect(card.rank).toBe(0)
  expect(card.colour).toBe('red')
})

test('create a card with invalid colour', () => {
  expect(() => {
    new UnoCard('pink', 0)
  }).toThrow('Invalid colour')
})

test('create a card with invalid rank', () => {
  expect(() => {
    new UnoCard('red', 25)
  }).toThrow('Invalid rank')
})

test('ensure special cards are valid', () => {
  let cardWild = new UnoCard('wild', 'wild')
  let cardWildDrawFour = new UnoCard('wild', 'wildDrawFour')

  expect(cardWild).toBeInstanceOf(UnoCard)
  expect(cardWildDrawFour).toBeInstanceOf(UnoCard)

  expect(cardWild.rank).toBe('wild')
  expect(cardWildDrawFour.rank).toBe('wildDrawFour')
})

test('test immutability of cards', () => {
  let card = new UnoCard('red', 0)

  expect(() => {
    card.rank = 5
  }).toThrow()

  expect(() => {
    card.colour = 'blue'
  }).toThrow()
})

test('check toString method', () => {
  let card = new UnoCard('red', 0)

  expect(card.toString()).toBe('red 0')
})
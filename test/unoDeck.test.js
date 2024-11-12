import { UnoDeck } from '../src/unoDeck.js'
import { test, expect } from '@jest/globals'

test('create a valid deck', () => {
  let deck = new UnoDeck()

  expect(deck).toBeInstanceOf(UnoDeck)

  expect(deck.cards.length).toBe(108)
})

test.todo('add method logic')
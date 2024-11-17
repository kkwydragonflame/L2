import { KilleCard } from '../src/killeCard.js'
import { test, expect } from '@jest/globals'

test('create a valid card', () => {
  const card = new KilleCard('harlequin')

  expect(card).toBeInstanceOf(KilleCard)
  expect(card.rank).toBe('harlequin')
})

test('create an invalid card', () => {
  expect(() =>
    new KilleCard('queen')
  ).toThrow('Invalid rank.')
})

test('check card value of face cards', () => {
  const foolCard = new KilleCard('fool')
  const flowerpotCard = new KilleCard('flowerpot')
  const wreathCard = new KilleCard('wreath')
  const tavernCard = new KilleCard('tavern')
  const cavalierCard = new KilleCard('cavalier')
  const swineCard = new KilleCard('swine')
  const hussarCard = new KilleCard('hussar')
  const cuckooCard = new KilleCard('cuckoo')
  const card = new KilleCard('harlequin')

  expect(foolCard.valueOf()).toBe(0)
  expect(flowerpotCard.valueOf()).toBe(0.1)
  expect(wreathCard.valueOf()).toBe(0.2)
  expect(tavernCard.valueOf()).toBe(13)
  expect(cavalierCard.valueOf()).toBe(14)
  expect(swineCard.valueOf()).toBe(15)
  expect(hussarCard.valueOf()).toBe(16)
  expect(cuckooCard.valueOf()).toBe(17)
  expect(card.valueOf()).toBe(18)
})

test('test immutability of cards', () => {
  const card = new KilleCard('harlequin')

  expect(() => {
    card.rank = '5'
  }).toThrow()
})

test('test toString method', () => {
  const card = new KilleCard('harlequin')

  expect(card.toString()).toBe('harlequin')
})

import { StandardPlayingCard } from './standardPlayingCard.js'
import { StandardDeck } from './standardDeck.js'
import { UnoDeck } from './unoDeck.js'

let card = new StandardPlayingCard('♠', 'A')

console.log(card)

let deck = new StandardDeck()

console.log(deck)
console.log(deck.cards.length)

let unshuffledDeck = [...deck.cards]

deck.shuffle()

console.log(unshuffledDeck)

const unoDeck = new UnoDeck()
console.log(...unoDeck.cards.toString())
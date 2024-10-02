import { DeckGenerator } from './deckGenerator.js'

const standardDeck = DeckGenerator.generateDeck('standard')

standardDeck.addJokerToDeck()

standardDeck.shuffle()

console.log(standardDeck.remainingCards())

let card = standardDeck.dealCard()

console.log(card.rank, card.suit)

const unoDeck = DeckGenerator.generateDeck('uno')

console.log(unoDeck.dealCard().toString())

const killeDeck = DeckGenerator.generateDeck('kille')

const cardsOnHand = []
for(let i = 0; i < 7; i++) {
  cardsOnHand.push(killeDeck.dealCard().toString())
}

console.log(cardsOnHand)
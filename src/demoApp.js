// This is a simple demo that demonstrates how to use the deckGenerator.js file.

// First, we import the DeckGenerator class from deckGenerator.js.
import { DeckGenerator } from './deckGenerator.js'

// This will generate a deck of 52 standard playing cards.
const standardDeck = DeckGenerator.generateDeck('standard')

// If you wish to add jokers to the deck, you can do so like this:
standardDeck.addJokerToDeck()

// This will shuffle the deck.
standardDeck.shuffle()

console.log(standardDeck.remainingCards())

// This will deal a card from the deck.
const card = standardDeck.dealCard()

console.log(card.rank, card.suit)

// This will generate a deck of 108 Uno cards.
const unoDeck = DeckGenerator.generateDeck('uno')

console.log(unoDeck.dealCard().toString())

// This will generate a deck for the card game Kille.
const killeDeck = DeckGenerator.generateDeck('kille')

// This will deal 7 cards to a player.
const cardsOnHand = []
for (let i = 0; i < 7; i++) {
  cardsOnHand.push(killeDeck.dealCard().toString())
}

console.log(cardsOnHand)

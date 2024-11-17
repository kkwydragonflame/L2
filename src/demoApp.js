// This is a simple demo that demonstrates how to use the deckGenerator.js file, and some of functionality of the classes that it imports.

// First, we import the DeckGenerator class from deckGenerator.js.
import { DeckGenerator } from './deckGenerator.js'

// This will generate a deck of 52 standard playing cards.
const standardDeck = DeckGenerator.generateDeck('standard')

// If you wish to add jokers to the deck, you can do so like this:
standardDeck.addJokerToDeck()

// This will shuffle the deck.
standardDeck.shuffle()

// This will return the number of cards remaining in the deck.
console.log(standardDeck.remainingCards())

// This will deal a card from the deck.
const card = standardDeck.dealCard()

// This will log the rank and suit of the card that was dealt.
console.log(card.rank, card.suit)

// This will generate a deck of 108 Uno cards.
const unoDeck = DeckGenerator.generateDeck('uno')

unoDeck.addCardToDeck(unoDeck.cards[0], 2)

// This will print the string representation of the card that was dealt.
console.log(unoDeck.dealCard().toString())

// This will generate a deck for the card game Kille.
const killeDeck = DeckGenerator.generateDeck('kille')

// This will deal 7 cards to a player.
const cardsOnHand = []
for (let i = 0; i < 7; i++) {
  cardsOnHand.push(killeDeck.dealCard().toString())
}
console.log(cardsOnHand)

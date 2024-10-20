/**
 * A standard deck of 52 playing cards. Options to add jokers to deck.
 * @author Johanna Eriksson <je224gs@student.lnu.se>
 * @version 1.0.0
 */

import { AbstractDeck } from './abstractDeck.js'
import { StandardPlayingCard } from './standardPlayingCard.js'
import { JokerCard } from './jokerCard.js'

export class StandardDeck extends AbstractDeck {
  constructor() {
    super()
    for (const suit of StandardPlayingCard.validSuits) {
      for (const rank of StandardPlayingCard.validRanks) {
        this.addCardToBottomOfDeck(new StandardPlayingCard(suit, rank))
      }
    }
  }

  /**
   * Adds two jokers to the deck. May not have more than two jokers in deck.
   */
  addJokerToDeck() {
    const jokerCount = this.cards.reduce((count, card) => {
      return card instanceof JokerCard ? count++ : count
    }, 0)

    if (jokerCount < 2) {
      this.addCardToBottomOfDeck(new JokerCard())
    } else {
      throw new Error('Cannot add more than two jokers to deck.')
    }
  }

  /**
   * Adds a card to the bottom of the deck. May not have more than one of the same card in deck.
   * @param {*} card - The card to add to the deck.
   */
  addCardToBottomOfDeck(card) {
    if (this.#doesCardExistInDeck(card)) {
      throw new Error('Card already exists in deck.')
    } else {
      super.addCardToBottomOfDeck(card)
    }
  }

  #doesCardExistInDeck(card) {
    return this.cards.some(existingCard =>
      existingCard.suit === card.suit && existingCard.rank === card.rank
    )
  }

  //
}

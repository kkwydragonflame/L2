/**
 * A standard deck of 52 playing cards. Options to add jokers to deck.
 * @author Johanna Eriksson <je224gs@student.lnu.se>
 * @version 2.0.0
 */

import { AbstractDeck } from './abstractDeck.js'
import { StandardPlayingCard } from './standardPlayingCard.js'
import { JokerCard } from './jokerCard.js'

export class StandardDeck extends AbstractDeck {
  constructor() {
    super()
    for (const suit of StandardPlayingCard.validSuits) {
      for (const rank of StandardPlayingCard.validRanks) {
        this.addCardToDeck(new StandardPlayingCard(suit, rank))
      }
    }
  }

  /**
   * Adds two jokers to the deck. May not have more than two jokers in deck.
   */
  addJokerToDeck() {
    const jokerCount = this.cards.filter(card => card instanceof JokerCard).length

    if (jokerCount > 2) {
      throw new Error('Cannot have more than two jokers to deck.')
    } else {
      const jokersToAdd = 2 - jokerCount
      for (let i = 0; i < jokersToAdd; i++) {
        this.addCardToDeck(new JokerCard())
      }
    }
  }

  #checkDuplicates(card, maxDuplicates) {
    const cardCount = this.cards.reduce((count, existingCard) => {
      return (existingCard.rank === card.rank && existingCard.suit === card.suit) ? count + 1 : count
    }, 0)
    return cardCount >= maxDuplicates
  }
}

/**
 * @author Johanna Eriksson <je224gs@student.lnu.se>
 * @version 1.0.0
 */

import { AbstractDeck } from './abstractDeck.js'
import { StandardPlayingCard } from './standardPlayingCard.js'
import { JokerCard } from './jokerCard.js'

export class StandardDeck extends AbstractDeck {
  constructor() {
    super()
    for(const suit of StandardPlayingCard.validSuits) {
      for(const rank of StandardPlayingCard.validRanks) {
        this.addCardToBottomOfDeck(new StandardPlayingCard(suit, rank))
      }
    }
  }

  addJokerToDeck() {
    const jokerCount = this.cards.reduce((count, card) => {
      return card instanceof JokerCard ? count++ : count
    }, 0)

    if(jokerCount < 2) {
      this.addCardToBottomOfDeck(new JokerCard())
    } else {
      throw new Error('Cannot add more than two jokers to deck')
    }
  }

  // add method, to add a card to deck. check for duplicates validation.

  //
}
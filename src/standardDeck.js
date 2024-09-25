/**
 * @author Johanna Eriksson <je224gs@student.lnu.se>
 * @version 1.0.0
 */

import { AbstractDeck } from './abstractDeck.js'
import { StandardPlayingCard } from './standardPlayingCard.js'

export class StandardDeck extends AbstractDeck {
  constructor() {
    super()
    for(const suit of StandardPlayingCard.validSuits) {
      for(const rank of StandardPlayingCard.validRanks) {
        this.deck.push(new StandardPlayingCard(suit, rank))
      }
    }
  }
}
/**
 * @author Johanna Eriksson <je224gs@student.lnu.se>
 * @version 1.0.0
 */

import { StandardPlayingCard } from './standardPlayingCard.js'

export class StandardDeck {
  deck = []

  constructor() {
    for(suit of StandardPlayingCard) {
      for(rank of StandardPlayingCard) {
        this.deck.push(new StandardPlayingCard(suit, rank))
      }
    }
  }
}
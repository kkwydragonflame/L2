/**
 * @author Johanna Eriksson <je224gs@student.lnu.se>
 * @version 1.0.0
 */

import { StandardPlayingCard } from './standardPlayingCard.js'

export class StandardDeck {
  deck = []

  constructor() {
    //Change rank and suits to constants in PlayingCard class for easier deck generation.
    for(suit of StandardPlayingCard) {
      for(rank of StandardPlayingCard) {
        this.deck.push(new StandardPlayingCard(suit, rank))
      }
    }
  }
}
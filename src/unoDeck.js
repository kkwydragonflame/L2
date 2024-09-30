/**
 * An UNO deck of 108 cards. Does not include the extra cards from 2018 onwards.
 * @author Johanna Eriksson <je224gs@student.lnu.se>
 * @version 1.0.0
 */

import { AbstractDeck } from './abstractDeck.js';
import { UnoCard } from './unoCard.js'

export class UnoDeck extends AbstractDeck {
  constructor() {
    super()
    for(const colour of UnoCard.validColours) {
      for(const rank of UnoCard.validRanks) {
        if (rank === 0) {
          this.addCardToBottomOfDeck(new UnoCard(colour, rank))
        } else {
          this.addCardToBottomOfDeck(new UnoCard(colour, rank))
          this.addCardToBottomOfDeck(new UnoCard(colour, rank))
        }
      }
    }
    for(let i = 0; i < 4; i++) {
      this.addCardToBottomOfDeck(new UnoCard('wild', 'wild'))
      this.addCardToBottomOfDeck(new UnoCard('wild', 'wildDrawFour'))
    }
  }
}
/**
 * An UNO deck of 108 cards. Does not include the extra cards from 2018 onwards.
 * @author Johanna Eriksson <je224gs@student.lnu.se>
 * @version 2.0.0
 */

import { AbstractDeck } from './abstractDeck.js'
import { UnoCard } from './unoCard.js'

export class UnoDeck extends AbstractDeck {
  constructor() {
    super()
    for (const rank of UnoCard.validRanks) {
      for (const colour of UnoCard.validColours) {
        if (rank === 0) {
          this.addCardToDeck(new UnoCard(colour, rank))
        } else {
          this.addCardToDeck(new UnoCard(colour, rank), 2)
          this.addCardToDeck(new UnoCard(colour, rank), 2)
        }
      }
    }
    for (const special of UnoCard.specialCards) {
      for (let i = 0; i < 4; i++) {
        this.addCardToDeck(new UnoCard(special), 4)
      }
    }
  }

  #checkDuplicates(card, maxDuplicates) {
    const cardCount = this.cards.reduce((count, existingCard) => {
      if (card.isSpecial) {
        return (existingCard.rank === card.rank) ? count + 1 : count
      } else {
        return (existingCard.colour === card.colour && existingCard.rank === card.rank) ? count + 1 : count
      }
    }, 0)
    return cardCount >= maxDuplicates
  }
}

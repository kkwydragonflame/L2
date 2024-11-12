/**
 * @author Johanna Eriksson <je224gs@student.lnu.se>
 * @version 2.0.0
 */

import { AbstractDeck } from './abstractDeck.js'
import { KilleCard } from './killeCard.js'

export class KilleDeck extends AbstractDeck {
  constructor() {
    super()
    for (const rank of KilleCard.validRanks) {
      this.addCardToDeck(new KilleCard(rank), 2)
      this.addCardToDeck(new KilleCard(rank), 2)
    }
  }

  // /**
  //  * Adds a card to the bottom of the deck. May not have more than two of the same card in deck.
  //  * @param {*} card - The card to add to the deck.
  //  */
  // addCardToBottomOfDeck(card) {
  //   if (this.#doesTwoCardsExistInDeck(card)) {
  //     throw new Error('May not have more than two of the same card in deck.')
  //   } else {
  //     super.addCardToBottomOfDeck(card, 2)
  //   }
  // }

  #checkDuplicates(card, maxDuplicates) {
    const cardCount = this.cards.reduce((count, existingCard) => {
      return (existingCard.rank === card.rank) ? count + 1 : count
    }, 0)
    return cardCount >= maxDuplicates
  }
}

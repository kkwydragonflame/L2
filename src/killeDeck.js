/**
 * @author Johanna Eriksson <je224gs@student.lnu.se>
 * @version 1.0.0
 */

import { AbstractDeck } from './abstractDeck';
import { KilleCard } from './killeCard'

export class KilleDeck extends AbstractDeck {
  constructor() {
    super()
    for(const rank of KilleCard.validRanks) {
      this.addCardToBottomOfDeck(new KilleCard(rank))
      this.addCardToBottomOfDeck(new KilleCard(rank))
    }
  }

  addCardToBottomOfDeck(card) {
    if (this.#doesTwoCardsExistInDeck(card)) {
      throw new Error('May not have more than two of the same card in deck.')
    } else {
      super.addCardToBottomOfDeck(card)
    }
  }

  #doesTwoCardsExistInDeck(card) {
    return this.cards.filter(existingCard => existingCard.rank === card.rank).length >= 2
  }
}
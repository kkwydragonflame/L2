/**
 * Base class for all card decks.
 * @author Johanna Eriksson <je224gs@student.lnu.se>
 * @version 1.0.0
 */

export class AbstractDeck {
  cards

  constructor() {
    this.cards = []
  }

  shuffle() {
    // Fisher-Yates shuffle algorithm.
    for(let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));

      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]
    }
  }

  drawCard() {
    //refactor to tertiary operator
    if (this.cards.length <= 0) {
      return 'Deck is out ofcards.'
    } else {
      return this.cards.shift()
    }
  }

  remainingCards() {
    return this.cards.length
  }
}
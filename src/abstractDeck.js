/**
 * Base class for all card decks.
 * @author Johanna Eriksson <je224gs@student.lnu.se>
 * @version 1.0.0
 */

export class AbstractDeck {
  constructor() {
    this.deck = []
  }

  shuffle() {
    // good shuffle algorithm?
  }

  drawCard() {
    //refactor to tertiary operator
    if (this.deck.length <= 0) {
      return 'Deck is out of cards.'
    } else {
      return this.deck.shift()
    }
  }

  remainingCards() {
    return this.deck.length
  }
}
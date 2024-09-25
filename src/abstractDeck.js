/**
 * Base class for all card decks.
 * @author Johanna Eriksson <je224gs@student.lnu.se>
 * @version 1.0.0
 */

class AbstractDeck {
  constructor() {
    this.deck = []
  }

  shuffle() {}

  drawCard() {}

  remainingCards() {
    return this.deck.length
  }
}
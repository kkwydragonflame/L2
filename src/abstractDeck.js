/**
 * Base class for all card decks.
 * @author Johanna Eriksson <je224gs@student.lnu.se>
 * @version 1.0.0
 */

export class AbstractDeck {
  #cards
  #originalDeck

  constructor() {
    if (this.constructor === AbstractDeck) {
      throw new Error('Abstract class cannot be instantiated.')
    }
    this.#cards = []
    this.#originalDeck = []
  }

  get cards() {
    return [...this.#cards]
  }

  get originalDeck() {
    return [...this.#originalDeck]
  }

  addCardToTopOfDeck(card) {
    this.#cards.unshift(card)
  }

  addCardToBottomOfDeck(card) {
    this.#cards.push(card)
  }

  shuffle() {
    // Fisher-Yates shuffle algorithm.
    for(let i = this.#cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));

      [this.#cards[i], this.#cards[j]] = [this.#cards[j], this.#cards[i]]
    }
  }

  dealCard() {
    return this.#cards.length <= 0 ? 'Deck is out of cards.' : this.#cards.shift()
  }

  remainingCards() {
    return this.#cards.length
  }

  saveCurrentState() {
    this.#originalDeck = [...this.#cards]
  }

  resetDeck() {
    if(this.#originalDeck.length === 0) {
      throw new Error('No state saved. Please save state before resetting deck.')
    }
    this.#cards = [...this.#originalDeck]
  }
}
/**
 * Base class for all card decks.
 * @author Johanna Eriksson <je224gs@student.lnu.se>
 * @version 1.0.0
 */

export class AbstractDeck {
  #cards
  #originalState

  constructor() {
    if (this.constructor === AbstractDeck) {
      throw new Error('Abstract class cannot be instantiated.')
    }
    this.#cards = []
    this.#originalState = []
  }

  get cards() {
    return [...this.#cards]
  }

  addCardToTopOfDeck(card) {
    this.#cards.unshift(card)
  }

  addCardToBottomOfDeck(card) {
    this.#cards.push(card)
  }

  shuffle() {
    // Fisher-Yates shuffle algorithm.
    for (let i = this.#cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [this.#cards[i], this.#cards[j]] = [this.#cards[j], this.#cards[i]]
    }
  }

  dealCard() {
    return this.#cards.length <= 0 ? 'Deck is out of cards.' : this.#cards.shift()
  }

  remainingCards() {
    return this.#cards.length
  }

  /**
   * Saves the current state of the deck by creating a copy.
   */
  saveCurrentState() {
    this.#originalState = [...this.#cards]
  }

  /**
   * Resets the deck to the state saved by saveCurrentState.
   */
  resetDeck() {
    if (this.#originalState.length === 0) {
      throw new Error('No state saved. Please save state before resetting deck.')
    }
    this.#cards = [...this.#originalState]
  }
}

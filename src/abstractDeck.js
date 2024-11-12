/**
 * Base class for all card decks.
 * @author Johanna Eriksson <je224gs@student.lnu.se>
 * @version 2.0.0
 */

import { EmptyDeckError } from './EmptyDeckError'

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

  addCardToDeck(card, maxDuplicates = 1) {
    if (this.#checkDuplicates(card, maxDuplicates)) {
      throw new Error(`Cannot have more than ${maxDuplicates} of the same card in deck.`)
    } else {
      this.#cards.push(card)
    }
  }

  #checkDuplicates(card, maxDuplicates) {
    throw new Error('Method must be implemented by subclass.')
  }

  shuffle() {
    // Fisher-Yates shuffle algorithm.
    for (let i = this.#cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [this.#cards[i], this.#cards[j]] = [this.#cards[j], this.#cards[i]]
    }
  }

  dealCard() {
    if (this.#cards.length <= 0) {
      throw new EmptyDeckError()
    }
    return this.#cards.shift()
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

  get cards() {
    return [...this.#cards]
  }
}

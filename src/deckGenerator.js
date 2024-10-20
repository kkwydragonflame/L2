/**
 * The main module for generating card decks. Exports the function generateDeck.
 * @author Johanna Eriksson <je224gs@student.lnu.se>
 * @version 1.0.0
 */

import { StandardDeck } from './standardDeck.js'
import { UnoDeck } from './unoDeck.js'
import { KilleDeck } from './killeDeck.js'

export class DeckGenerator {
  /**
   * Generates a deck of cards based on the deck type.
   * @param {string} deckType - The type of deck to generate.
   * @returns {AbstractDeck} - A deck of cards.
   * @throws {Error} - Invalid deck type.
   */
  static generateDeck (deckType) {
    switch (deckType) {
      case 'standard':
        // How to deal with jokers? Add a new deck type? Have user add jokers manually?
        return new StandardDeck()
      case 'uno':
        return new UnoDeck()
      case 'kille':
        return new KilleDeck()
      default:
        throw new Error('Invalid deck type.')
    }
  }
}

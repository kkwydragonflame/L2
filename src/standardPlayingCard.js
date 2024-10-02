/**
 * @author Johanna Eriksson <je224gs@student.lnu.se>
 * @version 1.0.1
 */

export class StandardPlayingCard {
  static validSuits = Object.freeze(['♠', '♣', '♥', '♦'])
  static validRanks = Object.freeze(['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'])

  #suit
  #rank

  constructor(suit, rank) {
    this.#setSuit(suit)
    this.#setRank(rank)
  }

  #setSuit(suit) {
    if (StandardPlayingCard.validSuits.includes(suit)) {
      this.#suit = suit
    } else {
      throw new Error('Invalid suit')
    }
  }

  get suit() {
    return this.#suit
  }

  #setRank(rank) {
    if (StandardPlayingCard.validRanks.includes(rank)) {
      this.#rank = rank
    } else {  
      throw new Error('Invalid rank')
    }
  }

  get rank() {
    return this.#rank
  }

  /**
   * Returns the value of the card. Integers. Ace are counted as 14 by default.
   * @returns {number} - The value of the card.
   */
  valueOf() {
    if (this.#rank === 'J') {
      return 11
    } else if (this.#rank === 'Q') {
      return 12
    } else if (this.#rank === 'K') {
      return 13
    } else if (this.#rank === 'A') {
      return 14
    } else {
      return parseInt(this.#rank)
    }
  }
}
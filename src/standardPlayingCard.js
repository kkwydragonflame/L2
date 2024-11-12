/**
 * @author Johanna Eriksson <je224gs@student.lnu.se>
 * @version 1.0.2
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

  #setRank(rank) {
    if (StandardPlayingCard.validRanks.includes(rank)) {
      this.#rank = rank
    } else {
      throw new Error('Invalid rank')
    }
  }

  /**
   * Returns the value of the card. Integers. Ace are counted as 14 by default.
   * @returns {number} - The value of the card.
   */
  valueOf() {
    const rankValues = {
      J: 11,
      Q: 12,
      K: 13,
      A: 14
    }
    return rankValues[this.#rank] || parseInt(this.#rank)
  }

  toString() {
    return `${this.#rank}${this.#suit}`
  }

  get suit() {
    return this.#suit
  }

  get rank() {
    return this.#rank
  }
}

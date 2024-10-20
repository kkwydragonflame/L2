/**
 * @author Johanna Eriksson <je224gs@student.lnu.se>
 * @version 1.0.0
 */

export class KilleCard {
  static validRanks = Object.freeze(['fool', 'flowerpot', 'wreath', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'tavern', 'cavalier', 'swine', 'hussar', 'cuckoo', 'harlequin'])

  #rank

  constructor(rank) {
    this.#setRank(rank)
  }

  #setRank(rank) {
    if (KilleCard.validRanks.includes(rank)) {
      this.#rank = rank
    } else {
      throw new Error('Invalid rank.')
    }
  }

  get rank() {
    return this.#rank
  }

  /**
   * Returns the value of the card. Integers and floats.
   * @returns {number} - The value of the card.
   */
  valueOf() {
    const rankValues = {
      fool: 0,
      flowerpot: 0.1,
      wreath: 0.2,
      tavern: 13,
      cavalier: 14,
      swine: 15,
      hussar: 16,
      cuckoo: 17,
      harlequin: 18
    }
    return rankValues[this.#rank] || parseInt(this.#rank)
  }

  toString() {
    return `${this.#rank}`
  }
}

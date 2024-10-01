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

  valueOf() {
    if (this.#rank === 'fool') {
      return 0
    } else if (this.#rank === 'flowerpot') {
      return 0.1
    } else if (this.#rank === 'wreath') {
      return 0.2
    } else if (this.#rank === 'tavern') {
      return 13
    } else if (this.#rank === 'cavalier') {
      return 14
    } else if (this.#rank === 'swine') {
      return 15
    } else if (this.#rank === 'hussar') {
      return 16
    } else if (this.#rank === 'cuckoo') {
      return 17
    } else if (this.#rank === 'harlequin') {
      return 18
    } else {
      return parseInt(this.#rank)
    }
  }

  toString() {
    return `${this.#rank}`
  }
}
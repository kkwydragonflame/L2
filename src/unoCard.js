/**
 * @author Johanna Eriksson <je224gs@student.lnu.se>
 * @version 2.0.0
 */

export class UnoCard {
  static validColours = Object.freeze(['red', 'yellow', 'green', 'blue'])
  static validRanks = Object.freeze([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'skip', 'reverse', 'drawTwo'])
  static specialCards = Object.freeze(['wild', 'wildDrawFour'])

  #colour
  #rank
  #isSpecial

  constructor(colour, rank) {
    if (UnoCard.specialCards.includes(rank)) {
      this.#setRank(rank)
      this.#isSpecial = true
    } else {
      this.#setColour(colour)
      this.#setRank(rank)
      this.#isSpecial = false
    }
  }

  #setColour(colour) {
    if (UnoCard.validColours.includes(colour)) {
      this.#colour = colour
    } else {
      throw new Error('Invalid colour.')
    }
  }

  #setRank(rank) {
    if (UnoCard.validRanks.includes(rank) || UnoCard.specialCards.includes(rank)) {
      this.#rank = rank
    } else {
      throw new Error('Invalid rank.')
    }
  }

  get colour() {
    return this.#colour
  }

  get rank() {
    return this.#rank
  }

  get isSpecial() {
    return this.#isSpecial
  }

  toString() {
    return this.#isSpecial ? `${this.#rank}` : `${this.#colour} ${this.#rank}`
  }
}

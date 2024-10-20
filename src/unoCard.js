/**
 * @author Johanna Eriksson <je224gs@student.lnu.se>
 * @version 1.0.0
 */

export class UnoCard {
  static validColours = Object.freeze(['red', 'yellow', 'green', 'blue', 'wild'])
  static validRanks = Object.freeze([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'skip', 'reverse', 'drawTwo'])
  static specialCards = Object.freeze(['wild', 'wildDrawFour'])

  #colour
  #rank

  constructor(colour, rank) {
    this.#setColour(colour)
    this.#setRank(rank)
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

  toString() {
    return `${this.#colour} ${this.#rank}`
  }
}

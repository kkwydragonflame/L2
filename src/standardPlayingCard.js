/**
 * @author Johanna Eriksson <je224gs@student.lnu.se>
 * @version 1.0.0
 */

export class StandardPlayingCard {
  static validSuits = ['♠', '♣', '♥', '♦']
  static validRanks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

  #suit
  #rank

  constructor(suit, rank) {
    this.#setSuit(suit)
    this.#setRank(rank)
  }

  #setSuit(suit) {
    //valid suits &#9824; &#9827; &#9829; &#9830 for black icons
    // valid suits for white icons: ♠ ♣ ♥ ♦ &#9828; &#9825; &#9831; &#9826;
    // ['♠', '♣', '♥', '♦', '♤', '♧', '♡', '♢']
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

  valueOf() {
    // refactor this to improve code quality
    if (this.#rank === 'J') {
      return 11
    } else if (this.#rank === 'Q') {
      return 12
    } else if (this.#rank === 'K') {
      return 13
    } else if (this.#rank === 'A') {
      return 14 //What i ace needs to be counted as one?! Depends on what game you are playing
    } else {
      return parseInt(this.#rank)
    }
  }
}
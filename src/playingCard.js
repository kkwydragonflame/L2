export class PlayingCard {
  #suit
  #rank

  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
  }

  set suit(suit) {
    //valid suits &#9824; &#9827; &#9829; &#9830 for black icons
    // valid suits for white icons: ♠ ♣ ♥ ♦ &#9828; &#9825; &#9831; &#9826;
    // ['♠', '♣', '♥', '♦', '♤', '♧', '♡', '♢']
    const validSuits = ['♠', '♣', '♥', '♦']
    if (validSuits.includes(suit)) {
      this.#suit = suit
    } else {
      throw new Error('Invalid suit')
    }
  }

  get suit() {
    return this.#suit
  }

  set rank(rank) {
    const validRanks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    if (validRanks.includes(rank)) {
      this.#rank = rank
    } else {  
      throw new Error('Invalid rank')
    }
  }

  get rank() {
    return this.#rank
  }

  valueOf() {
    if (this.rank === 'J') {
      return 11
    } else if (this.rank === 'Q') {
      return 12
    } else if (this.rank === 'K') {
      return 13
    } else if (this.rank === 'A') {
      return 14
    } else {
      return parseInt(this.rank)
    }
  }
}
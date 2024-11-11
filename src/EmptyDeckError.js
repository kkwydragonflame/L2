/**
 * Error thrown when a deck is out of cards.
 */
export class EmptyDeckError extends Error {
  constructor(message = 'Deck is out of cards.') {
    super(message)
    this.name = 'EmptyDeckError'
  }
}

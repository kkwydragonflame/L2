# Game Tool Generator

This is the beginnings of a small lib to generate different kinds of game tools. At the moment it generates only 3 different kinds of card decks; A Standard 52 card deck (with options to add Jokers), a UNO deck, and a Kille deck.

In the future this will also be able to generate different kind of die, and more card decks.

## Example

## Installation

Download or clone the repo on [github](https://github.com/kkwydragonflame/L2).

Import the code into your project.

If you wish to run the tests for yourself you need to install Jest with ```npm install```.

No other dependencies at the current time.

## Current version

1.0.0

## Public Methods

All decks have the following methods;

* **shuffle()** - shuffles the cards using the Fisher-Yates algorithm.
* **addCardToTopOfDeck()** - add or return a card to the top of the deck, ie the first index.
* **addCardToBottomOfDeck()** - add or return a card to the bottom of the deck, ie the last index.
* **dealCard()** - deals a card from the top of the deck.
* **remainingCards()** - returns how many cards are left in the deck.
* **saveCurrentState()** - creates a copy of the current deck, preserving the state and order of the cards.
* **resetDeck()** - uses the created copy to return to a previous state.

**StandardDeck** also have the following methods;

* **addJokerToDeck()** - adds two jokers to the deck.

The classes **jokerCard**, **unoCard**, and **killeCard** have the following methods;

* **toString()** - return a string representation of the card in question.

The classes **killeCard** and **standardPlayingCard** have the following methods;

* **valueOf()** - returns the numerary value of the card, uses both integers and floating point numbers (in the case of killeCard).

## Testing

Testing has been done with Jest. You'll find all test suites in the test folder.

To run tests;
  * First make sure you have done
    ``` npm install ```.
    This will install Jest listed under devDependency.
  * Then run the tests with ```npm test```.

### Test report

## Issues/Bugs

Please report any issues found on [github](https://github.com/kkwydragonflame/L2/issues).

## License

This project is licensed under [MIT](https://en.wikipedia.org/wiki/MIT_License).
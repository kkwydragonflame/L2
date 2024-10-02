# Game Tool Generator

This is the beginnings of a small lib to generate different kinds of game tools. At the moment it generates only 3 different kinds of card decks; 
* A Standard 52 card deck (with options to add Jokers).
* A UNO deck of 108 cards, not including the extra cards from 2018 onwards.
* A Kille deck.

In future versions, it will also support generating dice and additional types of card decks.

## Example Usage

To generate a deck of cards, start by importing DeckGenerator.  
```js
import { DeckGenerator } from './src/deckGenerator'
```

Use deckGenerator.generateDeck() to create your deck of cards. The method accepts one of the following arguments; ___'standard'___, ___'uno'___, or ___'kille'___.  
```js
const standardDeck = DeckGenerator.generateDeck('standard')
```

For more examples see the __demoApp.js__ in src folder.

## Installation

Download or clone the repo on [github](https://github.com/kkwydragonflame/L2).
```bash
git clone https://github.com/kkwydragonflame/L2
```

Import the code into your project.

Currently, no other dependencies are required.

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

## Deck Specific Methods

**StandardDeck**:

* **addJokerToDeck()** - adds two jokers to the deck.

## Card Classes

The classes **jokerCard**, **unoCard**, and **killeCard** have the following methods;

* **toString()** - return a string representation of the card in question.

The classes **killeCard** and **standardPlayingCard** have the following methods;

* **valueOf()** - returns the numerical value of the card, uses both integers and floating point numbers (in the case of killeCard).

## Testing

Testing is been done with Jest. You'll find all test suites in the `test` folder.

To run the tests:
  1. Make sure Jest is installed
      ```bash
      npm install
      ```
  2. Run the tests 
      ```
      npm test
      ```

### Test report

Test reports can be found in the `test/reports` folder.

Further test report files can be generated with 
```bash
npm run test:report
```

## Issues/Bugs

Please report any issues found on __[GitHub Issues](https://github.com/kkwydragonflame/L2/issues)__ page.

Please attach a testreport when reporting an issue. You can generate one using: 
```bash
npm run test:report
```

## License

This project is licensed under the __[MIT License](https://en.wikipedia.org/wiki/MIT_License)__.
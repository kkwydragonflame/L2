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

#### With npm
```bash
npm install https://github.com/kkwydragonflame/L2
```
#### With yarn
```bash
yarn add https://github.com/kkwydragonflame/L2
```


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

All card classes have the following methods;

* **toString()** - return a string representation of the card in question.

The classes **killeCard** and **standardPlayingCard** also have the following methods;

* **valueOf()** - returns the numerical value of the card, uses both integers and floating point numbers (in the case of killeCard).

## Testing

Testing has been done with Jest. You'll find all test suites in the `test` folder.

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
## If you wish to contribute
Thank you for your interest in contributing to this project! We appreciate your help in improving the codebase. Please follow these steps to ensure a smooth contribution process:

### Step 1 Create a fork of the repo.
1. Click the "Fork" button at the top right of the repository page. This will create a copy of the repository under your GitHub account.
2. Clone your forked repository to your local machine
```bash
git clone <your-repository>
```
### Step 2 Makes your changes.
1. Implement your changes.
2. Commit your changes with a clear and concise commit message. Follow the standard format for commit messages:
    ```bash
    [TYPE]: Brief description of changes
    ```
    Examples of commit message types include:
    * __feat__: A new feature
    * __fix__: A bug fix
    * __docs__: Documentation changes
    * __style__: Code style changes (formatting, missing semi-colons, etc.)
    * __refactor__: Code change that neither fixes a bug nor adds a feature
    * __test__: Adding missing tests or correcting existing tests
3. Push your changes to your forked repository.

### Step 3 Create a pull request.
1. Navigate to the original repository on GitHub and click on "Compare & pull request."
2. Provide a clear description of your changes and submit the pull request.
3. Your pull request will be reviewed, and feedback may be provided. Be prepared to make additional changes if necessary.

### Continuous Integration

This project uses Continuous Integration (CI) to ensure code quality. When you submit a pull request, the CI system will automatically run tests to verify that everything works correctly. 


## License

This project is licensed under the __[MIT License](https://en.wikipedia.org/wiki/MIT_License)__.
Refactor card classes to one over-arching card class and move the specific ranks/colours/suits etc into their respective deck class. Maybe make a factory of it.

valueOf method in killeCard class is hideous. It will be refactored into a much shorter expression.

Some card classes have valueOf, others have toString, some have both. Change for better consistency and add explanation to readme. Make all card classes have a toString, and the ones that need to check rank have a valueOf as well. And make valueOf consistent in return value.

Refactor the method to check if cards already exists in decks to be on the abstract deck class and take an argument of how many cards may exist in the deck.
Refactor to avoid code repeating, since there's two methods to add cards to/back to the deck (addCardToTopOfDeck and addCardToBottomOfDeck), and both need checks.

Refactor generating a standard deck to be able to take argument of adding jokers or not at start.
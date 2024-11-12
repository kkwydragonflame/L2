## Meaningful names
Chapter 2 is about the importance of naming. The names of classes and methods often serve as the first point of contact for readers of the code, giving them a sense of what the code does, it improves code readability.<br>Good names should reveal the intent of the code, preferrably without needing added comments or disturbing the flow of reading by forcing the reader to look elsewhere for clarification.<br>Carefully chosen names help prevent misunderstandings and bugs, as they make the code easier to grasp.<br>In contrast, badly chosen names often lead to confusion, wrongful assumptions and lengthy debuggings, as they make the code harder to understand.<br>This chapter was very much an eye opener and I could relate by recalling experiences where I've had trouble remembering to which part of code a name belongs and what it means, complicating both development and debugging. I have certainly spent a fair amount of time in this assignment trying to carefully choose good names. 
|Names of classes or methods| Rules|
|---|---|
|**standardPlayingCard**|**Intention-Revealing Names** Follows this rule since the name clearly shows what it represents and what purpose it has, which makes it easy to use.|
|**deckGenerator**|**Class Names** follows this rule as the name is a noun. If instead it had been named GenerateDeck it would imply an action.<br>**|
|**addCardToBottomOfDeck**|**Searchable Names** The name is long but easily searchable.<br>**Avoid Disinformation** just barely violating this rules, since there is a similarly named method addCardToTopOfDeck with a similar functionality but two very different effects in a card game. Also relates to **Make Meaningful Distinctions** since there is a very clear distinction between adding a card to the top or bottom of the deck.|
|**valueOf**|**Meaningful Context** Violates this rule as the name does not give a good enough context. valueOf is very generic, could refer to many things, so a change to getCardValue might be a better fit.|
|**saveCurrentState**|**Intention-Revealing Names** and **Solution Domain Names** the method does what it says, and state has a very clear meaning in computer science.<br>**Method Names** Follows this rule as the name is a verb, and indicates an action you are taking.|


## Functions
Chapter 3 is all about keeping functions small and focused. They should only do one thing and do it well. I have tried to follow this as much as sensible. Much of my earlier code has certainly not followed these rules, resulting in giant monstrosities of functions that are not clear in what they do and are consequently harder to debug.    
I feel I have managed in many of my functions to follow these rules, and as a result I've managed to better keep track of my code, what it does and what it does _not_, and have had less bugs during development.

|Methods/Functions|Lines| Rules|
|---|---|---|
|**valueOf()** <br>Method in KilleCard class. Returns numerical value of the card. Integers and floats.|22 lines of code|**Small** Violates this rule. Code should be refactored into smaller parts.<br>**Inconsistent behaviour** since valueOf in this case returns both floats and integers while in other classes it returns only integers. |
|**valueOf()** <br>Method in StandardPlayingCard class. Returns numerical value of the card. Integers only.|12 lines of code|**DRY** Violates this rule since valueOf method also exists in other classes. Ideally this method would be on a common ancestor, but since the values differ between classes one can argue that repetition is a necessary evil in this case.|
|**generateDeck(deckType)** <br>Method in DeckGenerator class. Creates and returns a chosen deck.|12 lines of code|**One Level of Abstraction** Follows this rule because it only works with creating decks and no other logic.<br>**Function Arguments** *Monadic functions* Follows this rule since it only takes a single argument, making it clearer and easier to use.|
|**addJokerToDeck()**<br>Method in StandardDeck class. Creates and adds 2 Joker cards to the deck. |10 lines of code|**Do One Thing** The method violates this rule since it both counts jokers to check if they are less than 2 and then adds them to the deck, if true.<br> Arguments can be made that since the two things are closely related they should be kept together, but jokerCount can also be refactored into its own method. Also relates to the **Have No Side Effects** Violates this rule since both counting cards and adding cards can be considered a side effect.|
|**resetDeck()**<br>Method in AbstractDeck class. Restores the deck to a previous state.|6 lines of code|**Descriptive names** I would argue this both follows and violates this rule. Follows because the method does what it says - it resets the deck to a previously saved states. But violates in the sense that it does not reveal in its name you actually need to use another method (saveCurrentState()) first.<br>**Command Query Separation** Follows this rule since it only performs a reset, and does not return anything.|

## Reflection

As I reviewed my code with principles from Clean Code, several areas for improvement became evident. One key issue is consistency, particularly with the valueOf and toString methods across different card classes. While some classes have one or the other, it’s inconsistent and confusing. Refactoring all card classes to include a toString method and ensuring valueOf behaves uniformly will improve clarity and reduce ambiguity. Additionally, the current valueOf method in the KilleCard class is overly complex (it's hideous!) and violates the "Small Functions" principle. It will be refactored into a shorter, more concise expression.

I also noted violations of the DRY principle in the methods for adding cards to the deck, specifically addCardToTopOfDeck and addCardToBottomOfDeck. Both perform similar logic. I have as of yet not though of a good solution for this, since the two methods have two very different uses in card games. They are also repeated in the subclasses, since they perform checks for duplicates in the decks before adding cards. And since each deck have their own rules for duplicates I need some efficient way to handle that. To address this, I’m considering moving the duplicate-checking logic to the abstract ancestor class and refactoring it into a method that accepts an argument for the number of duplicates allowed in a deck.

Also looking at the creation of a standard deck with the generator class. To avoid uneccessary if statements I’m considering adding an argument to the deck generator to specify whether to include jokers from the start, but this could potentially violate the **Single Responsibility** rule and muddle the **One Level of Abstraction**, so I need to carefully weigh this option.

Lastly, I’m contemplating refactoring the separate card classes into a single overarching card class, with deck-specific attributes like ranks, colors, and suits handled in their respective deck classes. This might be a candidate for the Factory Pattern, which could simplify the code and make it easier to extend in the future.


### Internal list of improvements to fix in future
* Add explanatory comments to demoApp.
* Fix valueOf and toString.
* Refactor adding cards to deck.

### Items fixed
* [x] Add explanatory comments to demoApp.
* [x] Fix valueOf method in killeCard class.
* [x] Adjust dealCard method to be consistent in return value.
* [] Fix valueOf and toString to improve consistency.
* [] Refactor adding cards to deck.
* [] Refactor unoDeck to improve constructor.
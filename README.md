# Interactive Front End Development Project - Snap Card Game

This project consists of designing an interactive game, snap. Snap is a card game where by the user is presented with a number of cards, 16 to start with, which are faced down. The aim of the game is to match pairs of cards. There are 3 levels to the game. The first level is play cards to be matched, by number and by suit, hearts, clubs, spades and diamonds. The second level is shapes, this will be similar shapes, with subtle differences to increase the difficulty. The 3rd level will be patterns, all the same colour but again with more subtle differences.

How to play: The player selects a card, which animates flipping over to reveal what it is, the user then selects another card, which performs the same action. If the cards match they stay facing up to the user and are added to a counter that indicates how many pairs the user has found. If they do not match, then they both flip back down, and the user carries on until they match a pair.

To add to the difficulty the user is faced with a countdown timer. All matches must be completed within a given time (to be determined through play through and assessment of difficulty). The user is also rated against how many attempts that they have made, A live scale beside the attempts counter will indicate from green to red how effective the player is.

The timer is constantly displayed on screen as is the flip attempts counts and a rating of attempts very a pre-determined rating. Example: if there are 16 cards, that’s 8 pairs, if it takes the user 12 attempts, then that is a rating of green, if it takes 16 attempts then it is a rating of amber, 18+ attempts it is a red rating and the player needs to replay the game.

The player will also have the option from the start of selecting the difficulty level, this will be differentiated by the number of cards. Example: Start with 16, 20 or 24 cards, with different time amounts for the game to be completed in.

At the start of the game the player will be asked to enter their name, this can then be passed to the endgame overview where the players name and results are displayed. Based on how the player scored, different images, graphics and commentary will be provided based on time, score, efficiency and how many pairs are matched.

As each level of the game is completed the user is brought to the next level of difficulty. Example: if the player wins the 16 cards level of difficulty they are progressed to the 20 card round etc..

After 3 rounds or by winning the hardest level, 24 cards, the player is then presented with the next level of the game, level 2 has shapes inside the cards instead of numbers, Successfully winning this level progresses the player to the 3rd level, patterns. Each time all 3 levels of difficulty are finished the player is brought to the next level;

Level 1: Playing cards Level 2: Shapes Level 3: Patterns
Successful completion of each level presents the player with a summary screen that shows the results of the round; Time completed in, attempts taken, effectiveness ratings.

## UX

The game will be developed as a interactive webpage. With a sign in page that requires a player to assign a name. This will have a required input box, that ensures players have a name for various stages of the game. The home screen will be styled with an illustrated style of graphics, made in photoshop and illustrator by myself.

The site will be responsive in design, with the playable area being designing to be displayed on mobile, tablet and desktop.

The user base is targeted at 4 - 99, making the game accessible to all potential users, who enjoy challenging their memory and pattern sorting abilities. The timer attempts and effectiveness ratings also put a level of 'stakes' to the game. The results of the players performance are also designed to be funny and motivational, a selection of humorous results screens will encourage, challenge and praise performance of the player to entice them to keep going or to try harder.

The objective of the game is to challenge the player to find, remember and match pairs of numbers and suits of playing cards in the first level, similar shapes with the same colour in the second round and similar pattern pairs in the 3rd level.


Wireframes are in a folder in the respository labelled wireframes

## Features

The game will feature:
A sign in function, this will be a required field that the user must enter a player name for. This acts as a way of tying the player to the game, by having the player name be associated with them throughout the game and for the final scoring page.

A menu screen that will consist of a difficulty selection menu system. Here the player will select the time limits, the number of cards the player will be challenged with and level of the game.

Selection of these options will load in the scripts that contain the time limit, the number of cards the player starts with. The base level of the game is available from the start, however the 2nd and 3rd levels are not available until the player has progressed past the first level.

After this point the player, assuming they replay from within the same session, can choose from the 2nd level, and again once the second level is completed they have the option to select any level of the game, to try and improve their score.

Once options have been selected the player is brought to the game screen. Here there is a start button to start the game. This is here so that the player has time is see the modal tool tips that will be made to explain what the player is to do. Once they either close the tool tips of complete them they are free to press start and begin the game.

There will be an instruction button that can be pressed before a game starts to see the instructions of the game, however once the game starts the instructions button is disabled.

The game starts with the timer counting down. from here the user can select cards by clicking on them. Each click of a card animated the element to display what is behind it. This flip of the card only last for 3 - 5 seconds, or upon clicking of a second card, they both stay flipped for 3 -5 seconds, unless they match they will both revert back to their default positions.
Matched cards will stay revealed for the duration of the game.

Each click of a pair of cards will be counted as an attempt. This will be updated in the attempts counter on screen for the user to see.
Based on the number of attempts made a scale ranging from green to red will update to indicate how effective the player has been.

If the timer elapses, and the player has not found all the matching pairs, then a modal overlay will inform the player that they were unsuccessful in their attempt and prompt them to either restart the game or to quit to the main menu.

If the player successfully matches all pairs within the time limit and will a predefined amount of attempted, then they will be displayed a winning modal overlay that will allow them to proceed to the next level.
Upon successful competition of each level the player is presented with a summary screen that highlights their progress.

 
### Existing Features
- Feature 1 - allows users X to achieve Y, by having them fill out Z
- ...

For some/all of your features, you may choose to reference the specific project files that implement them, although this is entirely optional.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

### Features Left to Implement
- Another feature idea

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.


## Testing

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
- Different values for environment variables (Heroku Config Vars)?
- Different configuration files?
- Separate git branch?

In addition, if it is not obvious, you should also describe how to run your code locally.


## Credits

### Content
- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)

### Media
- The photos used in this site were obtained from ...

### Acknowledgements

- I received inspiration for this project from X

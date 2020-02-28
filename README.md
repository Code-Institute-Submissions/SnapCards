# Interactive Front End Development Project - Snap Card Game

This project consists of designing, coding and implementing an interactive game, named Snap Cards. Snap Cards is a memory game where by the user is presented with a number of cards, 16 , which are faced down at the game start. The aim of the game is to match pairs of these cards, within a time limit. At the  start of each game the cards are shuffled randomly, so that each new play thorugh is a new challenge.

How to play: The player selects a card, which animates through flipping around to reveal what it is, the user then selects another card, which performs the same flipping action. If the cards match they stay facing up to the user and are added to a counter that indicates how many attempts the user has made. If they do not match, then they both flip back over, and the user carries on until they match a pair.

To add to the difficulty the user is faced with a countdown timer. All matches must be completed within a given time, of 60 seconds. 

The timer is constantly displayed on screen as is the flip attempts counts and a rating of attempts very a pre-determined rating. Example: if there are 16 cards, that’s 8 pairs, if it takes the user 12 attempts, then that is a rating of green, if it takes 16 attempts then it is a rating of amber, 18+ attempts it is a red rating and the player needs to replay the game.

At the start of the game the player will be asked to enter their name, this can then be passed to the endgame overview where the players name and results are displayed. This is in the form of How many attempts it tool the user to find all the matches and how many seconds it took them.

## Project Objectives / User Stories
The main objectives of the game are:
- Build a Memory Game
- Develop a game that provides a challenge for the user to complete and is fun
- Build a simple single player pattern matching game
- Create a game that includes, audio and visual patterns that compliment the game design
- Provide users with an explanation of what they are to do

## UX

The game is developed as a single interactive webpage. With a sign in page that requires a player to assign a name, this section of the page will be hidden upon name submission. It has a required input box, that ensures players have a name for the game they are playing. The home screen is styled with text information and an image of a completed game to give users an idea of what it is they have to do.

The site is responsive in design, with the playable area designing to be displayed on mobile, tablet and desktop.

The user base is targeted at 4 - 99, making the game accessible to all potential users, who enjoy challenging their memory and pattern sorting abilities. The timer and attempts also put a level of 'stakes' to the game. The results of the players performance are also aimed at appealing to users competitive nature, by trying to beat a previous score or previous time completed in.

The objective of the game is to challenge the player to find, remember and match pairs of numbersand do it in a timely manner and in the least amount of moves.

Wireframes are in a folder in the respository labelled wireframes

## Game Structure
The entire game was developed as a single page, its structure follows this format:
- Welcome page/screen, name entry area and game information
- Click to start overlay - to allow the user to prepare prior to starting
- Game area - Player Details - Time Remaining - Flips counter - Card matching area
- Winning overlay - For situations where the player has completing the game in time
- Game Over overlay - For situations where the player has not finished the game in time


## Features

The game features:
A name entry feature, this will be a required field that the user must enter a player name for. This acts as a way of tying the player to the game, by having the player name be associated with them throughout the game and for the final scoring page.

A menu screen that will consist of a difficulty selection menu system. Here the player will select the time limits, the number of cards the player will be challenged with and level of the game.

Selection of these options will load in the scripts that contain the time limit, the number of cards the player starts with. The base level of the game is available from the start, however the 2nd and 3rd levels are not available until the player has progressed past the first level.

After this point the player, assuming they replay from within the same session, can choose from the 2nd level, and again once the second level is completed they have the option to select any level of the game, to try and improve their score.

Once options have been selected the player is brought to the game screen. Here there is a start button to start the game. This is here so that the player has time is see the modal tool tips that will be made to explain what the player is to do. Once they either close the tool tips of complete them they are free to press start and begin the game.

The game starts with when the user clicks a modal that asks them to click to start whent hey are ready, this triggers the timer to start counting down. From here the user can select cards by clicking on them. Each click of a card animates the element to display what is behind it. This flip of the card only last for 500ms, or upon clicking of a second card, they both stay flipped for 1 second, unless they match they will both revert back to their default positions.
Matched cards will stay revealed for the duration of the game.

Each click of a card will be counted as an attempt. This will be updated in the attempts counter on screen for the user to see.
Based on the number of attempts made the user will be able to see how effective they were at finding the pairs.

If the timer elapses, and the player has not found all the matching pairs, then a modal overlay will inform the player that they were unsuccessful in their attempt and prompt them to either restart.

If the player successfully matches all pairs within the time limit and will a predefined amount of attempted, then they will be displayed a winning modal overlay that will show them the details of their game session.

 
### Existing Features
- Feature 1 - allows users X to achieve Y, by having them fill out Z
- ...

For some/all of your features, you may choose to reference the specific project files that implement them, although this is entirely optional.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

### Features Left to Implement

1 - Adding game levels - The addition of additonal amounts of cards would add to the game difficulty, espically combined with the timer feature which would require users to be quick and effective in recalling the position of each of the cards.

2 - The addition of a rating system - The rating system would be based out of a star rating. The user would start with 5 stars and then when they complete the game a function would check against a number of arguments as to whether the user had x amount of attemtps and display stars based on this. Example if the user took 30 clicks then they would get 5 stars, if they took 40 clicks then they would get 4 stars and so on. 


## Technologies Used
### Bootstrap v4.4.1

https://getbootstrap.com/docs/4.4/getting-started/introduction/

Bootstrap is used in this project for the following areas:
- Landing page
- Sign in Button
- General Buttons
- Game Container
- Card items

### FontAwesome v4.7.0
Font Awesome was referenced in this project as part of my own customised boiler plate bootstrap setup, this is refereneced as intented to be available should further developments to the game occur in the future.

The Fontawesome link is from my own personal account with FontAwesome.

https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

### GitHub repository

This game is hosted on Github Project Name: Pysched/SnapCards
GitHub Repository: https://github.com/Pysched/SnapCards
Demo Link: https://pysched.github.io/SnapCards/

### IDE
This project was developed in part on the GitPod IDE, however for local testing and development and due to technical issues with gitpod, it was also developed with Visual Studio Code Editor.


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

This website is deployed on github pages. Deployment to my Github pages is done via gitpod IDE and direct editing of the github files in the repository system.

### Deployment Steps
1. Using the terminal window in gitpod IDE, adding the files to the staging area using the 'git add' command.
2. Comminting these files to the git repository system with comments using the 'git commit -m "insert commentary" ' syntax.
3. Deployment is made to the GitHub pages using the 'git push' command.

All versions of the development process is held on the master branch.
Initially I had developed the game in another repository, however I decided to restart the process and import images, audio, and base initial styles in my initial commit to this repository.  

This site can be accessed directly through the following link: https://pysched.github.io/SnapCards/
## Credits

### Content
- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)

### Media

### #Visuals - Graphics

- The media used for this site were a set of cards that were available to use with credits, this is credited in the css file. The original images can be found here: https://www.vecteezy.com/free-vector/playing-cardsPlaying Cards Vectors by Vecteezy

- I edited these images to use the inner illustrations and exported them from illustrator to photoshop where I rendered them out as png files to reduce file size.

#### Audio Files

All audio files for this project were sourced from:
- https://freesound.org/search/?q=background+game+music
- http://soundbible.com/
- https://www.bensound.com/

Each of the sound files used has a free use assosicated with them and can be found in 'assets/audio' folder in the main repository

### Acknowledgements
Acknowledgemets to the following in the construction, guidence and direction of this project

- Rahul Patil for his mentoring advice

- w3schools for html, css and javascript tutorials

- How to Code a Card Matching Game - https://www.youtube.com/watch?v=28VfzEiJgy4
This tutorial is part 1 of explainer video, it aided me by showing a setup for a card game and some styling method for later javascript interaction, it helped me form my idea and provide understanding of how to setup my html and css for later javascript.

- How To Code A Card Game In Plain JavaScript - Spooky Halloween Edition - https://www.youtube.com/watch?v=3uuQ3g92oPQ 
This tutorial is the second part of the explainer video, here the javascript method is explained, I used this resource to learn about how to implement the game logic in terms of setting up javascript classes, constructors, creation of audio classes/ constuctors and compliing these setups to run together. I completed this several times to further embed this learning and get a better understanding of how and why to setup my javascript in these ways.

- Memory Card Game - JavaScript Tutorial - https://www.youtube.com/watch?v=ZniVgo8U7ek 
This tutorial was another breakdown of creating a javascript memory game, it was approached differently that the previous videos and served to help learn about the different ways that javascript can be implemented to develop similar outcomes. This served to help me frame my game idea and aided in my development  and learning of javascript implementation.

- Memory Game in Vanilla JavaScript - Marina Ferreira - https://marina-ferreira.github.io/tutorials/js/memory-game/
This tutorial again took another approach of how to implement javascript to create a memory game. It taught me alot in regards to how to setup and implement javascript for a memory game aswell. being able to follow the flow of creating a javascript system greatly aided my learning and understanding.

- Codeacademy course on Javascript - https://www.codecademy.com/learn/introduction-to-javascript 
I worked through a javascript course at codeacademy which aided in my understanding of constructor classes, how to construct them and deployment.


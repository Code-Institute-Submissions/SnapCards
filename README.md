# Interactive Front End Development Project - Snap Card Game
## Project Description
This project consists of designing, coding and implementing an interactive game, named Snap Cards. Snap Cards is a memory game where by the user is presented with a number of cards, 16 , which are faced down at the game start. The aim of the game is to match pairs of these cards, within a time limit. At the start of each game the cards are shuffled randomly, so that each new play through is a new challenge.

How to play: The player selects a card, which animates through flipping around to reveal what it is, the user then selects another card, which performs the same flipping action. If the cards match they stay facing up to the user and are added to a counter that indicates how many attempts the user has made. If they do not match, then they both flip back over, and the user carries on until they match a pair.

To add to the difficulty the user is faced with a countdown timer. All matches must be completed within a given time, of 60 seconds. 

The timer is constantly displayed on screen as is the flip attempts counts.

At the start of the game the player will be asked to enter their name, this can then be passed to the endgame overview where the players name and results are displayed. This is in the form of how many attempts it tools the user to find all the matches and how many seconds it took them.

## Technologies Used
### Bootstrap v4.4.1

https://getbootstrap.com/docs/4.4/getting-started/introduction/

Bootstrap is used in this project for the following areas:
- Landing page
- Sign in Button
- General Buttons
- Game Container
- Card items


### Cloudinary Image Manager
All images used in the game and in this README.md file are stored and hosted on Cloudinary.
https://cloudinary.com 

### FontAwesome v4.7.0

Font Awesome was referenced in this project as part of my own customised boiler plate bootstrap setup, this is referenced as intended to be available should further developments to the game occur in the future.

The Fontawesome link is from my own personal account with FontAwesome.

https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

### GitHub repository

This game is hosted on Github Project Name: Pysched/SnapCards
GitHub Repository: https://github.com/Pysched/SnapCards
Demo Link: https://pysched.github.io/SnapCards/

### IDE

This project was developed in part on the GitPod IDE, however for local testing and development and due to technical issues with gitpod, it was also developed with Visual Studio Code Editor.

## Project Objectives / User Stories
The main objectives of the game are:
- Build a Memory Game
- Develop a game that provides a challenge for the user to complete and is fun
- Build a simple single player pattern matching game
- Create a game that includes, audio and visual patterns that complement the game design
- Provide users with an explanation of what they are to do

## Wireframes
The following wireframes are my initial design of the game, they served as a framework to work towards, the final product is very similar to this initial design.

- ![Wireframes Images - Start Page](https://res.cloudinary.com/pysched/image/upload/c_scale,h_300/v1583263837/images/start_page_uovwss.jpg)
- ![Wireframes Images - Results Page](https://res.cloudinary.com/pysched/image/upload/c_scale,h_300/v1583263837/images/2nd_page_w9rulf.jpg)
- ![Wireframes Images - Start Page](https://res.cloudinary.com/pysched/image/upload/c_scale,h_300/v1583263837/images/game_page_lettwf.jpg)
- ![Wireframes Images - Game Page](https://res.cloudinary.com/pysched/image/upload/c_scale,h_300/v1583263837/images/results_page_scnxnl.jpg)
- ![Wireframes Images - Game Over Page](https://res.cloudinary.com/pysched/image/upload/c_scale,h_300/v1583263837/images/error_page_dxizsm.jpg)

## Features

The game features:
- Landing page with a player name entry feature, this will be a required field that the user must enter a player name for. This acts as a way of tying the player to the game, by having the player name be associated with them throughout the game and for the final scoring page.

- Game instructions on the landing page in the form of text description of the game purpose and an image that shows the completed actions, that of matching all the pairs

- A Click to start modal overlay to allow the player to control when they start the game. Once clicked the background music starts playing, the timer starts counting down and the game is on.

- A game page with: 
-- Player name from the landing page displayed
-- A count down timer indicating how much time remains
-- A flips counter to indicate how many attempts it has taken
-- Retry Button if the player choses to restart during the game
-- A Back to landing page button if the player wants to quit
-- The game area, where all the cards are presented and animate flipping over to reveal what cards they are.

- A winning overlay that is revealed upon successful completion of the game, details within this include:
-- a congratulations message
-- the total moves taken 
-- total time taken
-- Retry button
-- Return to home page button

- A Game Over overlay that reveals if the time runs out
-- Retry Button
-- Back to Home Button

## UX
The game is developed to be contained within a single interactive and responsive webpage. This is broken down into 5 separate layers that are revealed as the situation and flow occurs. Those sections / layers are:

### Game Structure / Features
The entire game was developed as a single page, its structure follows this format:
- Welcome page/screen, name entry area and game information
- Click to start overlay - to allow the user to prepare prior to starting
- Game area - Player Details - Time Remaining - Flips counter - Card matching area
- Winning overlay - For situations where the player has completing the game in time
- Game Over overlay - For situations where the player has not finished the game in time

### Landing Page
The first section the player is brought to is the landing page. Here The player is introduced to the game. There is an animated flashing game name to highlight the game title. 

Beneath this there is text explaining what the objective of the game is. That being to match pairs of cards within a time limit.

There is a supporting screenshot of a completed game of matched pairs of cards beneath this to further inform the players.

Below this image is an instruction for the player/user to fill in their name beneath. This has the required attribute attached to it. 
Through filling in the text input field and clicking submit the player is brought to the next section / layer.

#### Styles for Landing Page

Initial H3 title styles
````
.h3-title{
    font-size:3em;
    font-style: italic;
    font-weight:900;
    text-transform: uppercase;
    color:rgb(222, 7, 7);
}
````

Animation instructions to repeat infinitely
````
#h3-title{
    animation: colorChange .5s ease-in-out infinite;
}
Keyframes - change from x color to y color
@keyframes colorChange {
    from {color:rgb(222, 7, 7)}
    to {color:rgb(222, 211, 7)}
}
````
#### Player Name Input box Form
Form element was used to GET the information and use it again in the below function
````
<form action="name" method="get">
  <input type="text" name="playerName" id ="playerName" class="inputBox" required>            
    <br><br>
  <input type="button" class="btn btn-danger btn-round-lg" onClick="getPlayerName()" value="Submit" />
</form>
````
#### JavaScript function for Player Name submission and Click to Start Overlay
Function that takes the users inputted name value and displays it in a span within the game and also transitions the game from the landing page to the game page
````
function getPlayerName(){
    document.getElementById("gamerId").innerHTML = document.getElementById('playerName').value + "";
    document.getElementById('landing-page').style.display = "none"; 
    document.getElementById('game-page').style.display= "flex";
}
````
Updated function to arrow function based on feedback from Mentor:
````
getPlayerName = () => {
    document.getElementById("gamerId").innerHTML = document.getElementById('playerName').value + "";
    document.getElementById('landing-page').style.display = "none";
    document.getElementById('game-page').style.display = "flex";
}

````
#### Click to Start section

Upon clicking on the submit button the landing page is hidden, and the game page is presented with an overlay that requires the user to click it before the game itself starts. This screen acts as a game ready space for the player, so that the timer does not start counting down before the player is ready.

#### HTML Click To Start
Click To Start Overlay - Controlled through the ready function as a method to start the game.
````
<div class="overlays visible" id="intro">
   <div class="intro-text">Click to Begin!</div>
</div>
````
#### JavaScript Ready Function 

This function creates arrays for overlays and cards, declares the game through calling a new instance of the JavaScript class name SnapCardGame and assigns it two parameters, 60 seconds and the array cards. I then adds an event listener for each instance of click on the overlays and removes their visibility with this. It then runs the startGame Function.

Second Part of the function adds event listeners for each card and runs the function flipCard at each click of a card
````
function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlays'));
    let cards = Array.from(document.getElementsByClassName('card'));
    let game = new SnapCardGame(60, cards);
    overlays.forEach(overlay => {
    overlay.addEventListener('click', () => {
    overlay.classList.remove('visible');
    game.startGame(); 
        });

    });
 
    // adds event listeners for each card and runs the function flipCard at each click of a card
        cards.forEach(card => {
            card.addEventListener('click', () => {
            game.flipCard(card);
            });
    });
}

````
Statement that checks if the page DOM content has loaded before loading the JavaScript - this is used as within the JavaScript reference in the head section an 'async' method was declared
````

// statement that checks if the page DOM content has loaded before loading the JavaScript
if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', ready());
}else {
    ready();
}

````
Updated function to arrow function and changed .forEach method to .map
````
ready = () => {
    let overlays = Array.from(document.getElementsByClassName('overlays'));
    let cards = Array.from(document.getElementsByClassName('card'));
    let game = new SnapCardGame(60, cards);
    overlays.map(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            game.startGame();
        });

    });
    // adds event listeners for each card and runs the function flipCard at each click of a card
    cards.map(card => {
        card.addEventListener('click', () => {
            game.flipCard(card);
        });
    });
}
````

#### Game Area & Audio Controller

Once the player clicks the start button, that overlay is hidden, and the game begins. 
The timer starts counting down and the game background audio begins to play as well.
As the player clicks each card the flips counter in the player information area updates. 
The timer counts down from the 60 seconds start time and the cards animate through rotating 180 degrees on the front card and 180 degs on the back, thus providing a 3d illusion. An audio file plays of a card flipping.

Once a match is found an audio file plays to indicate to the user that the cards have matched.
Should the player match all the cards then a victory audio file plays and the next section is revealed

The audio files are declared below, and arrow functions are used to call them
````
// Audio Section
// Declaring Audio files and setting Volume and Loop values
const bgMusic = new Audio('assets/audio/bgMusic.mp3');
bgMusic.volume = 0.3;
bgMusic.loop = true;
const flipSound = new Audio('assets/audio/cardFlip.wav');
const matchSound = new Audio('assets/audio/success.wav');
const winningSound = new Audio('assets/audio/winning.mp3');
winningSound.volume = 0.6;
const gameOverSound = new Audio('assets/audio/gameover.mp3');
gameOverSound.volume = 0.6;

// startMusic function
startMusic = () => bgMusic.play();

//stopMusic function - pause the current track - set bgMusic audio track time to zero
stopMusic = () => {
    bgMusic.pause();
    bgMusic.currentTime = 0;
}

// card flip sound
flip = () => flipSound.play();

// Card Match Sound
matched = () => matchSound.play();

// Winning Sound upon completion of game, by playing stop music function and playing winning sound function
winning = () => {
    stopMusic();
    winningSound.play();
}

// Game Over track, runs stopmusic function and plays game over track
gameOver = () => {
    stopMusic();
    gameOverSound.play();
}

````
The StartGame Function below Initialises the game and declares the variables to these values. The comments below indicate each.

````
// StartGame Function -- On starting setup these variables to these values
    startGame = () => {
            // card selector
            this.cardCheck = null;
            // setting the clicks value as 0
            this.totalClicks = 0;
            // pointing the timeremaining value at the totaltime varable
            this.timeRemaining = this.totalTime;
            // setting an empty array for matched cards to go into
            this.matchedCards = [];
            // setting the state of the actions, card is selected to true
            this.selected = true;
            // run card hide function
            this.hideCards();
            // pointing time at timeremaining varable
            this.time.innerText = this.timeRemaining;
            // pointing counter at totalclicks varable
            this.counter.innerText = this.totalClicks;
            //star rating
            this.starRating = this.totalClicks;
            // setTimeout  function - function to set time to start and trigger shuffle, countdown and selected state
            setTimeout(() => {
                startMusic();
                this.shuffleCards();
                this.selected = false;
                this.countDown = this.startCountDown();
            }, 500);
        }
````

#### Hide Cards Function
This function removes the visible and matched values from the cards classlists through the use of .map method
````
// set cards to be hidden by removing the visible class from the HTML and the matched class - this will run when resetting or setting up for the first time
    hideCards() {
        this.cardsArray.map(card => {
            card.classList.remove('visible');
            card.classList.remove('matched');
        });

    }
````


#### Winning Overlay
Upon successfully finding all of the cards the game screen is paused and a game winning overlay is presented to the player. This contains a winning message, with details about the players performance. The player is presented with how many seconds it took them to complete the game and also how many attempts it took them to win, the JavaScript for this operation is detailed below.

There is a button to play the game again, whereby the startgame function is invoked. This function resets the timer, counter and reshuffles the cards, just the same as if the player arrived at the game for the first time.

````
 // winning the game conditions
    winning(){
        // Clear the countdown time
        clearInterval(this.countDown);
        // Play the audio file for success
        this.audioController.winning();
        // Add a class of visible to the id of winner
        document.getElementById('winner').classList.add('visible');
        // Take the value of totalClicks and replace the inner html of the id total moves with that value 
        document.getElementById('totalMoves').innerHTML = this.totalClicks;
        // Take the starting time -> totaltime value and subtrack it from the time remaining value and replace the id of timetaken with its result
        document.getElementById('timeTaken').innerHTML = this.totalTime - this.timeRemaining;
    }
    
````

#### Game Over Overlay
If the player is unsuccessful in completing the game in time then they are presented with a game over screen. This pauses the game page and informs the user that they were unsuccessful in their attempt and prompts them to retry. This is again making use of the startgame function and resets the game, this function is run when clicking the go again button in the html.
````
// gameover conditions
    gameOver(){
        // Clear the countdown timer
        clearInterval(this.countDown);
        // Play the audio instance of game over
        this.audioController.gameOver();
        // Add a class of visible to the id of out-of-time
        document.getElementById('out-of-time').classList.add('visible');
        
    }
````

#### Card Shuffle Function Fisher / Yates Function
````
  // Card Shuffle function --- fisher Yeates Function for shuffling
    shuffleCards(){
        for(let i= this.cardsArray.length - 1; i > 0; i--){
        let randomIndex = Math.floor(Math.random() * (16));
        this.cardsArray[randomIndex].style.order = i;
        this.cardsArray[i].style.order = randomIndex;
        }
    }
 ````
 
#### Card Flip JavaScript
The card flip JavaScript, logic,  is broken up into a number of functions. 
 The function is called as event listeners where added to each card, on clicking a card the flipcard function is run. This function is declared with the parameter of card to refence the cards and checked whether the card can be flipped first through the function canCardFlip
 ````
 //card flipping function
    flipCard(card){
        // check first if the card can be flipped by calling the canCardFlip functon
        if(this.canCardFlip(card)){
            // If it can then play the audio sound for it
            this.audioController.flip();
            // Increment the totalclicks counter
            this.totalClicks++;
            // Change the counter to update the clicks made
            this.counter.innerText = this.totalClicks;
            // change the cards visiblility to visible
            card.classList.add('visible');
        // If the card is able to be check i.e it is not null,
        if(this.cardCheck)
        // Check for a match
            this.cardMatchCheck(card);
        else
      // otherwise null = card
            this.cardCheck = card;
        }

    }
 
 ````
#### Can Card Flip
The below logic stipulates 3 not conditions that need to be in that state before a card can be flipped.
This statement is true unless one of the three conditions is not not in their default state/value, So if not this.selected(default is true) so if this .selected is false and the card is not previously matched including it is not already selected the current card of being checked then return true and the card can flip
 ````
// This statement is true unless one of the three conditions is not not in their default state/value, So if not this.selected(default is true) so if this .selected is false and the card is not previously matched including it is not already selected the current card of being checked then return true and the card can flip
    canCardFlip(card){
        return !this.selected && !this.matchedCards.includes(card) && card !== this.cardCheck;
    }
    //This functions logic is = return true -> if not this.selected and not This.matchedcards and  card is not this.cardcheck to enable card to be flipped
 ````
 #### Card Type
 Check which card has been selected by -->
 ````
 // Check the card type by getting the class of card actual and checking which card it is for further match checking
    cardtype(card){
        return card.getElementsByClassName('card-actual')[0].src;
    }
 ````
 
 #### Card Match
 
 ````
  // cards match - assign 2 parameters card 1 and card 2
    cardMatch(card1, card2){
        // push first card to varable card 1 and same to card 2
        this.matchedCards.push(card1);
        this.matchedCards.push(card2);
        // add a class of matched to each 
        card1.classList.add('matched');
        card2.classList.add('matched');
        //play the audio of cards matched
        this.audioController.matched();
        //if all matched cards equal the amount of cards, then the game is won and play the winning music
        if(this.matchedCards.length === this.cardsArray.length)
            this.winning();
    }
 
````
#### Objectives
The objective of the game is to challenge the player to find, remember and match pairs of numbersand do it in a timely manner and in the least amount of moves.

#### Home Page Game Completed Image
The image in the centre of the landing page is a screenshot from a play through of the game, this is used to illustrate to the players how a completed game would look like and the objective. The image is available at: https://res.cloudinary.com/pysched/image/upload/v1583235669/images/gamepreview_xhuj7r.jpg

#### Background Image for Landing Page and Game Page
The image used as the background for the landing and game page is taken from https://wallpapercave.com/w/2YPxgPL . It is hosted on Cloudinary available at: https://res.cloudinary.com/pysched/image/upload/v1583235669/images/cards_el9qnq.jpg

#### Cards
The cards used in the game where taken from https://www.vecteezy.com/free-vector/playing-cardsPlaying , modified and rendered out as pngs in photoshop and are credited below, they are free to use with such attribution. They are hosted on cloudinary at: 

- https://res.cloudinary.com/pysched/image/upload/v1583235669/images/joker_rehvwl.png
- https://res.cloudinary.com/pysched/image/upload/v1583235669/images/jack_tmgcn8.png
- https://res.cloudinary.com/pysched/image/upload/v1583235670/images/king_wrbzaw.png
- https://res.cloudinary.com/pysched/image/upload/v1583235669/images/card-back_jffvaq.png
- https://res.cloudinary.com/pysched/image/upload/v1583235669/images/9_di1nwv.png
- https://res.cloudinary.com/pysched/image/upload/v1583235669/images/10_dwaa52.png
- https://res.cloudinary.com/pysched/image/upload/v1583235669/images/ace_gamw6c.png
- https://res.cloudinary.com/pysched/image/upload/v1583235668/images/7_h4gbbz.png
- https://res.cloudinary.com/pysched/image/upload/v1583235668/images/8_mhmafq.png
- https://res.cloudinary.com/pysched/image/upload/v1583235668/images/6_ndmbpq.png
- https://res.cloudinary.com/pysched/image/upload/v1583235668/images/3_nqaduh.png
- https://res.cloudinary.com/pysched/image/upload/v1583235668/images/queen_kgzwsi.png
- https://res.cloudinary.com/pysched/image/upload/v1583235668/images/5_ddx535.png
- https://res.cloudinary.com/pysched/image/upload/v1583235668/images/2_vq72ey.png
- https://res.cloudinary.com/pysched/image/upload/v1583235668/images/4_rjq7rh.png

### Features Left to Implement

1 - Adding game levels - The addition of additional amounts of cards would add to the game difficulty, especially combined with the timer feature which would require users to be quick and effective in recalling the position of each of the cards.

2 - The addition of a rating system - The rating system would be based out of a star rating. The user would start with 5 stars and then when they complete the game a function would check against a number of arguments as to whether the user had x amount of attempts and display stars based on this. Example if the user took 30 clicks then they would get 5 stars, if they took 40 clicks then they would get 4 stars and so on. 


## Testing

### Tools
Testing was carried out by making use of the following devices/browsers:

- Desktop
-- Chrome
-- Firefox

- Samsung S10
-- Chrome

### Testing Screenshots
#### Desktop


#### Mobile



### Functional Tests
#### Test: Player Name Captured
1. Input of Player Name
2. Submit Player Name
3. Required attribute works for no name entry
4. Player Name displays within game page information section
5. Player Name displays in Winning overlay
6. Player Name displays in Game Over Overlay

#### Test: Click To Start Overlay
1. Overlay displays
2. On click overlay is hidden
3. Game Starts with count down timer and game music

#### Test: Game Functionality Works
1. Attempts Counter increments based on each click
2. Cards animate onclick
3. The same card does not count if clicked twice as an attempt or as a second card
4. Only 2 cards, outside of any previous matched cards are flipped at one time
5. Matches stay flipped
6. Match sound plays on matching of cards
7. Success audio plays once all matches are found
8. Game over audio plays if timer runs out

#### Test: Game Over Overlay works
1. Upon timer counting down to 0 the game over overlay displays information that the player has run out of time.
2. The retry button starts the game again
3. The back to home page button brings the user back to the landing screen


#### Test: Winning Overlay Works
1. On successful matching of all cards the winning overlay displays
2. The amount of time remain is subtracted from the total time and displayed as the amount of time taken for the player to complete the game
3. The number of attempts is acquired and displayed within the winning overlay
4. The player name is pulled from the input and displayed in the winning overlay
5. The retry button resets the game
6. The back to home page button brings the user back to the landing/home page






#### Bugs Found
1. Despite the use of a form and the get method the required tag is not functioning, hence a player can enter no name, while not game breaking, the implementation of the required tag is not working.





## Deployment

This website is deployed on github pages. Deployment to my Github pages is done via gitpod IDE and direct editing of the github files in the repository system.

### Deployment Steps
1. Using the terminal window in gitpod IDE, adding the files to the staging area using the 'git add' command.
2. Commenting these files to the git repository system with comments using the 'git commit -m "insert commentary" ' syntax.
3. Deployment is made to the GitHub pages using the 'git push' command.

All versions of the development process is held on the master branch.
Initially I had developed the game in another repository, however I decided to restart the process and import images, audio, and base initial styles in my initial commit to this repository.  

This site can be accessed directly through the following link: https://pysched.github.io/SnapCards/
## Credits

### Content
- The content for the game was created by myself.

### Media

#### Visuals - Graphics

- The media used for this site were a set of cards that were available to use with credits, this is credited in the css file. The original images can be found here: https://www.vecteezy.com/free-vector/playing-cardsPlaying Cards Vectors by Vecteezy

- I edited these images to use the inner illustrations and exported them from illustrator to photoshop where I rendered them out as png files to reduce file size.

#### Audio Files

All audio files for this project were sourced from:
- https://freesound.org/search/?q=background+game+music
- http://soundbible.com/
- https://www.bensound.com/

Each of the sound files used has a free use associated with them and can be found in 'assets/audio' folder in the main repository

### Acknowledgements
Acknowledgements to the following in the construction, guidance and direction of this project

- Rahul Patil for his mentoring advice

- w3schools for html, CSS and JavaScript tutorials

### Tutorials and Learnings

How to Code a Card Matching Game - https://www.youtube.com/watch?v=28VfzEiJgy4
This tutorial is part 1 of explainer video, it aided me by showing a setup for a card game and some styling method for later JavaScript interaction, it helped me to form my ideas and provide context and understanding of how to setup my html and CSS for later JavaScript.

How To Code A Card Game In Plain JavaScript - Spooky Halloween Edition - https://www.youtube.com/watch?v=3uuQ3g92oPQ 
This tutorial is the second part of the explainer video, here the JavaScript method is explained, I used this resource to learn about how to implement the game logic in terms of setting up JavaScript classes, constructors, creation of audio classes/ constructors and compiling these setups to run together. I completed this several times to further embed this learning and get a better understanding of how and why to setup my JavaScript in these ways.

Memory Card Game - JavaScript Tutorial - https://www.youtube.com/watch?v=ZniVgo8U7ek 
This tutorial was another breakdown of creating a JavaScript memory game, it was approached differently than the previous videos and served to help learn about the different ways that JavaScript can be implemented to develop similar outcomes. This served to help me frame my game idea and aided in my development and learning of JavaScript implementation.

Memory Game in Vanilla JavaScript - Marina Ferreira - https://marina-ferreira.github.io/tutorials/js/memory-game/
This tutorial took a different approach in its implement of JavaScript to create a memory game. I gained a large amount of insight with regards to how to setup and implement JavaScript for a memory game. Being able to follow the flow of creating a JavaScript system greatly aided my learning and understanding.

Codeacademy course on JavaScript - https://www.codecademy.com/learn/introduction-to-javascript 
I worked through a JavaScript course at codeacademy which aided in my understanding of constructor classes, their construction, use and implementation.


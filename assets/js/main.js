// Function that takes the users inputted name value and displays it in a span within the game and also transitions the game from the landing page to the game page
getPlayerName = () => {
    document.getElementById("gamerId").innerHTML = document.getElementById('playerName').value + "";
    document.getElementById('landing-page').style.display = "none";
    document.getElementById('game-page').style.display = "flex";
}


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

// Game Over track, runs stopmusic funciton and plays gameover track
gameOver = () => {
    stopMusic();
    gameOverSound.play();
}





//Declaring a class for the game and all its variables
class SnapCardGame {
    constructor(totalTime, cards) {
            this.cardsArray = cards;
            this.totalTime = totalTime;
            this.timeRemaining = totalTime;
            this.time = document.getElementById('time-remaining');
            this.counter = document.getElementById('flips');
            this.audioController = new Audio();

        }
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
            // setTimeout  function - function to set time to start and triggger shuffle, countdown and selected state
            setTimeout(() => {
                startMusic();
                this.shuffleCards();
                this.selected = false;
                this.countDown = this.startCountDown();
            }, 500);
        }
        // set cards to be hidden by removing the visible class from the HTML and the matched class - this will run when restting or setting up for the first time
    hideCards() {
        this.cardsArray.map(card => {
            card.classList.remove('visible');
            card.classList.remove('matched');
        });

    }

    // card flipping function
    flipCard(card) {
        // check first if the card can be flipped by calling the canCardFlip functon
        if (this.canCardFlip(card)) {
            // If it can then play the audio sound for it
            flip();
            // Increment the totalclicks counter
            this.totalClicks++;
            // Change the counter to update the clicks made
            this.counter.innerText = this.totalClicks;
            // change the cards visiblility to visible
            card.classList.add('visible');
            // If the card is able to be check i.e it is not null,
            if (this.cardCheck)
            // Check for a match
                this.cardMatchCheck(card);
            else
            // otherwise null = card
                this.cardCheck = card;
        }

    }

    // Do the cards match
    cardMatchCheck(card) {
            // if cardtype(which card has been clicked) is equal to 
            if (this.cardtype(card) === this.cardtype(this.cardCheck))
                this.cardMatch(card, this.cardCheck);
            else
                this.cardMisMatch(card, this.cardCheck);
            this.cardCheck = null;
        }
        // Check the card type by getting the class of card actual and checking which card it is for further match checking
    cardtype(card) {
            return card.getElementsByClassName('card-actual')[0].src;
        }
        // cards match - assign 2 parameters card 1 and card 2
    cardMatch(card1, card2) {
            // push first card to varable card 1 and same to card 2
            this.matchedCards.push(card1);
            this.matchedCards.push(card2);
            // add a class of matched to each 
            card1.classList.add('matched');
            card2.classList.add('matched');
            //play the audio of cards matched
            matched();
            //if all matched cards equals the amount of cards, then the game is won and play the winning music
            if (this.matchedCards.length === this.cardsArray.length)
                this.winning();
        }
        // cards do not match
    cardMisMatch(card1, card2) {
        this.selected = true;
        setTimeout(() => {
            card1.classList.remove('visible');
            card2.classList.remove('visible');
            this.selected = false;
        }, 700);
    }

    // start counting down function - timer
    startCountDown() {
            return setInterval(() => {
                this.timeRemaining--;
                this.time.innerText = this.timeRemaining;
                if (this.timeRemaining === 0)
                    this.gameOver();
            }, 1000);
        }
        // gameover conditions
    gameOver() {
        // Clear the countdown timer
        clearInterval(this.countDown);
        // Play the audio instance of game over
        gameOver();
        // Add a class of visible to the id of out-of-time
        document.getElementById('out-of-time').classList.add('visible');

    }




    // winning the game conditions
    winning() {
            // Clear the countdown time
            clearInterval(this.countDown);
            // Play the audio file for success
            winning();
            // Add a class of visible to the id of winner
            document.getElementById('winner').classList.add('visible');
            // Take the value of totalClicks and replace the inner html of the id total moves with that value 
            document.getElementById('totalMoves').innerHTML = this.totalClicks;
            // Take the starting time -> totaltime value and subtrack it from the time remaining value and replace the id of timetaken with its result
            document.getElementById('timeTaken').innerHTML = this.totalTime - this.timeRemaining;


        }
        // Card Shuffle function --- fisher Yeates Function for shuffling
    shuffleCards() {
            for (let i = this.cardsArray.length - 1; i > 0; i--) {
                let randomIndex = Math.floor(Math.random() * (16));
                this.cardsArray[randomIndex].style.order = i;
                this.cardsArray[i].style.order = randomIndex;
            }

        }
        
         // can the card flip conditions 
        // This statement is true unless one of the three conditions is not not in their default state/value, So if not this.selected(default is true) so if this .selected is false and the card is not previously matched including it is not already selected the current card of being checked then return true and the card can flip
    canCardFlip(card) {
            return !this.selected && !this.matchedCards.includes(card) && card !== this.cardCheck;
        }
       
}




//This function creates arrays for overlays and cards, declares the game through calling a new instance of the Javascript class name SnapCardGame and assigns it two parameters, 60 seconds and the array cards. I then adds an event listener for each instance of click on the overlays and removes their visiblity with this. It then runs the startGame Function.
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
    // adds event listeners for each card and runs the funciton flipCard at each click of a card
    cards.map(card => {
        card.addEventListener('click', () => {
            game.flipCard(card);
        });
    });
}



// statement that checks if the page DOM content has loaded before loading the javascript
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready());
} else {
    ready();
}

// Function that takes the users inputted name value and displays it in a span within the game and also transitions the game from the landing page to the game page
function getPlayerName(){
    document.getElementById("gamerId").innerHTML = document.getElementById('playerName').value + "";
    document.getElementById('landing-page').style.display = "none"; document.getElementById('game-page').style.display="flex";
}


// Create a class to manage the instances of audio tracks. 
class AudioController {
    constructor() {
        this.bgMusic = new Audio('assets/audio/bgMusic.mp3');
        this.flipSound = new Audio('assets/audio/cardFlip.wav');
        this.matchSound = new Audio('assets/audio/success.wav');
        this.winningSound = new Audio('assets/audio/winning.mp3');
        this.gameOverSound = new Audio('assets/audio/gameover.mp3');
        this.bgMusic.volume = 0.3; // audio volume decrease as it is quite loud from source
        this.winningSound.volume = 0.8; // audio volume decrease so as not to startle people
        this.bgMusic.loop = true;// loop the background game music to play over continously
    }
    // Start music function
    startMusic() {
        this.bgMusic.play();
    }
    //stop function for music, pause the current track and reset its time to 0
    stopMusic(){
        this.bgMusic.pause();
        this.bgMusic.currentTime = 0;
    }
    // card flip sound
    flip(){
        this.flipSound.play();
    }
    // Card Match Sound
    matched() {
        this.matchSound.play();
    }
    // Winning Sound upon completion of game, by playing stop music function and playing winning sound function
    winning() {
        this.stopMusic();
        this.winningSound.play();
    }
    // Game Over track, runs stopmusic funciton and plays gameover track
    gameOver(){
        this.stopMusic();
        this.gameOverSound.play();
    }
}



//Declaring a class for the game and all its variables
class SnapCardGame {
    constructor(totalTime, cards){
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.time = document.getElementById('time-remaining');
        this.counter = document.getElementById('flips');
        this.audioController = new AudioController();
        
    }
    // StartGame Function -- On starting setup these variables to these values
    startGame(){
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
        this.starRating = this.counter.innerText;
        // setTimeout  function - function to set time to start and triggger shuffle, countdown and selected state
        setTimeout(() => {
            this.audioController.startMusic();
            this.shuffleCards();
            this.selected = false;
            this.countDown = this.startCountDown();
        },500);
    }
    // set cards to be hidden by removing the visible class from the HTML and the matched class - this will run when restting or setting up for the first time
    hideCards(){
        this.cardsArray.forEach(card => {
            card.classList.remove('visible');
            card.classList.remove('matched');
        });

    }

    // card flippping function
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

    // Do the cards match
    cardMatchCheck(card){
        // if cardtype(which card has been clicked) is equal to 
        if(this.cardtype(card) === this.cardtype(this.cardCheck))
            this.cardMatch(card, this.cardCheck);
        else    
            this.cardMisMatch(card, this.cardCheck);
            this.cardCheck = null;
    }
    // Check the card type by getting the class of card actual and checking which card it is for further match checking
    cardtype(card){
        return card.getElementsByClassName('card-actual')[0].src;
    }
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
        //if all matched cards equals the amount of cards, then the game is won and play the winning music
        if(this.matchedCards.length === this.cardsArray.length)
            this.winning();
    }
    // cards do not match
    cardMisMatch(card1, card2){
        this.selected = true;
        setTimeout(() => {
            card1.classList.remove('visible');
            card2.classList.remove('visible');
            this.selected = false;
        },700);
    }

    // start counting down function - timer
    startCountDown(){
        return setInterval(() => {
            this.timeRemaining--;
            this.time.innerText = this.timeRemaining;
        if(this.timeRemaining === 0)
            this.gameOver();
        },1000);
    }
    // gameover conditions
    gameOver(){
        // Clear the countdown timer
        clearInterval(this.countDown);
        // Play the audio instance of game over
        this.audioController.gameOver();
        // Add a class of visible to the id of out-of-time
        document.getElementById('out-of-time').classList.add('visible');
        
    }

   
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
    // Card Shuffle function --- fisher Yeates Function for shuffling
    shuffleCards(){
        for(let i= this.cardsArray.length - 1; i > 0; i--){
        let randomIndex = Math.floor(Math.random() * (16));
        this.cardsArray[randomIndex].style.order = i;
        this.cardsArray[i].style.order = randomIndex;
        }

    }
    // can the card flip conditions
    canCardFlip(card){
        return !this.selected && !this.matchedCards.includes(card) && card !== this.cardCheck;
    }
    //This functions logic is = return true -> if not this.selected and not This.matchedcards and  card is not this.cardcheck to enable card to be flipped
}




//This function creates arrays for overlays and cards, declares the game through calling a new instance of the Javascript class name SnapCardGame and assigns it two parameters, 60 seconds and the array cards. I then adds an event listener for each instance of click on the overlays and removes their visiblity with this. It then runs the startGame Function.
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
    // adds event listeners for each card and runs the funciton flipCard at each click of a card
        cards.forEach(card => {
            card.addEventListener('click', () => {
            game.flipCard(card);
            });
    });
}



// statement that checks if the page DOM content has loaded before loading the javascript
if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', ready());
}else {
    ready();
}

// Function that takes the users inputted name value and displays it in a span within the game and also transitions the game from the landing page to the game page
function getPlayerName(){
    document.getElementById("playerName").innerHTML = document.getElementById('gamerId').value + "";
    document.getElementById('landing-page').style.display = "none"; document.getElementById('game-page').style.display="block";
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
    flipSound(){
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
        this.timer = document.getElementById('time-remaining');
        this.ticker = document.getElementById('flips');
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

    }
    // set cards to be hidden by removing the visible class from the HTML and the matched class - this will run when restting or setting up for the first time
    hideCards(){
        this.cardsArray.forEach(card => {
            card.classList.remove('visible');
            card.classLsit.remove('matched');
        })

    }

    // card flippping function
    flipCard(){
        if(this.canCardFlip(card)){
            this.audioController.flipSound();
            this.totalClicks ++;
            this.time.innerText = this.totalClicks;
            card.classList.add('visible');

        if(this.cardCheck)
            this.cardMatchCheck(card);
        else
            this.cardCheck = card;
        }

    }

    // Do the cards match
    cardMatchCheck(card){
        if(this.cardtype(card) === this.cardtype(this.cardCheck))
            this.cardMatch(card, this.cardCheck);
        else    
            this.cardMisMatch(card, this.cardCheck);
            this.cardCheck = null;
    }

    cardtype(card){
        return card.getElementsByClassName('card-actual')[0].src;
    }
    // cards match
    cardMatch(card1, card2){
        this.matchedCards.push(card1);
        this.matchedCards.push(card2);
        card1.classList.add('matched');
        card2.classList.add('matched');
        this.audioController.matched();

        if(this.matchedCards.length === this.cardsArray.length)
            this.winning();
    }
    // cards do not match
    cardMisMatch(){

    }
    // gameover conditions
    gameOver(){

    }
    // winning the game conditions
    Winning(){

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
    canCardFlip(){

    }

}




// Function that declares overlay screens and card deck and adds visibiliy toggle and sets up startGame funciton and flipCard function
function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlays'));
    let cards = Array.from(document.getElementsByClassName('card'));

    overlays.forEach(overlay => {
    overlay.addEventListener('click', () => {
    overlay.classList.remove('visible');
    //game.startGame(); 
        });

    });
        cards.forEach(card => {
            card.addEventListener('click', () => {
            //game.flipCard(card);
            });
    });
}



// statement that checks if the page DOM content has loaded before loading the javascript
if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', ready());
}else {
    ready();
}
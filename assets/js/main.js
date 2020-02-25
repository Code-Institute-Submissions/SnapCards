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
    flip(){
        this.flipSound.play();
    }
    // Card Match Sound
    match() {
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




// Function that declares overlay screens and card deck and adds visibiliy toggle and sets up startGame funcito and flipCard function
function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlays'));
    let cards = Array.from(document.getElementsByClassName('card'));

// for each overlay, add an event listener and remove its visible class when when its clicked
    overlays.forEach(overlay => {
    overlay.addEventListener('click', () => {
    overlay.classList.remove('visible');
    //game.startGame(); 
        });

    });//add event listener that listens for each click of a card and flips it
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
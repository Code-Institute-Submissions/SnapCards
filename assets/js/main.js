// Function that takes the users inputted name value and displays it in a span within the game and also transitions the game from the landing page to the game page
function getPlayerName(){
    document.getElementById("playerName").innerHTML = document.getElementById('gamerId').value + "";
    document.getElementById('landing-page').style.display = "none"; document.getElementById('game-page').style.display="block";
}

class AudioController {
    constructor() {
        this.bgMusic = new Audio('assets/audio/bgMusic.mp3');
        this.flipSound = new Audio('assets/audio/cardFlip.wav');
        this.matchSound = new Audio('assets/audio/success.wav');
        this.winningSound = new Audio('assets/audio/winning.mp3');
        this.gameOverSound = new Audio('assets/audio/gameover.mp3');
        this.bgMusic.volume = 0.3;
        this.winningSound.volume = 0.8;
        this.bgMusic.loop = true;
    }
    startMusic() {
        this.bgMusic.play();
    }
    stopMusic(){
        this.bgMusic.pause();
        this.bgMusic.currentTime = 0;
    }
    flip(){
        this.flipSound.play();
    }
    match() {
        this.matchSound.play();
    }
    victory() {
        this.stopMusic();
        this.winningSound.play();
    }
    gameOver(){
        this.stopMusic();
        this.gameOverSound.play();
    }
}






// statement that checks if the page DOM content has loaded before loading the javascript
if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', ready());
}else {
    ready();
}
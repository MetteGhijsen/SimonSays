const maxLevel = 100;
let currentLevel = 1;
let difficulty = 1000;
let playerSequencePosition = 0;
let highScoreUnit = 1;
let generatedSequence = [];
let playerSequence = [];


let startScreen = document.getElementById('startScreen');
let playScreen = document.getElementById('playScreen');
let endScreen = document.getElementById('endScreen')
let buttonRed = document.getElementById('buttonRed');
let buttonYellow = document.getElementById('buttonYellow');
let buttonGreen = document.getElementById('buttonGreen');
let buttonBlue = document.getElementById('buttonBlue');
let scorePlayer = document.getElementById('winsplayer');
let highScore = document.getElementById('highscore');

function startRound() {
    console.log("start round");
    console.log(generatedSequence);

    startScreen.style.display = "none";
    playScreen.style.display = "block";
    endScreen.style.display = "none";

    generatedSequence = apendToSequence(generatedSequence);
    console.log(generatedSequence);
    playerSequence = [];
    showSequence();
}

function apendToSequence(sequence) {
    console.log(generatedSequence);
    sequence.push(Math.floor(Math.random() * 4));
    return sequence;
}

function showSequence() {
    console.log("showsequence aangeroepen");
    for (let i = 0; i < generatedSequence.length; i++) {
        setTimeout(function () {
            switch (generatedSequence[i]) {
                case 0: //rood
                    buttonRed.style.opacity = "";
                    flashTile(buttonRed);
                    playSound(buttonRed);
                    break;
                case 1: //geel
                    buttonYellow.style.opacity = "";
                    flashTile(buttonYellow);
                    playSound(buttonYellow);
                    break;
                case 2: //groen
                    buttonGreen.style.opacity = "";
                    flashTile(buttonGreen);
                    playSound(buttonGreen);
                    break;
                case 3: //blauw
                    buttonBlue.style.opacity = "";
                    flashTile(buttonBlue);
                    playSound(buttonBlue);
                    break;
            }
        }, difficulty * i);
    }
}

function flashTile(tile) {
    tile.style.opacity = "100%";
    setTimeout(function () {
        tile.style.opacity = "";
    }, 500)
}

function playSound(tile) {
    switch (tile) {
        case buttonRed:
            playNote(310, 500);
            break;
        case buttonYellow:
            playNote(252, 500);
            break;
        case buttonGreen:
            playNote(415, 500);
            break;
        case buttonBlue:
            playNote(209, 500);
            break;
    }
}

function Choice(color) {
    console.log("choice aangeroepen");
    playerSequence.push(color);
    console.log(playerSequence, generatedSequence);

    if (playerSequence[playerSequencePosition] === generatedSequence[playerSequencePosition]) {
        playerSequencePosition++;
        if (arraysEqual(playerSequence, generatedSequence)) {
            console.log(playerSequencePosition);
            goodAnswer();
        }
    } else {
        wrongAnswer();
    }

    switch (color) { //alleen voor de soundeffects
        case 0:
            playSound(buttonRed);
            break;
        case 1:
            playSound(buttonYellow);
            break;
        case 2:
            playSound(buttonGreen);
            break;
        case 3:
            playSound(buttonBlue);
            break;
    }
}

function goodAnswer() {
    console.log("goodanswer");
    BlinkingLights(1);

    if (currentLevel < maxLevel) {
        currentLevel++;
        if(currentLevel > highScoreUnit){
            highScore.innerHTML = "HIGHSCORE: " + currentLevel;
        }

        scorePlayer.innerHTML = "SCORE: " + currentLevel;
        playerSequencePosition = 0;
        difficulty -= 50;

        setTimeout(function () {
            startRound();
        }, 1500);
    }
}

function wrongAnswer() {
    console.log("wronganswer aangeroepen");

    endScreen.style.display = "block";
    playScreen.style.display = "none";

    if (highScoreUnit < currentLevel) {
        highScoreUnit = currentLevel;
        highScore = highScoreUnit;
        highScore.innerHTML = "HIGHSCORE: " + highScoreUnit;
    }
    BlinkingLights(3);
    playNote(100, 500);
    ResetScore();
}

function ResetScore() {
    console.log("resetscore aangeroepen");
    currentLevel = 1;
    scorePlayer.innerHTML = "SCORE: " + currentLevel;

    playerSequencePosition = 0;
    difficulty = 1000;
    playerSequence = [];
    generatedSequence = [];
}

let namePlayer = document.getElementById('textbox');
let scoreList = document.getElementById('scoreList');

let gameResult = {};

function AddScore() {
    let playerName = namePlayer.value;

    if(localStorage.getItem(playerName) === null || highScoreUnit > localStorage.getItem(playerName)) {
        localStorage.setItem(playerName, highScoreUnit);
    }

    let keys = Object.keys(localStorage);

    let highScores = [];
    for (let i = 0; i < keys.length; i++) {
        let playerName = keys[i];
        let playerScore = localStorage.getItem(keys[i]);

        highScores.push({playerName,playerScore});
    }

    highScores.sort((a, b) => parseFloat(b.playerScore) - parseFloat(a.playerScore)); //niet zelf geschreven

    for(let i = 0; i < highScores.length; i++){
        const newLi = document.createElement("li");
        const newContent = document.createTextNode(highScores[i].playerName +  ": "+ highScores[i].playerScore);
        newLi.appendChild(newContent);
        scoreList.append(newLi);
    }
}

function BlinkingLights(frequency) {
    for (let i = 0; i < frequency; i++) {
        setTimeout(function () {
            buttonRed.style.opacity = "100%";
            buttonYellow.style.opacity = "100%";
            buttonGreen.style.opacity = "75%";
            buttonBlue.style.opacity = "100%";

            setTimeout(() => {
                buttonRed.style.opacity = "";
                buttonYellow.style.opacity = "";
                buttonGreen.style.opacity = "";
                buttonBlue.style.opacity = "";
            }, 900);
        }, 1000 * i);
    }
}

function arraysEqual(a, b) { //NIET zelfgeschreven
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.
    // Please note that calling sort on an array will modify that array.
    // you might want to clone your array first.

    for (let i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

let audioCtx = new (window.AudioContext || window.webkitAudioContext)(); //functie van stackoverflow, NIET zelfgeschreven
function playNote(frequency, duration) {
    // create Oscillator node
    let oscillator = audioCtx.createOscillator();

    oscillator.type = 'square';
    oscillator.frequency.value = frequency; // value in hertz
    oscillator.connect(audioCtx.destination);
    oscillator.start();

    setTimeout(
        function () {
            oscillator.stop();
        }, duration);
}
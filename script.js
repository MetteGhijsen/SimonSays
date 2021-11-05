const maxLevel = 100;
let currentLevel = 1;
let difficulty = 1000;
let generatedSequence = [];
let playerSequence = [];

let buttonRed = document.getElementById('buttonRed');
let buttonYellow = document.getElementById('buttonYellow');
let buttonGreen = document.getElementById('buttonGreen');
let buttonBlue = document.getElementById('buttonBlue');
let scorePlayer = document.getElementById('winsplayer');

function PlayGame() {
    if (currentLevel === 1) {
        GenerateSequence();
        ShowSequence();
    }
}

function GenerateSequence() {
    for (let i = 0; i < maxLevel; i++) {
        generatedSequence[i] = Math.floor(Math.random() * 4);
    }
}

function ShowSequence() {
    for (let i = 0; i < 10; i++) {
        switch (generatedSequence[i]) {
            case 0: //rood
                buttonRed.style.opacity = "100%";
                setTimeout(function () {
                    buttonRed.style.opacity = "";
                }, difficulty);
                //playNote(310, 500);
                break;
            case 1: //geel
                buttonYellow.style.opacity = "100%";
                setTimeout(function () {
                    buttonYellow.style.opacity = "";
                }, difficulty);
                //playNote(252, 500);
                break;
            case 2: //groen
                buttonGreen.style.opacity = "75%";
                setTimeout(function () {
                    buttonGreen.style.opacity = "";
                }, difficulty);
                //playNote(415, 500);
                break;
            case 3: //blauw
                buttonBlue.style.opacity = "100%";
                setTimeout(function () {
                    buttonBlue.style.opacity = "";
                }, difficulty);
                //playNote(209, 500);
                break;
        }
    }
}

function Choice(color) {
    for (let i = 0; i < currentLevel; i++) {
        playerSequence[i] = color;
        switch (color) {
            case 0:
                playNote(310, 500);
                break;
            case 1:
                playNote(252, 500);
                break;
            case 2:
                playNote(415, 500);
                break;
            case 3:
                playNote(209, 500);
                break;
        }

        if (generatedSequence[i] !== playerSequence[i]) {
            WrongAnswer();
        } else {
            GoodAnswer();
        }
    }
}

function GoodAnswer() {
    BlinkingLights(1);
    playNote(420, 500);

    if (currentLevel < maxLevel) {
        currentLevel++;
        scorePlayer.innerHTML = currentLevel;
        difficulty -= 50;
        ShowSequence();
    }
}

function WrongAnswer() {
    BlinkingLights(3);
    playNote(100, 500);
}

function BlinkingLights(frequency) {
    for (let i; i < frequency; i++) {
        buttonRed.style.opacity = "100%";
        buttonYellow.style.opacity = "100%";
        buttonGreen.style.opacity = "75%";
        buttonBlue.style.opacity = "100%";

        setTimeout(() => {
            buttonRed.style.opacity = "";
            buttonYellow.style.opacity = "";
            buttonGreen.style.opacity = "";
            buttonBlue.style.opacity = "";
        }, 500);
    }
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


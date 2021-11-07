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

function startRound(){
    console.log("start round");
    generatedSequence = generateSequence(currentLevel);

    playerSequence = [];
    showSequence();
}

function generateSequence(amount) {
    console.log("generatesequence aangeroepen");
    const sequence = [];
    for (let i = 0; i < amount; i++) {
        sequence.push(Math.floor(Math.random() * 4));
    }
    return sequence;
}

function showSequence() {
    console.log("showsequence aangeroepen");
    for (let i = 0; i < generatedSequence.length; i++) {
        buttonRed.style.opacity = "";
        buttonYellow.style.opacity = "";
        buttonGreen.style.opacity = "";
        buttonBlue.style.opacity = "";
        setTimeout(function (){
            switch (generatedSequence[i]) {
                case 0: //rood
                    flashTile(buttonRed);
                    playSound(buttonRed);
                    break;
                case 1: //geel
                    flashTile(buttonYellow);
                    playSound(buttonYellow);
                    break;
                case 2: //groen
                    flashTile(buttonGreen);
                    playSound(buttonGreen);
                    break;
                case 3: //blauw
                    flashTile(buttonBlue);
                    playSound(buttonBlue);
                    break;
            }
        },difficulty*i);
    }
}

function flashTile(tile){
    tile.style.opacity = "100%";
    setTimeout(function (){
        tile.style.opacity = "";
    },difficulty)
}

function playSound(hok){
    switch(hok){
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
    if(playerSequence.length === generatedSequence.length){
        console.log(playerSequence,generatedSequence);
        if(arraysEqual(playerSequence,generatedSequence)){
            goodAnswer();
        }
        else{
            wrongAnswer();
        }
    }
    switch (color){
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
    // for (let i = 0; i < currentLevel; i++) {
    //     switch (color) {
    //         case 0:
    //             playSound(buttonRed);
    //             playerSequence[i] = 0;
    //             compareSequence(i);
    //             break;
    //         case 1:
    //             playSound(buttonYellow);
    //             playerSequence[i] = 1;
    //             compareSequence(i);
    //             break;
    //         case 2:
    //             playSound(buttonGreen);
    //             playerSequence[i] = 2;
    //             compareSequence(i);
    //             break;
    //         case 3:
    //             playSound(buttonBlue);
    //             playerSequence[i] = 3;
    //             compareSequence(i);
    //             break;
    //     }
    // }
}

function goodAnswer() {
    console.log("goodanswer");
    BlinkingLights(1);
    playNote(100, 500);
    playNote(200, 500);
    playNote(300, 500);

    if (currentLevel < maxLevel) {
        currentLevel++;
        scorePlayer.innerHTML = currentLevel;
        difficulty -= 50;

        setTimeout(function (){
            startRound();
        },1500);
    }
}

function wrongAnswer() {
    console.log("wronganswer aangeroepen");
    BlinkingLights(3);
    playNote(100, 500);
    ResetScore();
}

function ResetScore(){
    console.log("resetscore aangeroepen");
    currentLevel = 1;
    difficulty = 1000;
    playerSequence = [];
}

function BlinkingLights(frequency) {
    for (let i=0; i < frequency; i++) {
        setTimeout(function (){
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
        },1000*i);
    }
}

function arraysEqual(a, b) { //niet zelfgeschreven
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.
    // Please note that calling sort on an array will modify that array.
    // you might want to clone your array first.

    for (var i = 0; i < a.length; ++i) {
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


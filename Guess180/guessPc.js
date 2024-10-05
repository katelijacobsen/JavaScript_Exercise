"use strict"; 
//Lad din computer gætte et tal mellem 1-100

//1. Lav variabler der tager fat i input-felterne.
let startBtn = document.querySelector('#startGame');
let printGuess = document.querySelector('#printGuess');
let numGuessesEl = document.querySelector('#numGuesses');
let min = 1;
let max = 100;
let guess = 0;
let numGuesses = 0;

// Random number mellem 1-100/min-max
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function startGame () {
    makeGuess(); // min = 1, max = 100
    startBtn.remove();
}

function makeGuess(){
    // guess = Math.floor((min + max) / 2); 
    guess = randomNumber(min, max);  
    printGuess.innerHTML = `Is it ${guess}?`;
    numGuesses += 1;
    numGuessesEl.innerHTML = numGuesses;

}

function handleInput (input){
    if (input === 'tooHigh'){
        max = guess - 1;
        makeGuess(); // min = 1, max = 60
    }
    else if (input === 'tooLow'){
        min = guess + 1;
        makeGuess(); // min = 1, max = 60
    }
    else {
        //korrekt
        printGuess.innerHTML = "Heck yeah.";
    }
    
}
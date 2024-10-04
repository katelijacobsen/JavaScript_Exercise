"use strict"; 
//Lad din computer gætte et tal mellem 1-100

//1. Lav variabler der tager fat i input-felterne.
let printGuess = document.querySelector('#printGuess');
let answer = document.querySelector('#answer');


// Random number mellem 1-100
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
// funktion med boolsk værdi & if-statement
function respond(){
    let guess = randomNumber(1, 100);
    printGuess.innerHTML = `Is it ${guess}?`; // hawk-tuah, spit on that thing
    if (guess > 100 || guess < 1) { // eller-operator
    }
    else if (guess == answer) {
        printGuess.innerHTML = 'Nice!';
    }
}

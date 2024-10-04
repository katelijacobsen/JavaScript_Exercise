// Generere en random tal

//1. Danner nogen variabler. 
//2. bruger const for button, da den ikke skal ændres.
//3. bruger let for printNumber, da den skal ændres.
const button = document.getElementById("button");
let printNumber = document.getElementById("printNumber");

// 4. bruger en funktion, som skal generere et random tal.
// 5. min og max er hvor mange tal der skal være.
// 6. Math.floor runder ned til nærmeste heltal.
// 7. Math.random giver et random tal mellem 0 og 1.
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// 8. bruger addEventListener til at køre funktionen når man klikker på knappen.
// 9. Danner en variabel, som kalder funktionen og sætter den til at være et random tal.
// 10. bruger innerHTML til at skrive det random tal, som funktionen genererer.
button.addEventListener("click", function () {
    let randomNumber = getRandomNumber(1, 100);
    printNumber.innerHTML = randomNumber;
});



"use strict";
//scriptet køres som den moderne tilgang.
//hjælper at fange fejl tidligt. Gør nogle af de 'løse' ting i JS strengere.
//Forhrindre at bruge visse mindre gode prakisser, som at oprette globale variabler ved en fejl.
//Gør koden lettere at debugge, da den fanger fejl tidligt.
const n1 = 1; //ses som tal derfor regner det ud som 2
const n2 = 2;

const s1 = "1"; // sætter man begge sammen s1 + s2, bliver det opfattet som en string.
const s2 = "2";

console.log( 'c' + 'a' + 't' === 'cat'); //boolean

console.log("This is the first line\nAnd this is the second") // String with new line

console.log("con" + "cat" + "e" + "nate"); //String that adds each string together.

//Laver en funktion til vores onclick button. Eventlistener er allerede i HTML.
function MomsBeregner() {
    // DOM DOM DOM & bruger parseFloat for at lave vores tekst værdi (string) om til et numerisk værdi (tal).
    const mouneh = parseFloat(document.getElementById('mouneh').value);
    const moms = parseFloat(document.getElementById('moms').value) || 25; // Eller-Operator. bliver brugt hvis jeg ikke bruger min egen definition på moms, så brug 25%.
    
    
    // if - statement. Hvis Beløbet bliver tastet ind så vis output. Ellers vis string uden beløb.
    if (!isNaN(mouneh)) { //Boolean - Ikke blevet defineret endnu indtil vi har indtastet selv et beløb.
        
        const mounehMoms = mouneh * (1 + moms / 100); //Number med arimetiske operationer. se det som 1.25 / 100. Derefter en String hvor vi desuden skifter indholdet ud.
        document.getElementById('output').textContent = `Beløb med moms: ${mounehMoms.toFixed(2)} DKK`; //Afrunder tallet med to cifre med toFixed(2)
    
    } else {
        //String der vises inden man selv indtaster et beløb
        document.getElementById('output').textContent = 'Indtast dit beløb ind her';
    }
}

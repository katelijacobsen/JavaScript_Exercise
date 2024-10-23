// VARIABLER & VÆRDIER - JavaScript 1
"use strict"; //Bruger strict mode. Det er lidt en feature af 
              //JavaScript der gør ens syntaks mere konsistent, sikkert og forudsigelig.  
const bool = true; //Boolean
const string = "Hej med dig"; // Tekststring
const numbers = 41 + 2; //Numbers
const object = { name: "Jens", age: 35, gender: "men", married: false}; //Object
const symbol = Symbol("symbol"); //Symbol
const nothing = null; //Null
const undefines = undefined; //Undefined

//console.log(object); //Printer variable
//console.log(typeof(bool)); //typeof() printer variablen type 

// Datatype konvertering - JavaScript 2

let myString = "34";
console.log("type 1", typeof myString);
myString = Number(myString);
console.log("type 2", typeof myString);

let myBoolean = true; 
myBoolean = Number(myBoolean);
console.log("type 3", typeof myBoolean);

let myStriing = "45";
myStriing = Number.parseInt(myStriing);
console.log(myStriing);

// Konkatenation / Operatror
//Number
const n1 = 1; 
const n2 = 2;
//String
const s1 = "1"; 
const s2 = "2";

console.log(n1 + n2); //giver 3.
console.log(s1 + s2); // giver 12.
console.log(n1 + s2); // giver 12.
console.log(n2 + s1); // giver 21.


//Øvelser
 console.log("" + 1 + 0); // giver 10.
 console.log("" - 1 + 0 ); // giver -1. Konkatenation med - giver -1. 
 console.log(true + false); // giver 1. True er 1 of False er 0.
 console.log(6 / "3"); // giver 2. Konkatenation med / giver 2. 
 console.log("2" * "3"); // giver 6.
 console.log(4 + 5 + "px"); // giver 9 px. 
 console.log("$" + 4 + 5); // giver $45.
 console.log("4" - 2); // giver 2.
 console.log("4px" - 2); // giver NaN.
 console.log( 7 / 0); // giver Infinity.
 console.log(" -9 " + 5); // giver -9 5. Skal se + som et tilføjelse.
 console.log(" -9 " - 5); // giver -14.
 console.log( null + 1 ); // giver 1. 
 console.log(undefined + 1); //giver NaN.

 // Falsy & truthy Øvelser.

const value = "";
    if (value) {
    console.log("value is truthy");
} else {
    console.log("value is falsy");
}

//Sammenligninger med eller uden type
 console.log ( 0 == "0"); //true, fordi den checker for lighed automatisk type konvertering.
 console.log ( 0 == []); //true.
 console.log ( "0" == []); //false


 //Parameter 
 //Kalde en funktion (bruge en funktion)
 sayHello("John", "Dog", "no name"); 
 //Erklære en funktion (lave en funktion, hvad skal den gøre?)
 function sayHello(name, animalType, animalName){ 
    console.log(`My name is ${name} and I have a ${animalType} that has ${animalName}`);
}



function presentPet (name, animalColor) {
    console.log(name + " is a " + animalColor + " animal");
}

let name = "Kitty";
presentPet( name, "black");




function defaultValues (from, text= "Hello", to = "World") {
    console.log(from + " " + text + " " + to);

};

defaultValues("Hello");


//Unik ID
const uniqueid = crypto.randomUUID();

console.log("din id er :" + uniqueid);
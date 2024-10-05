// const letters = ['a','b','c','d','e','f','g','h',];
// // fremviser det 4. element i array'et.
// console.log(letters[4]);

// // laver en ny array, men erstatter elementet 'e' med '*':
// const newArray = letters; 

// newArray[4] = '*';

// console.log(letters[4]);

const people = ["Harry", "Ron", "Hermione"];
let result; 

result = people.push("Draco"); //ttilføjer element til array.
result = people.push("Neville"); //ttilføjer element til array.
result = people.push("Luna"); //ttilføjer element til array.
result = people.pop() // fjerner det sidste element fra arrayet people
                      // Det fjernede element gemmes i variablen result 

console.log(result);
console.log(people);
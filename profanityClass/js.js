const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

let theSentenceHasBeenTreated = false; //Boolean værdi

let theText =
  document.querySelector("p").textContent; /* erstatter tekst med ny tekst */
document.querySelector("button").addEventListener("click", replaceBadWords);

function replaceBadWords() {
  console.log("Hej", theText);
  if (theSentenceHasBeenTreated === false) {
    curseWords.forEach((curseWord) => {
      theText = theText.replaceAll(curseWord.bad, curseWord.good); // skifter ud med ny tekst
      document.querySelector("p").textContent = theText;
      theSentenceHasBeenTreated = true;
    });
  }else{
    document.querySelector("dialog").showModal()
  }

}

// function isItSafe() {

//   return false;
// }

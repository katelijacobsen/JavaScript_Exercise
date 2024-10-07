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
      theText = theText.replaceAll(curseWord.bad, `<span>${curseWord.good}</span>`); // skifter ud med ny tekst
    });
      document.querySelector("p").innerHTML = theText;
      theSentenceHasBeenTreated = true;
      document.querySelector("p").style.color = "red";
      document.querySelector("p").style.backgroundColor = "yellow";
  }else{
    document.querySelector("dialog").showModal()
  }

}

// function isItSafe() {

//   return false;
// }

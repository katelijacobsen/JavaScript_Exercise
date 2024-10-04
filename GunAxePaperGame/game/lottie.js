// Implementerede animationer som ikoner/assets.
//Her tag vi fat i vores HTML-element med en id
//&definere vider vores variabel ud fra lottie syntaksen.

var drawAnimation = lottie.loadAnimation({
  container: document.getElementById("drawAnimation"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "tie.json",
});
var loseAnimation = lottie.loadAnimation({
  container: document.getElementById("loseAnimation"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "lose_emoji.json",
});
var winAnimation = lottie.loadAnimation({
  container: document.getElementById("winAnimation"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "win.json",
});
var gunAnimation = lottie.loadAnimation({
  container: document.getElementById("gunIcon"),
  renderer: "svg",
  loop: true,
  autoplay: false,
  path: "gunAnimation.json",
});


//Tilføjer vores animation en hover-funktion som vi beskriver nedenunder.
document.querySelector(".gun").addEventListener("mouseenter", function () {
  gunAnimation.play();
});

document.querySelector(".gun").addEventListener("mouseleave", function () {
  gunAnimation.stop();
});


var axeAnimation = lottie.loadAnimation({
  container: document.getElementById("axeIcon"),
  renderer: "svg",
  loop: true,
  autoplay: false,
  path: "axeAnimation.json",
});

document.querySelector(".axe").addEventListener("mouseenter", function () {
  axeAnimation.play();
});

document.querySelector(".axe").addEventListener("mouseleave", function () {
  axeAnimation.stop();
});

var paperAnimation = lottie.loadAnimation({
  container: document.getElementById("paperIcon"),
  renderer: "svg",
  loop: true,
  autoplay: false,
  path: "paperAnimation.json",
});

document.querySelector(".paper").addEventListener("mouseenter", function () {
  paperAnimation.play();
});

document.querySelector(".paper").addEventListener("mouseleave", function () {
  paperAnimation.stop();
});

// Vælger alle vores bonita knapper
const buttons = document.querySelectorAll("button");

// Loop-do-di-doo
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    this.style.transform = "scale(.9)";

    setTimeout(() => {
      this.style.transform = "scale(1)";
    }, 400);
  });
});

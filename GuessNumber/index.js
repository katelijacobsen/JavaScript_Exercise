// Sætter nogen variabler på plads
let y = Math.floor(Math.random() * 10 + 1); // Random tal mellem 1 & 10
let guess = 1;

// Lyt efter klik på knappen "Submit guess"
document.getElementById("submitguess").onclick = function () {
  let x = document.getElementById("guessLabel").value;

  if (x == y) {
    showPopover("YAS QUEEN SLAAAAaaYy");
    startCelebration();
    rightGuessEffect();
  } else if (x < y) {
    guess++;
    showPopover("Naah man det tal var for lavt :o");
    wrongGuessEffect();
  } else {
    guess++;
    showPopover("Nuh uh det var for stort tal :(");
    wrongGuessEffect();
  }
};

// Funktion til at vise popover
function showPopover(message) {
  const popover = document.getElementById("popover");
  const popoverMessage = document.getElementById("popoverMessage");

  popoverMessage.textContent = message;
  popover.style.display = "flex"; // Viser popoveren

  document.getElementById("closePopover").onclick = function () {
    popover.style.display = "none"; // Lukker popoveren
  };
}

// Starter fejring (konfetti)
function startCelebration() {
  const duration = 15 * 1000,
    animationEnd = Date.now() + duration,
    defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
}

// Visuelle effekter ved forkerte og korrekte gæt
function wrongGuessEffect() {
  const guessInput = document.getElementById("guessLabel");
  guessInput.classList.add("wrong-guess");

  setTimeout(() => {
    guessInput.classList.remove("wrong-guess");
  }, 2000);
}

function rightGuessEffect() {
  const guessInput = document.getElementById("guessLabel");
  guessInput.classList.add("right-guess");

  setTimeout(() => {
    guessInput.classList.remove("right-guess");
  }, 2000);
}

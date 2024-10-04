// Tilføjer nogen eventlistener til vores ikoner
document
  .querySelector(".gun")
  .addEventListener("click", () => playRound("gun"));
document
  .querySelector(".axe")
  .addEventListener("click", () => playRound("axe"));
document
  .querySelector(".paper")
  .addEventListener("click", () => playRound("paper"));

function checkWinner(player, computer) {
  if (player === computer) {
    return "draw";
  }

  if (
    (player === "gun" && computer === "axe") ||
    (player === "axe" && computer === "paper") ||
    (player === "paper" && computer === "gun")
  ) {
    return "win";
  } else {
    return "lose";
  }
}

function displayResult(result) {
  if (result === "win") {
    document.getElementById("win").classList.remove("hidden");
  } else if (result === "lose") {
    document.getElementById("lose").classList.remove("hidden");
  } else {
    document.getElementById("draw").classList.remove("hidden");
  }
}

function clearText() {
  document.getElementById("win").classList.add("hidden");
  document.getElementById("lose").classList.add("hidden");
  document.getElementById("draw").classList.add("hidden");
}

function playRound(playerChoice) {
  clearText();

  const choices = ["axe", "paper", "gun"];

  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  const player1 = document.getElementById("player1");
  const player2 = document.getElementById("player2");

  //Nulstiller hånden.
  player1.className = "player";
  player2.className = "player";

  player1.classList.add("shake");
  player2.classList.add("shake");

  setTimeout(() => {
    player1.classList.remove("shake");
    player2.classList.remove("shake");

    player1.classList.add(playerChoice);
    player2.classList.add(computerChoice);

    const result = checkWinner(playerChoice, computerChoice);
    displayResult(result);
  }, 1800);

}

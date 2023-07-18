function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      return 1;
    } else if (computerSelection == "scissors") {
      return 0;
    } else {
      return -1;
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      return 1;
    } else if (computerSelection == "scissors") {
      return 0;
    } else {
      return -1;
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      return 0;
    } else if (computerSelection == "paper") {
      return 1;
    } else {
      return -1;
    }
  }
}

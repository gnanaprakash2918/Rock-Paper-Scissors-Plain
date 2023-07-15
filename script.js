function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
  while (true) {
    let choice = prompt("Enter your Choice ?").toLowerCase();
    if (choice == "rock" || choice == "scissors" || choice == "paper") {
      return choice;
    } else alert("Enter a valid choice !");
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  alert(
    `Player chose ${playerSelection} and Computer chose ${computerSelection}`
  );
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

for (let i = 0; i < 5; i++) {
  let computerChoice = getComputerChoice();
  let playerChoice = getPlayerChoice();
  let winner = playRound(playerChoice, computerChoice);
  alert(
    winner == 1 ? "Player Won" : winner == -1 ? "Its a tie" : "Computer won"
  );
}

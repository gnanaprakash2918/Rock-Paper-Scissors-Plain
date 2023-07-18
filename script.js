function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

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

let playerScore = 0,
  computerScore = 0,
  ties = 0,
  rounds = 0;

document.querySelector(
  "body > div.scores-container.winner > div > div.player > span.player-score.winner"
).textContent = "";
document.querySelector(
  "body > div.scores-container.winner > div > div.computer > span.computer-score.winner"
).textContent = "";

const divSelector = document.getElementsByClassName("image-container");
const arr = Array.from(divSelector);
console.log(arr);

for (let i = 0; i < arr.length; i++) {
  arr[i].addEventListener("click", function () {
    let playerChose = arr[i].className.split(" ")[1];
    let computerChose = getComputerChoice();

    document.querySelector(
      "body > div.scores-container.winner > div > div.player > span.player-score.winner"
    ).textContent = playerChose;

    document.querySelector(
      "body > div.scores-container.winner > div > div.computer > span.computer-score.winner"
    ).textContent = computerChose;

    let winner = playRound(playerChose, computerChose);
    if (winner == 1) {
      playerScore += 1;
      document.querySelector(
        "body > div:nth-child(3) > div > div.player > span.player-score"
      ).textContent = playerScore;
      if (ties) {
        ties = 0;
        const t = document.querySelector("body > div.scores-container.winner");
        t.removeChild(t.lastChild);
      }
    } else if (winner == 0) {
      computerScore += 1;
      document.querySelector(
        "body > div:nth-child(3) > div > div.computer > span.computer-score"
      ).textContent = computerScore;
      if (ties) {
        ties = 0;
        const t = document.querySelector("body > div.scores-container.winner");
        t.removeChild(t.lastChild);
      }
    } else {
      ties += 1;
      if (ties == 1) {
        const sp = document.createElement("span");
        sp.textContent = "Tie !";
        sp.setAttribute("style", "text-align:center");
        document
          .querySelector("body > div.scores-container.winner ")
          .appendChild(sp);
      }
    }

    if (playerScore == 5 || computerScore == 5) {
      let won = playerScore == 5 ? "You won" : "Computer won";
      alert(`${won}`);

      console.log(playerScore, computerScore);
      document.querySelector(
        "body > div.scores-container.winner > div > div.player > span.player-score.winner"
      ).textContent = "";
      document.querySelector(
        "body > div.scores-container.winner > div > div.computer > span.computer-score.winner"
      ).textContent = "";
      document.querySelector(
        "body > div:nth-child(3) > div > div.player > span.player-score"
      ).textContent = 0;
      document.querySelector(
        "body > div:nth-child(3) > div > div.computer > span.computer-score"
      ).textContent = 0;
      playerScore = computerScore = 0;
      playerChose = computerChose = "";
    }
  });
}

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "You Win! " + playerSelection + " beats " + computerSelection;
  } else if (playerSelection === computerSelection) {
    return "It's a Tie! Play again.";
  } else {
    return "You Lose! " + computerSelection + " beats " + playerSelection;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Enter your choice: Rock, Paper, or Scissors");
    const computerSelection = getComputerChoice();
    const roundResult = playRound(playerSelection, computerSelection);
    
    console.log(roundResult);

    if (roundResult.includes("Win")) {
      playerScore++;
    } else if (roundResult.includes("Lose")) {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log("You win the game!");
  } else if (playerScore < computerScore) {
    console.log("You lose the game!");
  } else {
    console.log("It's a tie in the game!");
  }
}

game();

"use strict";

function computerPlay() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "Rock";
      break;
    case 1:
      return "Paper";
      break;
    case 2:
      return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.substr(1).toLowerCase();

  if (playerSelection === computerSelection) {
    return "Draw!";
  } else if ((playerSelection === "Rock" && computerSelection === "Scissors")
          || (playerSelection === "Paper" && computerSelection === "Rock")
          || (playerSelection === "Scissors" && computerSelection === "Paper")) {
            return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Rock, paper, or scissors?");
    alert(playRound(playerSelection, computerPlay()));
  }
}

game();
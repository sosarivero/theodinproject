"use strict";

function computerPlay() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      computerHand.textContent = "Rock";
      return "Rock";
    case 1:
      computerHand.textContent = "Rock";
      return "Paper";
    case 2:
      computerHand.textContent = "Rock";
      return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.substr(1).toLowerCase();

  switch (playerSelection) {
    case "Rock":
      playerHand.textContent = "Rock";
      break;
    case "Paper":
      playerHand.textContent = "Paper";
      break;
    case "Scissors":
      playerHand.textContent = "Scissors";
      break;
  }

  if (playerSelection === computerSelection) {
    return "Draw!";
  } else if ((playerSelection === "Rock" && computerSelection === "Scissors")
          || (playerSelection === "Paper" && computerSelection === "Rock")
          || (playerSelection === "Scissors" && computerSelection === "Paper")) {
            playerScoreCounter.textContent = playerScoreCounter.textContent.replace(/☆/, "★");
  } else {
    computerScoreCounter.textContent = computerScoreCounter.textContent.replace(/☆/, "★");
  }
}

let playerScore = 0;
let computerScore = 0;

const playerScoreCounter = document.querySelector('#human-score');
const computerScoreCounter = document.querySelector('#computer-score');

const playerHand = document.querySelector('#human-play');
const computerHand = document.querySelector('#computer-play');
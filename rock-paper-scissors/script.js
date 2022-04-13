"use strict";

function computerPlay() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
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
            playerScoreCounter.textContent = ++playerScore;
  } else {
    computerScoreCounter.textContent = ++computerScore;
  }
}

let playerScore = 0;
let computerScore = 0;
const ROUNDS = 5;

const playerScoreCounter = document.querySelector('#human-score');
playerScoreCounter.textContent = playerScore;
const computerScoreCounter = document.querySelector('#computer-score');
computerScoreCounter.textContent = computerScore;

const playerHand = document.querySelector('#human-play');
const computerHand = document.querySelector('#computer-play');
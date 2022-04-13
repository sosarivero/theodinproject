"use strict";

function computerPlay() {
  let choice = Math.floor(Math.random() * 3);

  switch (choice) {
    case 0:
      computerHand.textContent = "✊";
      return "Rock";
    case 1:
      computerHand.textContent = "✋";
      return "Paper";
    case 2:
      computerHand.textContent = "✌";
      return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.substr(1).toLowerCase();

  switch (playerSelection) {
    case "Rock":
      playerHand.textContent = "✊";
      break;
    case "Paper":
      playerHand.textContent = "✋";
      break;
    case "Scissors":
      playerHand.textContent = "✌";
      break;
  }

  if (playerSelection === computerSelection) {
    gameState.textContent = `Draw! The computer also chose ${playerSelection}.`
  } else if ((playerSelection === "Rock" && computerSelection === "Scissors")
          || (playerSelection === "Paper" && computerSelection === "Rock")
          || (playerSelection === "Scissors" && computerSelection === "Paper")) {
            playerScoreCounter.textContent = playerScoreCounter.textContent.replace(/☆/, "★");
            gameState.textContent = `You win! ${playerSelection} beats ${computerSelection}.`
  } else {
    computerScoreCounter.textContent = computerScoreCounter.textContent.replace(/☆/, "★");
    gameState.textContent = `You lose! ${playerSelection} loses to ${computerSelection}.`
  }
}

const gameState = document.querySelector('#game-state')

const playerScoreCounter = document.querySelector('#human-score');
const computerScoreCounter = document.querySelector('#computer-score');

const playerHand = document.querySelector('#human-play');
const computerHand = document.querySelector('#computer-play');
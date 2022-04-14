"use strict";

const telesketch = document.getElementById('telesketch');

function createGrid(size) {
  telesketch.style.gridTemplateColumns = `repeat(${size}, 1fr)`

  for (let i = 0; i < size ** 2; i++) {
    let gridCell = document.createElement('div');
    gridCell.className = 'grid-cell'

    // Convert cells on black on hover.
    gridCell.addEventListener('mouseenter', event => {
      event.target.style.background = "white";
    });

    telesketch.appendChild(gridCell);
  }
}


function rainbow() {
  const cells = Array.from(document.querySelectorAll('.grid-cell'));
  
  // First we have to remove the previous event listener in all cells.
  cells.forEach(cell => {
    removeEventListener('mouseenter', cell)
  });

  cells.forEach(cell => {
    cell.addEventListener('mouseenter', event => {
    // Source for the random color generation:
    // Chris Coyier, CSS-Tricks.
    // https://css-tricks.com/snippets/javascript/random-hex-color/
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    event.target.style.background = `#${randomColor}`
    })});
  }

function resetGrid() {
  let newSize = window.prompt("How many squares per side in new grid? (1-100)");

  // TODO: Add error prompt for when user adds incorrect input.

  telesketch.innerHTML = "";
  createGrid(newSize);
}

createGrid(16)
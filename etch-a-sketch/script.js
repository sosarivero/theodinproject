"use strict";

const telesketch = document.getElementById('telesketch');

function createGrid(size) {
  telesketch.style.gridTemplateColumns = `repeat(${size}, 1fr)`

  for (let i = 0; i < size; i++) {
    let gridCell = document.createElement('div');
    gridCell.className = 'grid-cell'
    telesketch.appendChild(gridCell);

    for (let j = 1; j < size; j++) {
    // Needs to repeat the createElement inside of this loop for it to work.
    let gridCell = document.createElement('div');
    gridCell.className = 'grid-cell'
    telesketch.appendChild(gridCell);      
    }
  }
}

createGrid(16);
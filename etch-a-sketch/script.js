"use strict";

const telesketch = document.getElementById('telesketch');

function createGrid(size) {
  telesketch.style.gridTemplateColumns = `repeat(${size}, 1fr)`

  for (let i = 0; i < size ** 2; i++) {
    let gridCell = document.createElement('div');
    gridCell.className = 'grid-cell'
    telesketch.appendChild(gridCell);
  }
}

createGrid(16);
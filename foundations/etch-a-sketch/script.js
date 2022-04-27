'use strict';

const telesketch = document.getElementById('telesketch');

function createGrid(size) {
  telesketch.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size ** 2; i++) {
    let gridCell = document.createElement('div');
    gridCell.className = 'grid-cell';

    // Convert cells on black on hover.
    gridCell.addEventListener('mouseenter', (event) => {
      event.target.style.background = 'black';
    });

    telesketch.appendChild(gridCell);
  }
}

function rainbow() {
  const cells = Array.from(document.querySelectorAll('.grid-cell'));
  // First we have to remove the previous event listener in all cells.
  cells.forEach((cell) => {
    removeEventListener('mouseenter', cell);
  });

  cells.forEach((cell) => {
    cell.addEventListener('mouseenter', (event) => {
      // Source for the random color generation:
      // Chris Coyier, CSS-Tricks.
      // https://css-tricks.com/snippets/javascript/random-hex-color/
      let randomColor = Math.floor(Math.random() * 16777215).toString(16);
      event.target.style.background = `#${randomColor}`;
    });
  });
}

function darkenCell() {
  // This function makes use of data attributes.
  // For more info: https://css-tricks.com/a-complete-guide-to-data-attributes/

  const cells = Array.from(document.querySelectorAll('.grid-cell'));
  // First we have to remove the previous event listener in all cells.
  cells.forEach((cell) => {
    removeEventListener('mouseenter', cell);
  });

  // Set a data attribute to each div in the grid.
  // This will be used to indirectly control the alpha of the background.
  cells.forEach((cell) => cell.setAttribute('data-alpha', 100));

  cells.forEach((cell) => {
    cell.addEventListener('mouseenter', (event) => {
      cell.dataset.alpha -= 10;
      let cellAlpha = cell.getAttribute('data-alpha');
      // Using hsla colors and literal templates we can programatically change
      // the alpha of the background through each pass of the mouse cursor.
      event.target.style.background = `hsla(0, 0%, ${cellAlpha}%, 1)`;
    });
  });
}

function resetGrid() {
  let newSize = window.prompt('How many squares per side in new grid? (1-100)');

  // TODO: Add error prompt for when user adds incorrect input.

  telesketch.innerHTML = '';
  createGrid(newSize);
}

// Creates initial grid.
createGrid(16);

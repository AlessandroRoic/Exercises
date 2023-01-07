'use strict';

(() => {
  const wrapper = document.getElementById('app');
  let gameState = {};
  let currentPlayer = 'X';
  const cellPositions = [
    'topLeft',
    'topMiddle',
    'topRight',
    'middleLeft',
    'center',
    'middleRight',
    'bottonLeft',
    'bottomMiddle',
    'bottonRight',
  ];

  const Cell = (position) => {
    const cellButton = document.createElement('button');
    cellButton.classList.add('cell', `cell__${position}`);
    cellButton.addEventListener('click', () => {
      if (cellButton.textContent) return;
      cellButton.textContent = currentPlayer;
      gameState[position] = currentPlayer;
      const winner = checkPlayerHasWon();
      console.log(winner)
      if (winner) {
        wrapper.innerHTML = `Winner is player ${winner}`
        setTimeout(() => {
          init();
        }, 2000)
      }
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    });
    return cellButton;
  };

  const checkPlayerHasWon = () => {
    const firstDiagonal = ['topLeft', 'center', 'bottonRight'];
    const secondDiagonal = ['topRight', 'center', 'bottonLeft'];
    for (let diagonal of [firstDiagonal, secondDiagonal]) {
      const d = checkIfAllSameValue(diagonal);
      if (d) return d;
    }
    for (let i = 0; i < cellPositions.length; i++) {
      if (i % 3 === 0) {
        const row = checkIfAllSameValue(cellPositions.slice(i, i + 3));
        if (row) return row;
        const offset = i / 3;
        const col = checkIfAllSameValue([
          cellPositions[offset],
          cellPositions[3 + offset],
          cellPositions[6 + offset],
        ]);
        if (col) return col;
      }
    }
  };

  const checkIfAllSameValue = (arr) => {
    const array = arr.map((value) => gameState[value]);
    return new Set(array).size === 1 ? array[0] : null;
  }

  const init = () => {
    wrapper.innerHTML = null;
    gameState = {};
    currentPlayer = 'X';
    for (let position of cellPositions) {
      wrapper.append(Cell(position));
      gameState[position] = null;
    }
  };

  init();
})();

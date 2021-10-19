const levelSelect = document.getElementById("difficulty-level-select");
const playBtn = document.getElementById("start-button");
const gridContainer = document.querySelector(".grid-container");

playBtn.addEventListener("click", function () {
  const userLevel = parseInt(levelSelect.value);
  const cellNum = getCellsNumber(userLevel);
  generateGrid(cellNum);
});

function generateGrid(cellsNumber) {
  gridContainer.innerHTML = "";
  const colNumber = Math.sqrt(cellsNumber);
  const cellSize = 100 / colNumber;
  for (let i = 1; i <= cellsNumber; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.width = `${cellSize}%`;
    cell.style.height = `${cellSize}%`;
    cell.textContent = i;
    cell.addEventListener("click", onCellClick);

    gridContainer.appendChild(cell);
  }
}

function onCellClick() {
  this.classList.toggle("selected");
}

/**
 * Returns the number of cells starting from the level id
 * @param {number} level
 * @returns {number}
 */
function getCellsNumber(level) {
  let cellNumber = 0;
  switch (parseInt(level)) {
    case 1:
      cellNumber = 100;
      break;
    case 2:
      cellNumber = 81;
      break;
    case 3:
      cellNumber = 49;
      break;
  }
  return cellNumber;
}

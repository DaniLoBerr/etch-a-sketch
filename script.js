const gridSquaresContainer = document.querySelector("#grid-squares-container");
const gridContainerSideSizeInPx = 600;

// To get random colors when the hover effect occurs
function getRandomRgbValue(min = 0, max = 255) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function createGrid(squaresPerSide) {
  const totalSquares = squaresPerSide ** 2;
  const squareProportion = gridContainerSideSizeInPx / squaresPerSide;
  // To add the squares to the grid container
  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.setAttribute("style", `flex: 1 1 ${squareProportion}px;`);
    gridSquaresContainer.appendChild(square);
  }
  // To create the hover effect
  const gridSquares = document.querySelectorAll(".square");
  gridSquares.forEach(
    (square) => {
      square.addEventListener("mouseover", () => {
        square.style.flex = `1 1 ${squareProportion}px`;
        // To randomize the hover color
        square.style.backgroundColor = `rgb(
        ${getRandomRgbValue()},
        ${getRandomRgbValue()},
        ${getRandomRgbValue()})`;
        // To get a darkening effect
        square.style.opacity = `${+square.style.opacity + 0.1}`;
      });
    }
  );
}

function resetGrid() {
  const gridSquares = document.querySelectorAll(".square");
  gridSquares.forEach(
    (square) => {
      gridSquaresContainer.removeChild(square);
    }
  );
}

// Create initial 16x16 sketch pad
createGrid(16);

// To give the functionality to the "change grid" button
const changeGridButton = document.querySelector("#change-grid-button");
changeGridButton.addEventListener("click", () => {
  const newSquaresPerSide = +prompt("How many squares per side do you want? (Max 100)");
  if (newSquaresPerSide >= 1 && newSquaresPerSide <= 100) {
    resetGrid();
    createGrid(newSquaresPerSide);
  } else {
    alert("El dato introducido no es válido");
  }
});
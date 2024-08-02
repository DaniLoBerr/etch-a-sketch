const gridSquaresContainer = document.querySelector("#grid-squares-container");
let squaresPerSide = 0;

function changeGrid(newSquaresPerSide) {
  squaresPerSide = newSquaresPerSide;
  totalSquares = squaresPerSide ** 2;
  // Add the squares
  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    gridSquaresContainer.appendChild(square);
  }
  // Create the hover effect
  const gridSquares = document.querySelectorAll(".square");
  gridSquares.forEach(
    (square) => {
      square.addEventListener("mouseover", () => {
        square.classList.add("hovered-square");
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
changeGrid(16);

const changeGridButton = document.querySelector("#change-grid-button");
changeGridButton.addEventListener("click", () => {
  squaresPerSide = +prompt("How many squares per side do you want? (Max 100)");
  if (squaresPerSide >= 1 && squaresPerSide <= 100) {
    resetGrid();
    changeGrid(squaresPerSide);
    // Resize squares
    const gridSquares = document.querySelectorAll(".square");
    const gridContainerSideSizeInPixels = 600;
    const newSquareProportion = gridContainerSideSizeInPixels / squaresPerSide;
    gridSquares.forEach(
      (square) => {
        square.setAttribute("style", `flex: 1 1 ${newSquareProportion}px;`);
      }
    );
  } else {
    alert("El dato introducido no es válido");
  }
});

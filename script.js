const gridSquaresContainer = document.querySelector("#grid-squares-container");

// Create the initial 16x16 squares screen
let squaresPerSide = 16;
const totalSquares = squaresPerSide ** 2;
for (let i = 0; i < totalSquares; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  gridSquaresContainer.appendChild(square);
}

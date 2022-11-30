for (let i = 0; i < 256; i++) {
  const newDiv = document.createElement("div");
  document.querySelector(".container").appendChild(newDiv);
}

const squares = document.querySelectorAll(".hover");

squares.forEach((square) => {
  square.addEventListener("mouseover", function(e) {
    e.target.style.backgroundColor = "crimson";
  });
});

const gridButton = document.querySelector("button");

gridButton.addEventListener("click", () => {
  const body = document.querySelector("body");
  body.removeChild(document.querySelector(".container"));

  const newGrid = document.createElement("div");
  newGrid.setAttribute("class", "container");
  body.appendChild(newGrid);
  
  setGrid();
})

function setGrid() {
  let gridSize = 0;

  do {
    gridSize = parseInt(prompt("Please enter a new value between 1 and 100"));
    console.log(typeof gridSize);
    console.log(gridSize);
  } while (gridSize > 100 || gridSize < 1 || !(gridSize));

  for (let i = 0; i < Math.pow(gridSize, 2); i++) {
    const newDiv = document.createElement("div");
    document.querySelector(".container").appendChild(newDiv);
  };
}
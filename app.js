const TOGGLE_BUTTON_CLASS = "toggle";

const toggleButtons = [];
const colorBtn = document.querySelector(".btn-color");
const rainbowBtn = document.querySelector(".btn-rainbow");
const eraseBtn = document.querySelector(".btn-erase");
const clearButton = document.querySelector(".btn-clear");
toggleButtons.push(colorBtn, rainbowBtn, eraseBtn);

const gridRangeLabel = document.querySelector(".grid-range-label");
const gridRangeInput = document.querySelector("#grid-squares-selector");
const sketchPad = document.querySelector(".sketch-pad");
const colorPicker = document.querySelector(".color");

let mouseDown = false;
let color = colorPicker.value;
let squareCount = gridRangeInput.value;

colorPicker.addEventListener("change", () => {
  color = colorPicker.value;
});

const setToggleButton = (button) => {
  return button.addEventListener("click", () => {
    if (button.classList.contains(TOGGLE_BUTTON_CLASS)) {
      return;
    } else {
      toggleButtons.forEach((button) =>
        button.classList.remove(TOGGLE_BUTTON_CLASS)
      );
      button.classList.add(TOGGLE_BUTTON_CLASS);
    }
  });
};

const getRainbowColor = () => {
  const rainbowColors = [
    "#FF0000",
    "#FFA500",
    "#FFFF00",
    "#00FF00",
    "#0000FF",
    "#4B0082",
    "#8F00FF",
  ];
  randomNum = Math.floor(Math.random() * rainbowColors.length + 1);
  return rainbowColors[randomNum];
};

const changeColor = (square) => {
  if (mouseDown) {
    if (colorBtn.classList.contains(TOGGLE_BUTTON_CLASS)) {
      square.style.backgroundColor = color;
    } else if (eraseBtn.classList.contains(TOGGLE_BUTTON_CLASS)) {
      square.style.backgroundColor = "#fff";
    } else if (rainbowBtn.classList.contains(TOGGLE_BUTTON_CLASS)) {
      const rainbowColor = getRainbowColor();
      square.style.backgroundColor = rainbowColor;
    }
  }
};

const buildGridSquares = (value) => {
  let loopLimit = value * value;
  for (let i = 1; i <= loopLimit; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("grid-square");
    sketchPad.appendChild(gridSquare);
    gridSquare.addEventListener("click", () => {
      mouseDown = true;
      changeColor(gridSquare);
      mouseDown = false;
    });
    gridSquare.addEventListener("mousedown", () => {
      mouseDown = true;
    });
    gridSquare.addEventListener("mouseup", () => {
      mouseDown = false;
    });
    gridSquare.addEventListener("mouseover", () => changeColor(gridSquare));
  }
  return;
};

toggleButtons.forEach((button) => {
  setToggleButton(button);
});

clearButton.addEventListener("click", () => {
  squares = document.querySelectorAll(".grid-square");
  squares.forEach((square) => {
    square.style.backgroundColor = "#fff";
  });
});

gridRangeInput.addEventListener("change", (event) => {
  squareCount = event.target.value;
  gridRangeLabel.textContent = `${squareCount} X ${squareCount}`;
  sketchPad.style.gridTemplateColumns = `repeat(${squareCount}, 1fr)`;
  sketchPad.style.gridTemplateRows = `repeat(${squareCount}, 1fr)`;
  buildGridSquares(squareCount);
});

buildGridSquares(squareCount);

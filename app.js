const TOGGLE_BUTTON_CLASS = "toggle";

const toggleButtons = [];
const colorBtn = document.querySelector(".btn-color");
const rainbowBtn = document.querySelector(".btn-rainbow");
toggleButtons.push(colorBtn, rainbowBtn);

const gridRangeLabel = document.querySelector(".grid-range-label");
const gridRangeInput = document.querySelector("#grid-squares-selector");
const sketchPad = document.querySelector(".sketch-pad");

setToggleButton = (button) => {
  return button.addEventListener("click", () => {
    if (button.classList.contains(TOGGLE_BUTTON_CLASS)) {
      button.classList.remove(TOGGLE_BUTTON_CLASS);
    } else {
      button.classList.add(TOGGLE_BUTTON_CLASS);
    }
  });
};

const buildGridSquares = (value) => {
  let loopLimit = value * value;
  for (let i = 1; i <= loopLimit; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("grid-square");
    sketchPad.appendChild(gridSquare);
    // click-event listener
  }
  return;
};

toggleButtons.forEach((button) => {
  setToggleButton(button);
});

gridRangeInput.addEventListener("change", (event) => {
  let value = event.target.value;
  // Below: Break out into helper function?
  gridRangeLabel.textContent = `${value} X ${value}`;
  sketchPad.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
  sketchPad.style.gridTemplateRows = `repeat(${value}, 1fr)`;
  buildGridSquares(value);
});

/*
square click event listeners
gridSquare.addEventListener("click", () => {
      console.log("clicked!");
    });
    //    Mouse over
    let mouseDown = false;
    function changeColor() {
      if (mouseDown) {
        console.log("Change color");
      }
    }
    gridSquare.addEventListener("mousedown", () => {
      mouseDown = true;
    });
    gridSquare.addEventListener("mouseup", () => {
      mouseDown = false;
    });
    gridSquare.addEventListener("mouserover", changeColor);
*/

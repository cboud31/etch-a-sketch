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

toggleButtons.forEach((button) => {
  setToggleButton(button);
});

gridRangeInput.addEventListener("change", (event) => {
  value = event.target.value;
  console.log(value);
  gridRangeLabel.textContent = `${value} X ${value}`;
  sketchPad.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
  sketchPad.style.gridTemplateRows = `repeat(${value}, 1fr)`;
});

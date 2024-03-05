const TOGGLE_BUTTON_CLASS = "toggle";

const toggleButtons = [];
const colorBtn = document.querySelector(".btn-color");
const rainbowBtn = document.querySelector(".btn-rainbow");
toggleButtons.push(colorBtn, rainbowBtn);

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

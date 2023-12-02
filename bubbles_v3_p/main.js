/*
This version is designed for End-Users.

The sectinon below allows you to change all of the parameters of the function,
this means you need not look at / understand the code to customise it.
*/


// #region PARAMETERS

// Colors

const redRange = [255, 0];
const greenRange = [255, 0];
const blueRange = [255, 0];
const alphaRange = [1, 0];

// Postion and Size

const maxOffsetX = 30;
const maxOffsetY = 30;

const diameterRange = [50, 10];

// Others

const fadeRange = [2, 0.1]; // How long the bubbles takes to fade out
const preFadeRange = [1, 0.5]; // Time before the bubble starts to fade out

const density = 1;

const movementMod = 10; // Increase or decrease the distance a bubble will move
// #endregion


//  --START OF CODE--
let lastX = 0;
let lastY = 0;

async function create_bubble(x, y, density) {

  if (Math.random() > density) {
    return;
  }

  const movementX = (x - lastX) * movementMod;
  const movementY = (y - lastY) * movementMod;

  lastX = x;
  lastY = y;

  const bubble = document.createElement("div");

  const diameter = Math.random() * (diameterRange[0] - diameterRange[1]) + diameterRange[1];

  // offset from the position of the mouse
  const offsetX = Math.random() * maxOffsetX * (Math.random() < 0.5 ? -1 : 1);
  const offsetY = Math.random() * maxOffsetY * (Math.random() < 0.5 ? -1 : 1);

  // rgba colors
  const r = Math.random() * (redRange[0] - redRange[1]) + redRange[1];
  const g = Math.random() * (greenRange[0] - greenRange[1]) + greenRange[1];
  const b = Math.random() * (blueRange[0] - blueRange[1]) + blueRange[1];
  const a = Math.random() * (alphaRange[0] - alphaRange[1]) + alphaRange[1]; // alpha must be between 0 and 1

  // Time before the bubble starts to fade out
  const prefade_t = Math.random() * (preFadeRange[0] - preFadeRange[1]) + preFadeRange[1];
  // How long the bubbles takes to fade out
  const fade_t = Math.random() * (fadeRange[0] - fadeRange[1]) + fadeRange[1];

  bubble.style.position = "absolute";
  bubble.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  bubble.style.opacity = a;
  bubble.style.height = diameter + "px";
  bubble.style.width = diameter + "px";
  bubble.style.left = x + offsetX + "px";
  bubble.style.top = y + offsetY + "px";
  bubble.style.borderRadius = diameter / 2 + "px";
  bubble.style.transition = `opacity ${fade_t}s ease-out, transform ${prefade_t + fade_t}s ease-out`;
  document.body.appendChild(bubble);

  setTimeout(() => {
    bubble.style.transform = `scale(1.3) translate(${movementX}px, ${movementY}px)`;
  }, 5);
  setTimeout(() => {
    bubble.style.opacity = 0;
  }, prefade_t * 1000);

  setTimeout(() => bubble.remove(), prefade_t * 1000 + fade_t * 1000);
}

document.addEventListener("mousemove", function (e) {
  create_bubble(e.clientX - 10, e.clientY - 10, density);
});

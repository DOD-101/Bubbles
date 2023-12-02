let lastX = 0;
let lastY = 0;

async function create_bubble(x, y, density) {

  if (Math.random() > density) {
    return;
  }

  const movementX = x - lastX;
  const movementY = y - lastY;

  lastX = x;
  lastY = y;

  const bubble = document.createElement("div");

  const diameter = Math.random() * (50 - 10) + 10;

  const offsetX = Math.random() * 30 * (Math.random() < 0.5 ? -1 : 1);
  const offsetY = Math.random() * 30 * (Math.random() < 0.5 ? -1 : 1);

  const r = Math.random() * (255 - 0) + 0;
  const g = Math.random() * (255 - 0) + 0;
  const b = Math.random() * (255 - 0) + 0;
  const a = Math.random() * (1 - 0) + 0; // alpha must be between 0 and 1

  const prefade_t = Math.random() * (1 - 0.5) + 0.5;
  const fade_t = Math.random() * (2 - 0.1) + 0.1;

  const gradient = `radial-gradient(circle at center, white 0%, rgb(${r}, ${g}, ${b}) 100%)`;
  bubble.style.background = gradient;

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
    // bubble.style.opacity = 0;
    bubble.style.background = "white";
  }, prefade_t * 1000);

  setTimeout(() => bubble.remove(), prefade_t * 1000 + fade_t * 1000);
}

document.addEventListener("mousemove", function (e) {
  create_bubble(e.clientX - 10, e.clientY - 10, 0.75);
});

async function create_bubble(x, y, density) {

  if (Math.random() > density) {
    return;
  }

  const bubble = document.createElement("div");

  const diameter = Math.random() * (50 - 10) + 10;

  const offsetX = Math.random() * 30 * (Math.random() < 0.5 ? -1 : 1);
  const offsetY = Math.random() * 30 * (Math.random() < 0.5 ? -1 : 1);

  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
  const a = Math.random();

  const fade_t = Math.random() * (1 - 0.1) + 0.1;


  bubble.style.position = "absolute";
  bubble.style.pointerEvents = "none";
  bubble.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  bubble.style.opacity = a;
  bubble.style.height = diameter + "px";
  bubble.style.width = diameter + "px";
  bubble.style.left = x + offsetX + "px";
  bubble.style.top = y + offsetY + "px";
  bubble.style.borderRadius = diameter / 2 + "px";
  bubble.style.transition = `opacity ${fade_t}s ease-out, transform ${fade_t + 0.5}s ease-out`;
  document.body.appendChild(bubble);

  setTimeout(() => {
    bubble.style.transform = "scale(1.3)";
  }, 5);
  setTimeout(() => {
    bubble.style.opacity = 0;
  }, 500);

  setTimeout(() => bubble.remove(), 500 + fade_t * 1000);
}

document.addEventListener("mousemove", function (e) {
  create_bubble(e.clientX - 10, e.clientY - 10, 0.75);
});

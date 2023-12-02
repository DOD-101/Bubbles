function create_bubble(x, y) {
  const bubble = document.createElement("div");

  const diameter = Math.random() * 30;

  const offsetX = Math.random() * 25 * (Math.random() < 0.5 ? -1 : 1);
  const offsetY = Math.random() * 25 * (Math.random() < 0.5 ? -1 : 1);

  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
  const a = Math.random();


  bubble.style.position = "absolute";
  bubble.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
  bubble.style.height = diameter + "px";
  bubble.style.width = diameter + "px";
  bubble.style.left = x + offsetX + "px";
  bubble.style.top = y + offsetY + "px";
  bubble.style.borderRadius = diameter / 2 + "px";
  document.body.appendChild(bubble);

  setTimeout(function() {bubble.remove();}, 500);
}

document.addEventListener("mousemove", function (e) {
  create_bubble(e.clientX - 10, e.clientY - 10);
});

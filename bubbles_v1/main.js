const cursor = document.getElementById("cursor");

const diameter = 10;
const borderWidth = 2;
cursor.style.width = diameter + "px";
cursor.style.height = diameter + "px";
cursor.style.border = `${borderWidth}px black solid`;
cursor.style.borderRadius = (diameter/2 + borderWidth) + "px";

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
  cursor.style.left = (e.clientX - diameter / 2 - borderWidth) + "px";
  cursor.style.top = (e.clientY - diameter / 2 - borderWidth) + "px";
  create_bubble(e.clientX - 10, e.clientY - 10);
});

document.addEventListener("mousedown", function () {
  cursor.style.backgroundColor = "rgb(204,45,100)";
});

document.addEventListener("mouseup", function () {
  cursor.style.backgroundColor = "rgba(0,0,0,0)";
});



const cursor = document.getElementById("cursor");

const diameter = 10;
const borderWidth = 2;
cursor.style.width = diameter + "px";
cursor.style.height = diameter + "px";
cursor.style.border = `${borderWidth}px black solid`;
cursor.style.borderRadius = (diameter/2 + borderWidth) + "px";

document.addEventListener("mousemove", function (e) {
  cursor.style.left = (e.clientX - diameter / 2 - borderWidth) + "px";
  cursor.style.top = (e.clientY - diameter / 2 - borderWidth) + "px";
});

document.addEventListener("mousedown", function () {
  cursor.style.backgroundColor = "rgb(204,45,100)";
});

document.addEventListener("mouseup", function () {
  cursor.style.backgroundColor = "rgba(0,0,0,0)";
});
let canvas = document.getElementById("canvas");
let canvascontent = canvas.getContext("2d");

// Set the canvas size to match its display size
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

const diameter = 10;

let down = false;

function draw_mouse(e) {
  let rect = canvas.getBoundingClientRect();
  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;

  canvascontent.clearRect(0, 0, canvas.width, canvas.height); // clear the canvas

  if (down) {
    y += 3;
    // Create a radial gradient that fades from cyan to transparent
    let gradient = canvascontent.createRadialGradient(x, y, diameter, x, y, diameter * 2);
    gradient.addColorStop(0, "cyan");
    gradient.addColorStop(1, "rgba(0, 255, 255, 0)");

    // Draw a larger, semi-transparent circle behind the current one
    canvascontent.beginPath();
    canvascontent.arc(x, y, diameter * 2, 0, 2 * Math.PI);
    canvascontent.fillStyle = gradient; // use the gradient as the fill style
    canvascontent.fill();
  }

  canvascontent.beginPath();
  canvascontent.arc(x, y, diameter, 0, 2 * Math.PI); // draw a circle at the mouse position
  if (down) {
    canvascontent.fillStyle = "#25e887";
    canvascontent.fill();
  }

  canvascontent.stroke();
}



canvas.addEventListener("mousemove", draw_mouse);

canvas.addEventListener("mousedown", function(e) {down = true; draw_mouse(e);});

canvas.addEventListener("mouseup", function(e) {down = false; draw_mouse(e);});
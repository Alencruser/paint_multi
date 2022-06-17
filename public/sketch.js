let shape = "ellipse";
let color = [255, 255, 255];

document.querySelectorAll(".shape").forEach((i) => {
  i.addEventListener("click", () => {
    shape = i.dataset.shape;
  });
});

function setup() {
  createCanvas(1200, 800);
  line(15, 25, 70, 90);
  background(0, 0, 0);
}

function draw() {
  if (mouseIsPressed === true) {
    switch (shape) {
      case "ellipse":
        ellipse(mouseX, mouseY, 50, 50);
        break;
      case "rect":
        rect(mouseX, mouseY, 50, 50);
        break;
      case "triangle":
        console.log("triangle");
        triangle(mouseX, mouseY, mouseX + 20, mouseY, mouseX - 10, mouseY - 20);
        break;
    }
    // ellipse(mouseX, mouseY, 50, 50);
    socket.emit("draw", { mousePos: [mouseX, mouseY], shape, color });
  }
}

socket.on("draw", (params) => {
  const { mousePos, shape, color } = params;
  switch (shape) {
    case "ellipse":
      ellipse(mousePos[0], mousePos[1], 50, 50);
      break;
    case "rect":
      rect(mousePos[0], mousePos[1], 50, 50);
      break;
    case "triangle":
      console.log("triangle");
      triangle(
        mousePos[0],
        mousePos[1],
        mousePos[0] + 20,
        mousePos[1],
        mousePos[0] - 10,
        mousePos[1] - 20
      );
      break;
  }
});

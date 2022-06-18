let shapeSelected = "ellipse";
let colorSelected = [255, 255, 255];

document.querySelectorAll(".shape").forEach((i) => {
  i.addEventListener("click", () => {
    shapeSelected = i.dataset.shape;
  });
});

function setup() {
  createCanvas(1200, 800);
  line(15, 25, 70, 90);
  background(0, 0, 0);
}

function draw() {
    fill(color(...colorSelected));
    if (mouseIsPressed === true) {
        switch (shapeSelected) {
          case "ellipse":
            ellipse(mouseX, mouseY, 50, 50);
            break;
          case "rect":
            rect(mouseX, mouseY, 50, 50);
            break;
          case "triangle":
            console.log("triangle");
            triangle(
                mouseX -30,
                mouseY +30,
                mouseX + 30,
                mouseY+30,
                mouseX,
                mouseY -30
              );            break;
        }
        socket.emit("draw", { mousePos: [mouseX, mouseY], shapeReceived: shapeSelected, colorReceived: colorSelected });
      }
}


socket.on("draw", (params) => {
    const {mousePos, shapeReceived, colorReceived} = params;
    let c = color(...colorReceived);
    fill(c);
  switch (shapeReceived) {
    case "ellipse":
      ellipse(mousePos[0], mousePos[1], 50, 50);
      break;
    case "rect":
      rect(mousePos[0], mousePos[1], 50, 50);
      break;
    case "triangle":
      console.log("triangle");
      triangle(
        mousePos[0] -30,
        mousePos[1] +30,
        mousePos[0] + 30,
        mousePos[1] +30,
        mousePos[0] ,
        mousePos[1] -30
      );
      break;
  }
});

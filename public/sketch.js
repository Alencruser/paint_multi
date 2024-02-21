import pickr from './color-picker.js'
import './p5.min.js';
let shapeSelected = "ellipse";

document.querySelectorAll(".shape").forEach((i) => {
  i.addEventListener("click", () => {
    shapeSelected = i.dataset.shape;
  });
});

function setup() {
  let canvas = createCanvas(1200, 800);
  canvas.parent('canvas')
  line(15, 25, 70, 90);
  background(0, 0, 0);
}

function draw() {
    fill(color(...(pickr.getSelectedColor().toRGBA().slice(0,3))));
    if (mouseIsPressed === true) {
        switch (shapeSelected) {
          case "ellipse":
            ellipse(mouseX, mouseY, 50, 50);
            break;
          case "rect":
            rect(mouseX -25, mouseY -25, 50, 50);
            break;
          case "triangle":
            console.log("triangle porque tu te lance draw ?");
            triangle(
                mouseX -30,
                mouseY +30,
                mouseX + 30,
                mouseY+30,
                mouseX,
                mouseY -30
              );            break;
        }
        socket.emit("draw", { mousePos: [mouseX, mouseY], shapeReceived: shapeSelected, colorReceived: pickr.getSelectedColor().toRGBA().slice(0,3) });
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
      console.log("triangle on");
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


// Cause P5 is old
window.setup = setup; 
window.draw = draw
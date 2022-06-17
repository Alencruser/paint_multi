
let shape = 'ellipse';
let colorSelected = [255,255,255];
let c;

function setup() {
    createCanvas(1200, 800);
    line(15, 25, 70, 90);
    background(0,0,0)
}

function draw() {
    fill(color(...colorSelected))
    if (mouseIsPressed === true) {
        ellipse(mouseX, mouseY, 50, 50);
        socket.emit('draw', {mousePos: [mouseX, mouseY], shape, colorReceived: colorSelected})
      } 
}



socket.on('draw', (params) => {
    const {mousePos, shape, colorReceived} = params;
    let c = color(colorReceived[0], colorReceived[1], colorReceived[2]);
    fill(c);
    noStroke();
    switch(shape) {
        case 'ellipse':
            ellipse(mousePos[0], mousePos[1], 50, 50)
            break;
    }
});


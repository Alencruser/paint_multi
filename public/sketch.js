
let shape = 'ellipse';
let color = [255,255,255];

function setup() {
    createCanvas(1200, 800);
    line(15, 25, 70, 90);
    background(0,0,0)
}

function draw() {
    if (mouseIsPressed === true) {
        ellipse(mouseX, mouseY, 50, 50);
        socket.emit('draw', {mousePos: [mouseX, mouseY], shape, color})
      } 
}



socket.on('draw', (params) => {
    const {mousePos, shape, color} = params;
    switch(shape) {
        case 'ellipse':
            // let c = color(color[0], color[1], color[2]);
            // fill(c);
            // noStroke();
            ellipse(mousePos[0], mousePos[1], 50, 50)
            break;
    }
});


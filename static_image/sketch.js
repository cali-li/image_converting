let img;

function preload() {
    img = loadImage('headshot.jpg'); // Replace with your image path
}

function setup() {
    createCanvas(img.width * 5, img.height * 5); // Double the canvas size
    img.loadPixels();
    noLoop();
}

function draw() {
    background(255);
    noStroke();
    noFill(); // No fill inside the circles
    stroke(0); // Black border
    strokeWeight(1); // Border thickness

    for (let y = 0; y < img.height; y += 2) { // Smaller step for more circles
        for (let x = 0; x < img.width; x += 2) {
            let index = (x + y * img.width) * 4;
            let r = img.pixels[index];
            let g = img.pixels[index + 1];
            let b = img.pixels[index + 2];
            let brightness = (r + g + b) / 2;

            let newX = x * 2; // Scale coordinates to fit the larger canvas
            let newY = y * 2;
            let radius = map(brightness, 0, 255, 5, 1); // Map brightness to radius

            ellipse(newX, newY, radius, radius);
        }
    }
}
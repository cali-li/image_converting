let video;
let vScale = 10;

function setup() {
    createCanvas(640, 480);
    pixelDensity(1);
    video = createCapture(VIDEO);
    video.size(width / vScale, height / vScale);
    video.hide();
}

function draw() {
    background(255);
    video.loadPixels();
    noStroke();
    fill(0);

    for (let y = 0; y < video.height; y++) {
        for (let x = 0; x < video.width; x++) {
            let index = (x + y * video.width) * 4;
            let r = video.pixels[index];
            let g = video.pixels[index + 1];
            let b = video.pixels[index + 2];
            let brightness = (r + g + b) / 2;

            let newX = x * vScale;
            let newY = y * vScale;
            let radius = map(brightness, 0, 255, vScale, 1);

            ellipse(newX, newY, radius, radius);
        }
    }
}
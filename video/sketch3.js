let video;
let vScale = 20; // Increase vScale to handle higher resolution

function preload() {
    video = createVideo('vecteezy_young-woman-looking-at-the-camera_2015356.mp4'); // Replace with your video file path
}

function setup() {
    createCanvas(3840, 2160); // Adjust canvas size for display
    pixelDensity(1);
    video.size(width / vScale, height / vScale);
    video.hide();

    // Add event listener to the play button
    let playButton = select('#playButton');
    playButton.mousePressed(playVideo);
    console.log("Setup complete, video playing");
}

function playVideo() {
    video.loop(); // Loop the video
    video.play(); // Ensure the video starts playing
    console.log("Video playing");
}

function draw() {
    background(255);
    video.loadPixels();
    noFill(); // No fill inside the circles
    stroke(0); // Black border
    strokeWeight(1); // Border thickness

    for (let y = 0; y < video.height; y++) {
        for (let x = 0; x < video.width; x++) {
            let index = (x + y * video.width)*4 ;
            let r = video.pixels[index];
            let g = video.pixels[index + 1];
            let b = video.pixels[index + 2];
            let brightness = (r + g + b) / 3;

            let newX = x * vScale;
            let newY = y * vScale;
            let radius = map(brightness, 0, 255, vScale, 1);

            ellipse(newX, newY, radius, radius);
        }
    }
}
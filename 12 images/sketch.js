let pilot;

function preload() {
  pilot = loadImage("assets/aviator.png");
}

function setup() {
  createCanvas(pilot.width, pilot.height);
}

function draw() {
  background();
  image(pilot, 0, 0);
  loadPixels();
  for(let x = 0; x < width; x+= 10){
    for(let y = 0; )
  }
  // for (let i = 0; i < pixels.length; i += 4) {
    // let boost = map(mouseX, 0, width, 0, 200);
    // let r = min(pixels[i] + boost, 255);
    // let g = min(pixels[i + 1] + boost, 255);
    // let b = min(pixels[i + 2] + boost, 255);
    // setPixelColor(i, r, g, b);

    // let avg = avgPixels(i);
    // setPixelColor(i, avg, avg, avg); // Sets grayscale color
  

 //   updatePixels();
 }

function avgPixels(pos) {
  let sum = pixels[pos] + pixels[pos + 1] + pixels[pos + 2];
  return sum / 3;
}

function setPixelColor(pos, r, g, b) {
  // Set the pixel (starting at pos) to a new RGB value
  pixels[pos] = r;
  pixels[pos + 1] = g;
  pixels[pos + 2] = b;
}

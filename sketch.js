// Reserve memory for x and y
let x, y, step;

function setup() {
  createCanvas(400, 400);
  // Place x and y in the middle of screen
  x = width / 2;
  y = height / 2;
  
  step = 5;
  
  // "dip a brush" into color once
  // the color will remain the same unless I change it again
  fill("red");
}

function draw() {
  // Clear the background
  background(220);

  // Draw a circle
  circle(x, y, 50);

  // Increase the x variable by step on each new frame
  x += step;

  // Flip the step after circle moves off the right OR left side
  if (x >= width || x <= 0) {
    step = -step;
  }
  
  // TODO: repeat the same for vertical movement
  
  // MORE TODO: randomize the increment
}

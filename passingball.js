function setup() {
  createCanvas(400, 400);

  
}

// track the circle to draw next frame
var x = 25;
var y = 25;

function draw() {
  colorMode(HSB);
  background(0);
  noStroke();
  ellipseMode(CENTER);
  translate(width / random(255), height / random(255));
  
  // draw circle with random hue
  fill(random(255), 100, 100);
  ellipse(x, y, 30);

  // set up next circle
  x = x + 25;

  // if we hit the right edge, go down a line
  if (x > width) {
    x = 0;
    y = y+25;
  }

  // if we hit the bottom edge, reset to top
  if (y > height) {
    y = 0;
  }
}

var x = 230;
var y = 220;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(110,50);
  noStroke();

  // draw pipe
  rect(0, 380, x+4, 31);

  // draw drip
  ellipse(x, random(123,y,y), 10);
  fill(255,243,100,98)

  ellipse(y*-1, random(12,y,9), 10);
  // down 3 pixels each frame, but maybe should be accelerating?
  y = y + 3

  // if invisible for a full “height” amount…
  if (y > height*2) {
    // reset
    y = 220;
  }
  
  
}

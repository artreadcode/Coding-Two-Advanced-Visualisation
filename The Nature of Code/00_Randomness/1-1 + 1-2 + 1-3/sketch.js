// 1-1 + 1-2. Perlin noise (noise()) VS random()
let xoff = 0;

// 1-3. 1D Perlin noise
let xoff1 = 0;
let xoff2 = 10000;

let inc = 0.01;
let start = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51);

  /* Just tying x position of perlin noise values.
  // let x = random(width);
  let x = map(noise(xoff), 0, 1, 0, width);
  xoff += 0.01; // (this idea is important) how the values will behave.
  // 조금씩 조금씩 건너뛰어야 부드러운 불확정성이 생성될 것 아니니?

  ellipse(x, 200, 24, 24);
  */

  /* Creating bee-like behaviour? Looks nice.
  let x = map(noise(xoff1), 0, 1, 0, width);
  let y = map(noise(xoff2), 0, 1, 0, height); // Make this similar with x, so that's why the ellipse is moving diagonal.
  xoff1 += 0.02;
  xoff2 += 0.02;

  ellipse(x, y, 24, 24);
  */

  // Graph the values.
  stroke(255);
  noFill();
  beginShape();

  let ioff = start;
  for (let i = 0; i < width; i++) {
    // stroke(255);
    // point(i, random(height));
    // let j = random(height);
    let n = map(noise(ioff), 0, 1, -50, 50);
    let s = map(sin(ioff), -1, 1, 0, height); // Combination of noise() and sin()!
    let j = n + s;
    // let j = noise(ioff) * height;
    // let j = height / 2 + sin(ioff) * height / 2;
    
    vertex(i, j);
    ioff += inc;
  }

  endShape();
  start += inc;

  // noLoop(); // Stop the animation.
}

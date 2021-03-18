
var cx, cy; // center position of canvas

// Radius for hands of the clock
var secondsRadius
var minutesRadius
var hoursRadius
var clockDiameter
var tickRadius

var discrete = true

function setup() {
  createCanvas(500, 500);

  var radius = min(width, height) / 2; // this is the maximum possible radius
  secondsRadius = radius * 0.725
  minutesRadius = radius * 0.60
  hoursRadius = radius * 0.50
  tickRadius = radius * .7
  // clockDiameter = radius * 1.666

  cx = width / 2
  cy = height / 2
}

function draw() {
  background('#C9D6D1')             // canvas background color

  // Draw the clock background
  noFill();
  strokeWeight(3);
  stroke('#c2d0c9');
  ellipse(cx, cy, 360, 360) // (x, y, w, h)

  var now = clock()
  var s = (now.progress.min * TWO_PI) - HALF_PI
  var m = (now.progress.hour * TWO_PI) - HALF_PI
  var h = (now.progress.halfday * TWO_PI) - HALF_PI

  if (discrete){
    // L[inearly] [int]ERP[olate] from the current fraction of a minute to a
    // proportional value in the range 0–2π (for a 'ticking' effect)
    s = lerp(0, TWO_PI, now.sec/60) - HALF_PI
  }

  stroke('#b6c3bd');
  // hour line
  strokeWeight(6)
  line(cx, cy, cx + cos(h)*hoursRadius, cy + sin(h)*hoursRadius) // line(x1, y1, x2, y2)

  // min circles
  strokeWeight(4);
  noFill();

  circle(cx, cy + now.min*-3, 18) // circle(x, y, d)

  if (now.hours >= 12) {
      fill('#b6c3bd');    // indicates PM!
  }

  // sec circles
  noFill();
  strokeWeight(3);
  circle(cx, cy, now.sec*6) // circle(x, y, d)



  // // min circles try 2
  // // cy = cy - 1;
  // fill('yellow');
  // strokeWeight(3);
  // // circle(cx + now.min*2, cy, 20) // circle(x, y, d)
  // circle(cx + cos(m)*minutesRadius, cy + sin(m)*minutesRadius, 20)
  //
  // if (cy < 0) {
  //   cy = height/2;
  // }


}

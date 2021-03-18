
var x = 20 // starting x position to draw
var y = 20  // starting y position to draw
var barHeight = 180 // height of each bar
var maxWidth = 760 // maximum width of each bar (the actual width will always be ≤ this)
var spacing = 10 // the vertical space to skip between bars

var discrete = false // flag whether to have the bars 'tick' from one value to the next or move smoothly,
                     // try setting it to false and see what happens...

// this gets called only once in the very beginning
function setup() {
	createCanvas(700, 700)
}

// this gets called every frame (about 60 frames per second)
function draw() {
  background(255, 246, 245)
  noStroke()

  // store the current time in a local variable
  var now = clock()

  // calculate the width in pixels of each bar
  if (discrete){
    // the map() function lets us *normalize* a value from a starting range then *project* it into another range
    var hourWidth = map(now.hour, 1,12, 0,maxWidth) // from hours (1-12) to pixels (0–maxWidth)
    var minsWidth = map(now.min,  0,60, 0,maxWidth) // from mins (0–60) to pixels (0–maxWidth)
    var secsWidth = map(now.sec,  0,60, 0,maxWidth) // from secs (0–60) to pixels (0–maxWidth)
  }else{
    // alternatively, we can use the clock's 'progress' percentages
    hourWidth = maxWidth * now.progress.day
    minsWidth = maxWidth * now.progress.hour
    secsWidth = maxWidth * now.progress.min
  }

  // colors
  colorMode(RGB);
  let from = color(254, 197, 187);
  let to = color(248, 237, 235);
  colorMode(RGB); // Try changing to HSB.
  let interA = lerpColor(from, to, 0.40);
  let interB = lerpColor(from, to, 0.60);
  let interC = lerpColor(from, to, 0.80);
  // triangle sec     // 10 sec changes opacity

  strokeWeight(3);
  fill(from);

  if (now.sec >= 10){
      fill(from);
  }
  if (now.sec >= 20){
      fill(interA);
  }
  if (now.sec >= 30){
      fill(interB);
  }
  if (now.sec >= 40){
      fill(interC);
  }
  if (now.sec >= 50){
      fill(to);
  }

  beginShape(TRIANGLES);
  vertex(100, 550);       // left point
  vertex(350, 100);       // top point
  vertex(600, 550);       // right point
  endShape();

  //colors
  colorMode(RGB);
  let from2 = color(248, 237, 235);
  let to2 = color(216, 226, 220);
  colorMode(RGB); // Try changing to HSB.
  let interA2 = lerpColor(from, to, 0.40);
  let interB2 = lerpColor(from, to, 0.60);

  // triangle mins    // every 15 mins changes opacity

  strokeWeight(3);
  fill(from2);

  if (now.min >= 15){
      fill(interA2);
  }
  if (now.min >= 30){
      fill(interB2);
  }
  if (now.min >= 45){
      fill(to2);
  }

  beginShape(TRIANGLES);
  vertex(200, 500);       // left point
  vertex(350, 200);       // top point
  vertex(500, 500);       // right point
  endShape();

  // triangle hours   // red am + purple pm

  strokeWeight(3);
  fill(236, 228, 219);

  if (now.hours >= 12){
      fill(216, 226, 220);
  }
  if (now.hours < 12){
      fill(254, 197, 187);
  }

  beginShape(TRIANGLES);
  vertex(300, 450);       // left point
  vertex(350, 300);       // top point
  vertex(400, 450);       // right point
  endShape();


}

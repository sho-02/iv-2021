
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
  background(237, 255, 240)
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

  // triangle sec     // 10 sec changes opacity

  strokeWeight(3);
  fill(182, 240, 192, 50);

  if (now.sec >= 10){
      fill(182, 240, 192, 100);
  }
  if (now.sec >= 20){
      fill(182, 240, 192, 150);
  }
  if (now.sec >= 30){
      fill(182, 240, 192, 200);
  }
  if (now.sec >= 40){
      fill(182, 240, 192, 250);
  }
  if (now.sec >= 50){
      fill(182, 240, 192, 300);
  }

  beginShape(TRIANGLES);
  vertex(100, 550);       // left point
  vertex(350, 100);       // top point
  vertex(600, 550);       // right point
  endShape();

  // triangle mins    // every 15 mins changes opacity

  strokeWeight(3);
  fill(250, 221, 177, 50);

  if (now.min >= 15){
      fill(250, 221, 177, 100);
  }
  if (now.min >= 30){
      fill(250, 221, 177, 200);
  }
  if (now.min >= 45){
      fill(250, 221, 177, 300);
  }

  beginShape(TRIANGLES);
  vertex(200, 500);       // left point
  vertex(350, 200);       // top point
  vertex(500, 500);       // right point
  endShape();

  // triangle hours   // red am + purple pm

  strokeWeight(3);

  if (now.hours >= 12){
      fill(255, 173, 150);
  }
  if (now.hours < 12){
      fill(184, 177, 252);
  }

  beginShape(TRIANGLES);
  vertex(300, 450);       // left point
  vertex(350, 300);       // top point
  vertex(400, 450);       // right point
  endShape();


}

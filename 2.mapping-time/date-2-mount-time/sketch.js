
function setup() {
  // set the width & height of the sketch
  createCanvas(800, 400)
}

function draw() {
  var now = clock()
  background('#c0c7cf');

  fill(237, 128, 109);
  circle(400, 100, 80 + 4*now.month);

  strokeWeight(2);
  stroke('white');
  fill('white');
  beginShape();
  vertex(310, 200);
  vertex(400, 100 - now.day);
  vertex(490, 200);
  vertex(460, 190);
  vertex(440, 200);
  vertex(420, 190);
  vertex(400, 200);
  vertex(380, 190);
  vertex(360, 200);
  vertex(340, 190);
  vertex(310, 200);
  endShape();

  fill('#c1c0cf');
  beginShape();
  vertex(310, 200);
  vertex(170, 420);
  vertex(620, 420);
  vertex(490, 200);
  vertex(490, 200);
  endShape();



  // // circle 2
  // if(now.day = 2){
  //     stroke('blue');
  // }
  // if(now.day /= 2){
  //     noStroke();
  // }
  // circle(200, 103, 30);
  //
  // // circle 3
  // if(now.min >= 30){
  //     stroke('red');
  // }
  // if(now.min < 30){
  //     noStroke();
  // }
  // circle(600, 103, 30);
  //
  // // circle 4
  // if(now.min >= 30){
  //     stroke('orange');
  // }
  // if(now.min < 30){
  //     noStroke();
  // }
  // circle(700, 300, 30);
  //
  // // circle 5
  // if(now.min >= 30){
  //     stroke('yellow');
  // }
  // if(now.min < 30){
  //     noStroke();
  // }
  // circle(500, 300, 30);
  //
  // // circle 6
  // if(now.min >= 30){
  //     stroke('brown');
  // }
  // if(now.min < 30){
  //     noStroke();
  // }
  // circle(300, 300, 30);
  //
  // // circle 7
  // if(now.min >= 30){
  //     stroke('pink');
  // }
  // if(now.min < 30){
  //     noStroke();
  // }
  // circle(100, 300, 30);



}

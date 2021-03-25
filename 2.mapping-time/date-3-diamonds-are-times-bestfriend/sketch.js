function setup() {
  createCanvas(400, 400)

}

function diamond() {
  strokeWeight(5);
  beginShape();
  vertex(120, 160);
  vertex(95, 180);
  vertex(95, 220);
  vertex(130, 240);
  vertex(180, 240);
  vertex(220, 220);
  vertex(220, 180);
  vertex(200, 160);
  vertex(200, 185);
  vertex(170, 195);
  vertex(140, 195);
  vertex(120, 185);
  vertex(120, 160);
  vertex(140, 150);
  vertex(175, 150);
  vertex(198, 157);
  vertex(198, 185);
  vertex(220, 220);
  vertex(183, 240);
  vertex(175, 195);
  vertex(140, 195);
  vertex(130, 240);
  vertex(95, 220);
  vertex(120, 185);
  endShape();

  // bottom of diamond
  beginShape();
  vertex(95, 220);
  vertex(155, 315);
  vertex(220, 220);
  endShape();

  // bottom of diamond
  beginShape();
  vertex(130, 240);
  vertex(155, 310);
  vertex(183, 240);
  endShape();

}

function rounddiamond(){

  strokeWeight(5);
  circle(1450, 1450, 200);
  circle(1450, 1450, 90);

  strokeWeight(3);
  beginShape();
  vertex(1450, 1350);
  vertex(1530, 1510);
  vertex(1370, 1510);
  vertex(1450, 1350);
  endShape();
  beginShape();
  vertex(1490, 1360);
  vertex(1510, 1530);
  vertex(1350, 1460);
  vertex(1490, 1360);
  endShape();
  beginShape();
  vertex(1530, 1390);
  vertex(1480, 1545);
  vertex(1355, 1420);
  vertex(1530, 1390);
  endShape();
  beginShape();
  vertex(1545, 1430);
  vertex(1440, 1548);
  vertex(1380, 1379);
  vertex(1545, 1430);
  endShape();
  beginShape();
  vertex(1410, 1360);
  vertex(1395, 1530);
  vertex(1550, 1460);
  vertex(1410, 1360);
  endShape();

}

function draw() {
  var now = clock()

  background('black');

  noFill();
  stroke(255,255,255,255-250*now.moon);
  scale(0.25);
  translate(-10, -50);
  diamond();


  // scale(0.25);
  // translate(-10, -50);
  // stroke('blue');
  // strokeWeight(8);
  // diamond();
  //
  // translate(-5, -5);
  // stroke('red');
  // strokeWeight(5);
  // noFill();
  // diamond();

  stroke(255,255,255,255-5*now.day);
  scale(0.8);
  translate(350, 400);
  rounddiamond();





  //blue
  // strokeWeight(6 + 8*now.moon);
  // stroke('blue');
  // noFill();
  // push()
  // translate(5, 3);
  // diamond();
  // pop();
  //
  // // red diamond
  // strokeWeight(5);
  // stroke('red');
  // noFill();
  // diamond();



}

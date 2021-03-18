function setup() {
  createCanvas(400, 400)

}

function draw() {
  var now = clock()

  background('black');

  // diamond top
  strokeWeight(6 + 8*now.moon);
  stroke('blue');
  // if(now.moon <= 0.5){
  //     stroke('white');
  // }
  noFill();
  beginShape();
  // vertex(70, 200);
  // vertex(100, 160);
  // vertex(120, 180);
  // vertex(145, 190);
  // vertex(180, 190);
  // vertex(215, 180);
  // vertex(250, 160);
  // vertex(250, 150);
  // vertex(215, 130);
  // vertex(180, 130);
  // vertex(120, 140);
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

  // red diamond

  // diamond top
  strokeWeight(5);
  stroke('red');
  noFill();
  // if(now.moon <= 0.5){
  //     stroke('white');
  // }
  noFill();
  beginShape();
  // vertex(70, 200);
  // vertex(100, 160);
  // vertex(120, 180);
  // vertex(145, 190);
  // vertex(180, 190);
  // vertex(215, 180);
  // vertex(250, 160);
  // vertex(250, 150);
  // vertex(215, 130);
  // vertex(180, 130);
  // vertex(120, 140);
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

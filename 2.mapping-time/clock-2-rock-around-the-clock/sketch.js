
function setup() {
  // set the width & height of the sketch
  createCanvas(400, 400, WEBGL)

}


function draw() {
  // check the clock for the current time and unpack some of its fields to generate a time-string
  var now = clock()

  background('white');

  //minutes
  // beginShape();
  // vertex(-100, -200, -40);
  // vertex(-300, -200, -40);
  // vertex(-200, -60, -40);
  // endShape();

  // hours
  rotateX(now.hour/2);
  // rotateX(90);
  // rotateY(90);
  noFill();
  stroke('#b6c3bd');

  if (now.hours >= 12){
      stroke('#93a9d8')      //indicates PM!
  }
  if (now.hours <12){
      stroke('#ead09f')     //indicates AM!
  }

  box(50);

  // minutes
  push();
  rotate(now.min/2);
  noFill();
  stroke('#b6c3bd');

  if (now.hours >= 12){
      stroke('#93a9d8')      //indicates PM!
  }
  if (now.hours <12){
      stroke('#ead09f')     //indicates AM!
  }

  triangle(35, 75, 58, 20, 90, 75);
  pop();

  //seconds
  rotate(now.sec/2);
  noFill();
  stroke('#b6c3bd');

  if (now.hours >= 12){
      stroke('#93a9d8')      //indicates PM!
  }
  if (now.hours <12){
      stroke('#ead09f')     //indicates AM!
  }

  ellipse(-70, -70, 50)


}

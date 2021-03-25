var x = 0;
var cx, cy; // center position of canvas

function setup() {
  ellipseMode(CENTER);
    createCanvas(1000, 1000);

    cx = width / 2
    cy = height / 2

}

function draw() {
  var now = clock()
  // background('#C9D6D1');
  background('#C9D6D1');

  fill('#fafffd');
  if (now.hours >= 12){
      fill('#AEC2BB')
  }
  ellipse(cx, cy, 500, 500);    // background circle

  // season center circle
  noStroke();
  fill('#BDDAF1');        //season 2 winter
  if (now.season <=1){    //season 1 fall
      fill('#FDE2DE');
  }
  if (now.season >=3){
      fill('#ace3c1');    //season 3 spring
  }
  if (now.season >=3.5){
      fill('#FFDFAA');      //season 4 summer
  }

  circle(cx, cy, 250);     // center circle

  // flower # season
  push()
  translate(500, 500);
  noStroke();
  fill('#AEC2BB');        // dark pm
  if (now.hours <=11){
      fill('#fafffd')     // light am
  }
  for (let i = 0; i < now.month; i ++) {
   ellipse(0, 0, 20, 90);       // "chromosomes"
   rotate(PI/2 + now.month);
 }
  pop();

// break

noFill();
strokeWeight(3);          //hours
stroke('#BDDAF1');        //winter
if (now.season <=1){
    stroke('#FDE2DE');    //fall
}
if (now.season >=3){
    stroke('#ace3c1');    //spring
}
if (now.season >=3.5){
    stroke('#FFDFAA');    //summer
}

strokeWeight(now.day/10); // day
circle(cx, cy, 18);       // center circle

strokeWeight(1);
circle(cx, cy, 250+now.sec) // circle(x, y, d)

strokeWeight(3);          //1st ring
circle(cx, cy, 310) // circle(x, y, d)

strokeWeight(1);
circle(cx, cy, 310+now.min*2) // circle(x, y, d)

strokeWeight(3);          //2nd ring
circle(cx, cy, 420) // circle(x, y, d)

strokeWeight(1);
circle(cx, cy, 420+now.hours*2) // circle(x, y, d)

strokeWeight(3);          //3rd ring
circle(cx, cy, 468) // circle(x, y, d)

}

var x = 0;

function setup() {
  ellipseMode(CENTER);
    createCanvas(1000, 1000);
}

function draw() {
  var now = clock()
  background('#C9D6D1');

  fill('#c2dcff');        //season 2 winter
  if (now.season <=1){    //season 1 fall
      fill('#d4b590');
  }
  if (now.season >=3){
      fill('#baf7ca');    //season 3 spring
  }
  if (now.season >=3.5){
      fill('#f7f6ba');      //season 4 summer
  }
  // ellipse (300, 300, 300, 350);
  // ellipse(300, 700, 300, 350);
  // ellipse(800, 300, 300, 350);
  // ellipse(800, 700, 300, 350);
  circle(500, 500, 300);

  noFill();
  strokeWeight(1 + now.month);
  stroke('white');
  circle(500, 500, 400);


  // flower
  translate(500, 500);
  noStroke();
  strokeWeight(5);
  fill('#ecc4ff');
  for (let i = 0; i < now.season; i ++) {
   ellipse(0, 0, 20, 90);
   rotate(PI/6 + now.season);
 }


//   noFill();
// 	x+= 0.02;
//   translate (width/2, height/2);
//   rotate(x);
//
//   //blue winter
//   stroke(149, 206, 240);
//   strokeWeight(10);
//   if(now.season <= 1){
//       stroke('green');
// }
// 	ellipse(0, 0, 150, 75);
//
//   //orange fall
//   stroke(237, 185, 149);
//   strokeWeight(5);
//   if(now.season <= 1.5){
//       strokeWeight(10);
//   }
//   rotate(HALF_PI);
//   ellipse(0, -10, 150, 75);

  // //green spring
  // stroke(167, 219, 168);
  // strokeWeight(5);
  // if(now.month <= 5){
  //     strokeWeight(10);
  // }
  // rotate(HALF_PI);
  // ellipse(0, 0, 150, 75);
  //
  // //yellow summer
  // stroke(245, 245, 174);
  // strokeWeight(5);
  // if(now.month >= 6){
  //     strokeWeight(10);
  // }
  // rotate(HALF_PI);
  // ellipse(0, 0, 150, 75);

}

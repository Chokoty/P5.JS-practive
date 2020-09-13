// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Clock
// Video: https://youtu.be/E4RyStef-gY

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES); //각 모드 DEGREES RADIANS
}

function draw() {
  background(0);
  translate(200, 200);
  rotate(-90);// 90도 미리 회전시켜놓음

  let hr = hour(); //p5 library
  let mn = minute();
  let sc = second();

  strokeWeight(8);
  stroke(255, 100, 150);
  noFill();
  let secondAngle = map(sc, 0, 60, 0, 360); //mapping second to angle
  //arc(0, 0, 300, 300, 0, secondAngle);

  stroke(150, 100, 255); 
  let minuteAngle = map(mn, 0, 60, 0, 360); //mapping minute to angle
  //arc(0, 0, 280, 280, 0, minuteAngle);

  stroke(150, 255, 100);
  let hourAngle = map(hr % 12, 0, 12, 0, 360); //mapping hour to angle
  //arc(0, 0, 260, 260, 0, hourAngle);

  push(); //push pop 사이에만 적용됨
  rotate(secondAngle);
  stroke(255, 100, 150);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(minuteAngle);
  stroke(150, 100, 255);
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke(150, 255, 100);
  line(0, 0, 50, 0);
  pop();

  stroke(255);
  point(0, 0);

  //  fill(255);
  //  noStroke();
  //  text(hr + ':' + mn + ':' + sc, 10, 200);
}

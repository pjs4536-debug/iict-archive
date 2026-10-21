function setup() {
  createCanvas(600, 700);
}

function draw() {
  background(240);
  rectMode(CENTER);

  // 가방 몸통
  stroke(0);
  strokeWeight(3);
  fill(65, 70, 82); 
  rect(300, 340, 400, 460, 150, 150, 20, 20);

  // 가방 앞주머니&지퍼
  fill(43, 45, 66);
  rect(300, 430, 300, 200, 40);
  rect(300, 230, 150, 50, 10);

  stroke(90, 95, 110);
  strokeWeight(3);
  line(170, 340, 430, 340); 

  strokeWeight(3);
  fill(160); 
  rect(380, 335, 16, 12, 3); 
  ellipse(380, 340, 10, 10); 
  
  //키링회전
  push();
  translate(380, 340);
  rotate(sin(frameCount * 0.05) * 0.3); 
  
  //키링 줄
  stroke(80);
  strokeWeight(3);
  noFill();
  line(0, 0, 0, 115);

  fill(200);
  ellipse(0, 118, 12, 12);
    
  translate(0, 150);

  // 키링 몸통
  fill( 255, 241, 86);
  stroke(0);
  strokeWeight(3);
  rect(0, 0, 185, 180, 90, 90, 70, 70);
  
  
  // 입? 부리?
  strokeWeight(4);
  stroke(255, 111, 33);
  fill(255, 163, 55);
  rect(0, 5, 51, 54, 20);

  //부리 중앙선
  stroke(250, 97, 15);
  strokeWeight(5);
  noFill();
  arc(0, 4, 51, 12, radians(6), radians(174));

  //콧구멍
  noStroke();
  fill(0);
  rect(-6, -5, 10, 7, 3);
  rect(7, -5, 10, 7, 3);

  //눈
  stroke(0);
  strokeWeight(9);
  noFill();
  arc(-35, -23, 28, 17, radians(185), radians(300));
  arc(35, -23, 28, 17, radians(240), radians(355));

  //머리카락
  push();
  strokeJoin(ROUND);
  strokeWeight(4);
  fill(0);
  translate(0, -90);
  triangle(-10, -8, -1, 0, -10, 0);
  triangle(10, -8, 1, 0, 10, 0);
  pop();

  //오른 손
  push();
  translate(92.5, 0);
  rotate(radians(15));

  stroke(0);
  strokeWeight(3);
  fill( 255, 241, 86);
  arc(0, 20, 60, 50, radians(265), radians(75));
  pop();

  //왼손
  push();
  translate(-92.5, 0);
  rotate(radians(-15));

  stroke(0);
  strokeWeight(3);
  fill( 255, 241, 86);
  arc(0, 20, 40, 50, radians(105), radians(276));
  pop();
 
 //왼팔뚝
  push();
  translate(-90, 0);
  stroke(0);
  strokeWeight(3);
  noFill();
  arc(30, 0, 68, 25, radians(190), radians(340));
  pop();

  push();
  translate(-48, 7);
  noFill();
  stroke(0);
  strokeWeight(3);
  arc(0, 0, 40, 40, radians(-50), radians(40));
  pop();

  push();
  translate(-55, 10);
  noFill();
  stroke(0);
  strokeWeight(3);
  arc(0, 0, 60, 30, radians(25), radians(135));
  pop();

  //발
  push();
  translate(0, 91);
  fill(0);
  stroke(0);
  strokeJoin(ROUND);
  strokeWeight(5);

  triangle(-20, 0, -10, 0, -15, 8);
  triangle(-20, 0, -25, 5, -20, 5); 
  triangle(-10, 0, -5, 5, -10, 5); 

  triangle(30, 0, 20, 0, 25, 8);
  triangle(15, 5, 20, 0, 20, 5);
  triangle(35, 5, 30, 0, 30, 5);
  pop();
  
  pop();

  
}
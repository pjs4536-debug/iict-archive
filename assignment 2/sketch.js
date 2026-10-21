//랜덤변수1: 흰자 조각 4개
let whiteX1, whiteY1, whiteW1, whiteH1;
let whiteX2, whiteY2, whiteW2, whiteH2;
let whiteX3, whiteY3, whiteW3, whiteH3;
let whiteX4, whiteY4, whiteW4, whiteH4;
//랜덤변수2: 노른자 개수
let yolkCount = 1;
//랜덤변수3: 노른자 색상 및 위치
let yolkColor = 150;
let yolkX1, yolkY1;
let yolkX2, yolkY2;
let yolkX3, yolkY3;

let burn = 0;
let smokeY = 0;

let isEggBroken = false;

function setup(){
  createCanvas(500, 500);
}

function draw(){
  background(240, 235, 220);
  drawPan();
  drawEgg();
}
//후라이팬
function drawPan(){
  translate(250, 250);

  stroke(40);
  strokeWeight(24);
  line(0, 0, 180, 120);
  
  stroke(30);
  strokeWeight(8);
  fill(60);
  ellipse(0, 0, 300, 300);
  
}
//계란후라이
function drawEgg(){
  if (isEggBroken == true) {
  
  if (burn < 180){
  burn = burn + 0.9;
  }

  //흰자 테두리
  noStroke();
  fill(225-burn, 215-burn, 185-burn);
  
  ellipse(whiteX1, whiteY1, whiteW1+10, whiteH1+10);
  ellipse(whiteX2, whiteY2, whiteW2+10, whiteH2+10);
  ellipse(whiteX3, whiteY3, whiteW3+10, whiteH3+10);
  ellipse(whiteX4, whiteY4, whiteW4+10, whiteH4+10);
  //흰자 그리기
  noStroke();
  fill(250);
  ellipse(whiteX1, whiteY1, whiteW1, whiteH1);
  ellipse(whiteX2, whiteY2, whiteW2, whiteH2);
  ellipse(whiteX3, whiteY3, whiteW3, whiteH3);
  ellipse(whiteX4, whiteY4, whiteW4, whiteH4);
  //노른자 그리기
  if (yolkCount == 1){
  fill(255, yolkColor, 0);
  ellipse(yolkX1, yolkY1, 50, 50);
  fill(255, 255, 255, 180);
  ellipse(yolkX1 - 8, yolkY1 - 8, 12, 10)
  }
  if (yolkCount ==2){
  fill(255, yolkColor, 0);
  ellipse(yolkX1, yolkY1, 45, 45);
  ellipse(yolkX2, yolkY2, 45, 45);
  fill(255, 255, 255, 180);
  ellipse(yolkX1 - 6, yolkY1 - 6, 12, 10)
  ellipse(yolkX2 - 6, yolkY2 - 6, 12, 10)
  }
  

  //연기
  smokeY = smokeY - 0.6; 
  if (smokeY < -80) { 
  smokeY = 0;
  }
  if (burn > 30) {
  fill(220, 220, 220, 40); // 반투명 흰색
  ellipse(yolkX1-10, smokeY, 12, 12);
  ellipse(yolkX1+10, smokeY - 25, 20, 20);
  ellipse(yolkX1, smokeY - 50, 28, 28);
  }
}
}

//마우스클릭
function mousePressed(){
  isEggBroken = true;

  burn = 0;

  whiteX1 = random(-35, 35); whiteY1 = random(-30, 30); whiteW1= random(80, 120), whiteH1 = random(70, 110);
  whiteX2 = random(-35, 35); whiteY2 = random(-30, 30); whiteW2 = random(80, 120); whiteH2 = random(70, 110);
  whiteX3 = random(-35, 35); whiteY3 = random(-30, 30); whiteW3 = random(80, 120); whiteH3 = random(70, 110);
  whiteX4 = random(-35, 35); whiteY4 = random(-30, 30); whiteW4 = random(80, 120); whiteH4 = random(70, 110);

  yolkX1 = random(-25, 25); yolkY1 = random(-20, 20);
  yolkX2 = random(-25, 25); yolkY2 = random(-20, 20);
  
  yolkColor = random(120, 210);

  yolkCount = int(random(1, 3));


}
//키보드 클릭
function keyPressed(){
  isEggBroken = false;
}



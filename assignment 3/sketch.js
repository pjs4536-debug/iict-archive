let x, y;
let isKilled = false;

function setup() {
  createCanvas(400, 400); 
  x = random(40, 360);
  y = random(40, 360);

}

function draw() {
  background(240);

  if(isKilled){
    textAlign(CENTER, CENTER);
    textSize(40);
    fill(0);
    text("☠️", x, y);
  }
  else{
    textAlign(CENTER, CENTER);
    textSize(40)
    fill(0);
    text("🦟", x, y);

  // mouse on 그림자 그리기
    if(mouseX < x+30
      && mouseX >x-30
      && mouseY <y+30
      && mouseY >y-30) {
        textAlign(CENTER, CENTER);
        textSize(100)
        fill(0, 0, 0, 100);
        text("🤚🏻", mouseX, mouseY);

        if(mouseX < x){
          x = x+3
        } else{
          x= x-3
        } 
        if(mouseY < y){
          y = y+3
        } else{
          y = y-3
        }
        
        x = constrain(x, 20, 380);
        y = constrain(y, 20, 380);
      }
    } 
  }

function mousePressed(){
  if(mouseX < x+30
    && mouseX >x-30
    && mouseY <y+30
    && mouseY >y-30) {
      isKilled = true;
    }
  } 
  

function keyPressed() {
  isKilled = false;
  x = random(40, 360);
  y = random(40, 360);
  }
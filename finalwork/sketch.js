// 最終課題を制作しよう
//ニューロン
let cx, cy, a1, v, a2, dy1, dy2;

function setup(){
  createCanvas(windowWidth, windowHeight);
  cx = width / 5
  cy = height / 5
  r = 100
  n = 10
  a1 = cx + 60;//最初のx値
  a2 = cx - 150
  v = 2;//スピード
}

function draw(){
　background(255);
  noFill();
  strokeWeight(5);
  stroke(240, 128, 128);

  for(let i = 0; i < n; i++){
    const theta = TWO_PI * i / n;
    const x = cx + cos(theta) * r;
    const y = cy + sin(theta) * r;

    const start = theta + PI - PI * 0.25;
    const end = theta + PI + PI * 0.25;
    arc(x, y, r, r, start, end);
  }
  //line(x start, y start, t end, y end)
  line(cx + 50, cy, cx * 3, cy)
  arc(cx * 3, cy, 50, 50, PI/2, PI*1.5)
  line(cx - 65, cy, cx - 150 , cy)
  arc(cx - 65, cy, 50, 50, PI/2, PI*1.5)
  //↓コア部分とシナプスの中
  noStroke()
  fill(220, 160, 140)
  ellipse(cx, cy, 102)
  fill(250, 210, 130)
  ellipse(cx, cy, 20)
　//↓動く円
  fill(100, 180, 50)
  ellipse(a1, cy, 15)
  a1 += v;
  if(a1 > cx + 280){
    dy1 += v;
    ellipse(a1, cy + dy1, 15) // -45度の弾
    ellipse(a1, cy - dy1, 15) // 45度の弾
  }
  else{
    dy1 = 0;
  }
  if(a1 > cx + 320){
    a1 = cx + 60
  }

  ellipse(a2, cy, 15)
  a2 += v/2.5;
  if(a2 > cx - 100){
    dy2 += v;
    ellipse(a2, cy + dy2/2, 15) // -45度の弾
    ellipse(a2, cy - dy2/2, 15) // 45度の弾
  }
  else{
    dy2 = 0;
  }
  if(a2 > cx - 65){
    a2 = cx - 150
  }
  if(keyIsDown(" ".charCodeAt(0))){ v = 0.8 }
  else{ v = 2 }

  synapse(cx + 380, cy, 100)
  fill(0);
  textSize(40)
  text('ニューロンの構造', cx+20, cy-120)
  textSize(20)
  text('軸索', cx*2, cy+40)
  textSize(20)
  text('シナプス', cx-100, cy+100)
  textSize(20)
  text('シナプス', cx+280, cy+100)
  textSize(30)
  text('↑', cx-80, cy+70)
  textSize(30)
  text('↑', cx+300, cy+70)
  textSize(30)
  text('↙️', cx+60, cy-40)
  textSize(30)
  text('↘︎', cx+290, cy-40)
  textSize(20)
  text('細胞体', cx+150, cy-60)
  textSize(17)
  text('※スペースキーを押すとスロー', cx+60, cy+150)
}

function synapse(cx, cy, r){
  noFill();
  strokeWeight(5);
  stroke(240, 128, 128);

  for(let i = 0; i < n; i++){
    const theta = TWO_PI * i / n;
    const x = cx + cos(theta) * r;
    const y = cy + sin(theta) * r;

    const start = theta + PI - PI * 0.25;
    const end = theta + PI + PI * 0.25;
    arc(x, y, r, r, start, end);
  }
  noStroke()
  fill(220, 160, 140)
  ellipse(cx, cy, 102)
  fill(250, 210, 130)
  ellipse(cx, cy, 20)
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

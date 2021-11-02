// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
}

function draw(){
  background(160, 192, 255);
  if(keyIsDown(" ".charCodeAt(0))){
    count = (count + 5 ) % cycle;  
  }//周期的に変化するようにする
  //if(count==100)　count=0と，count=(count+1)%cycleは同じ
  else{
    count = (count + 1 ) % cycle;
  }
  //サイクルで割ったあまりが周期的に変化
  //ドローを何回したかを数えているだけ，サイクルで割ったあまりまでを
  // BLANK[1]

  if(count < 50){
    ellipse(width/2, height/2,count);
  }
  else{
    ellipse(width/2, height/2, 100-count);
  }
}
//周期は一緒でcountの進み具合を帰る
//押されていたら２増えて，押されてない時は１増えるなど,動きは変えないでcountのとこだけ

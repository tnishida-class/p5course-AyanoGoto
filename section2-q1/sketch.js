// 小手調べ
function setup(){
  noFill();
  //ellipse(50,50,10);//i=0
  //ellipse(50,50,20);//i=1
  //ellipse(50,50,30);//i=2
  //ellipse(50,50,40);//i=3

  for(let i = 0; i < 10; i++){

    let r=i*10+10;//10ずつ増えている，最初１０だから+10
    if(i<5){//blue
      stroke(0,0,255);
    }
    else{//red
      stroke(255,0,0);
    }
    ellipse(50,50,r);//先に色，後にellapse。図形描く前に色
  }
}

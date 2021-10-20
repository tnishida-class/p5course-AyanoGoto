// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  //noStroke();しばらく消しておく，最終外す
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      if((i+j)%2==0){//偶数なら
        fill(255,255,255);//奇数番目に色，黒・白・黒・白　　　　　
      }
      else{//奇数なら
        　fill(121,121,121);//偶数番目に灰色
      }
      rect(size*i, size*j, size, size);//rectより先に条件

      if(j<3){
       fill(196, 0, 0);
       noStroke();
       ellipse(38,12,20,20);//１列２行
       noStroke();
       ellipse(88,12,20,20);//１列４行
       noStroke();
       ellipse(138,12,20,20);//１列６行
       noStroke();
       ellipse(188,12,20,20);//１列８行
       noStroke();
       ellipse(12,38,20,20);//２列１行
       noStroke();
       ellipse(62,38,20,20);//２列３行
       noStroke();
       ellipse(112,38,20,20);//２列５行
       noStroke();
       ellipse(162,38,20,20);//２列７行
       noStroke();
       ellipse(38,62,20,20);//3列２行
       noStroke();
       ellipse(88,62,20,20);//３列４行
       noStroke();
       ellipse(138,62,20,20);//３列６行
       noStroke();
       ellipse(188,62,20,20);//３列８行
       //初め三列は赤丸にしたい
       //ellipse省略して書きたいなーー
     　}
     else if(j>4 && j<8){
       fill(0,0,0);//６〜８列目は黒丸
       noStroke();
       ellipse(12,138,20,20)
       noStroke();
       ellipse(62,138,20,20)
       noStroke();
       ellipse(112,138,20,20)
       noStroke();
       ellipse(162,138,20,20)//６列目ここまで
       noStroke();
       ellipse(38,162,20,20)
       noStroke();
       ellipse(88,162,20,20)
       noStroke();
       ellipse(138,162,20,20)
       noStroke();
       ellipse(188,162,20,20)//７列目ここまで
       noStroke();
       ellipse(12,188,20,20)
       noStroke();
       ellipse(62,188,20,20)
       noStroke();
       ellipse(112,188,20,20)
       noStroke();
       ellipse(162,188,20,20)//８列目ここまで
     　　}
    }
  }
}
//まず格子模様だけ書いてみる
//二重ループに似ている
//白と黒を条件で交互に

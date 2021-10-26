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

      if((i+j)%2==1&&j<3){
       fill(196, 0, 0);//初め三列は赤丸にしたい,ellipse省略して書きたいなーー
     　}
     else if((i+j)%2==1&&j>4){
       fill(0,0,0);//６〜８列目は黒丸
     　　}
     noStroke();
     ellipse(size*i+ size/2, size*j+ size/2, size*0.8)
    }
  }
}
//まず格子模様だけ書いてみる
//二重ループに似ている
//白と黒を条件で交互に

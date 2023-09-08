//HTMLのcanvas情報をcanvasへ関連付け
let canvas = document.getElementById('canvas');
//コンテクストを取得
const ctx = canvas.getContext('2d');

//横幅取得
let width  = canvas.width;
//高さ取得
let height = canvas.height;

let degree1 = 0;    //回転角１

let degree2 = 0;    //回転角２

let inc = 1;        //回転角１の増分

let inc2 = 1;       //回転角２の増分

let xShft1 = width / 2;

let yShft1 = 60;   //height / 4;

let xShft2 = width / 2;

let yShft2 = 140;   //height / 2;

let xGangi = [17];

let yGangi = [17];

let xAnk =   [xShft1+ 0,
              xShft1-40,
              xShft1-35,
              xShft1-30,
              xShft1-30,
              xShft1-20,
              xShft1+20,
              xShft1+30,
              xShft1+30,
              xShft1+35,
              xShft1+40,
              xShft1+ 0];
 
let yAnk =   [yShft1- 5,
              yShft1+15,
              yShft1+27,
              yShft1+27,
              yShft1+20,
              yShft1+15,
              yShft1+15,
              yShft1+20,
              yShft1+27,
              yShft1+27,
              yShft1+15,
              yShft1- 5];

let xPend =   [xShft1-5,
               xShft1-5,
               xShft1+5,
               xShft1+5,
               xShft1-5];

let yPend =   [yShft1+15,
               yShft1+350,
               yShft1+350,
               yShft1+15,
               yShft1+15];

let R1 = 60;

let R2 = 40;

setInterval("rectRotate1()", 20);

function rectRotate1(){

//ctx.save();
//ctx.beginPath();

ctx.clearRect( 0, 0, width, height );

//ガンギ車の作成
MakeGangi();

//フレームの描画
ctx.fillStyle = "#f0f000";
ctx.fillRect(width/4, 20, width/2, height*3/4 );

ctx.fillStyle = "#808000";
ctx.fillRect(width/4, height*3/4, width/2, 20 );

//ガンギ車のアニメーション-----------------------------------------------------------
//回転角２ 
if(degree1 > 10 && degree1 <= 15){
    inc2 = 0;
}
else if(degree1 < -10 && degree1 >= -15){
    inc2 = 0;
}
else{
    inc2 = 4.1;
}

degree2 -= inc2;

//基準点を回転軸２に移動
ctx.translate(parseInt(xShft2), parseInt(yShft2));

//回転２ 
ctx.rotate(( degree2 * Math.PI) / 180);

//基準点を元に戻す
ctx.translate(parseInt( -xShft2), parseInt( -yShft2));

//ガンギ車を描画
ctx.fillStyle = "#00ff00";

ctx.beginPath();
for(let i=0; i<17; i++){
    if(i==0){
        ctx.moveTo(xGangi[i], yGangi[i]);
    }
    else{
        ctx.lineTo(xGangi[i], yGangi[i]);
    }
}

ctx.closePath();
ctx.fill();

//回転軸１の描画
ctx.beginPath();
ctx.fillStyle = "#ffffff";
ctx.arc(xShft2, yShft2, 5, 0, 2*Math.PI * 2, true);
ctx.closePath();
ctx.fill();

//基準点を回転軸２に移動
ctx.translate(parseInt(xShft2), parseInt(yShft2));

//回転２ 
ctx.rotate(( -degree2 * Math.PI) / 180);

//基準点を元に戻す
ctx.translate(parseInt( -xShft2), parseInt( -yShft2));
//---------------------------------------------------------------------------------------

//アンクル・振り子のアニメーション----------------------------------------------------------
//回転角１ 
if(degree1 > 15){
    inc = -1;
}
else if(degree1 < -15){
    inc = 1;
}

degree1 += inc;

//基準点を回転軸１に移動
ctx.translate(parseInt(xShft1), parseInt(yShft1));

//回転１
ctx.rotate(( degree1 * Math.PI) / 180);

//基準点を元に戻す
ctx.translate(parseInt( -xShft1), parseInt( -yShft1));

//アンクルを描画
ctx.fillStyle = "#ff0000";

ctx.beginPath();

    for(let i=0; i<12; i++){
        if(i==0){
            ctx.moveTo(xAnk[i], yAnk[i]);
        }
        else{
            ctx.lineTo(xAnk[i], yAnk[i]);
        }
    }

ctx.closePath();
ctx.fill();

//振り子を描画
ctx.fillStyle = "#0000ff";

ctx.beginPath();
for(let i=0; i<5; i++){
    if(i==0){
        ctx.moveTo(xPend[i], yPend[i]);
    }
    else{
        ctx.lineTo(xPend[i], yPend[i]);
    }
}
ctx.closePath();
ctx.fill();

//回転軸を描画
ctx.beginPath();
ctx.fillStyle = "#ffffff";
ctx.arc(xShft1, yShft1, 5, 0, 2*Math.PI * 2, true);
ctx.closePath();
ctx.fill();

//基準点を回転軸１に移動
ctx.translate(parseInt(xShft1), parseInt(yShft1));

//回転１
ctx.rotate(( -degree1 * Math.PI) / 180);

//基準点を元に戻す
ctx.translate(parseInt( -xShft1), parseInt( -yShft1));
//--------------------------------------------------------------------------------------

//ctx.restore();
}

//ガンギ車の作成モジュール
function MakeGangi(){

    for(let i=0;i<8;i++){
        xGangi[2*i]   = R1*Math.cos(3.14/8*(2*i))+xShft2;
        yGangi[2*i]   = R1*Math.sin(3.14/8*(2*i))+yShft2;
        xGangi[2*i+1] = R2*Math.cos(3.14/8*(2*i+1))+xShft2;
        yGangi[2*i+1] = R2*Math.sin(3.14/8*(2*i+1))+yShft2;
    }

    xGangi[16] = R1+xShft2;
    yGangi[16] =  0+yShft2;

    return;
}
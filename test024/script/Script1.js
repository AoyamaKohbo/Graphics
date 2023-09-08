//HTMLのcanvas情報をcanvasへ関連付け
let canvas = document.getElementById('canvas');
//コンテクストを取得
const ctx = canvas.getContext('2d');

//横幅取得
let width  = canvas.width;
//高さ取得
let height = canvas.height;

let degree1 = 0;

let degree2 = 0;

let inc = 1;

let inc2 = 1;

let xGangi = [];

let yGangi = [];

setInterval("rectRotate1()", 20);

function rectRotate1(){

ctx.save();
ctx.beginPath();
ctx.clearRect( 0, 0, width, height );

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
ctx.translate(parseInt(width / 2), parseInt(height / 2));

//回転２ 
ctx.rotate(( degree2 * Math.PI) / 180);

//基準点を元に戻す
ctx.translate(parseInt( -width / 2), parseInt( -height / 2));

//ガンギ車を描画
ctx.fillStyle = "#00ff00";
ctx.fillRect(195, 175, 10, 50);
ctx.fillRect(175, 195, 50, 10);

//基準点を回転軸２に移動
ctx.translate(parseInt(width / 2), parseInt(height / 2));

//回転２
ctx.rotate(( -degree2 * Math.PI) / 180);

//基準点を元に戻す
ctx.translate(parseInt( -width / 2), parseInt( -height / 2));
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
ctx.translate(parseInt(width / 2), parseInt(height / 4));

//回転１
ctx.rotate(( degree1 * Math.PI) / 180);

//基準点を元に戻す
ctx.translate(parseInt( -width / 2), parseInt( -height / 4));

//アンクル・振り子を描画
ctx.fillStyle = "#ff0000";
ctx.fillRect(175, 95, 50, 10);
//--------------------------------------------------------------------------------------

ctx.restore();
let xAray = Rotation(xx,yy,degree1/180*3.14);

xx = xAray[0];
yy = xAray[1];
}

function Rotation(xx,yy,angle){

    const x1 = Math.cos(angle)*xx - Math.sin(angle)*yy;
    const y1 = Math.sin(angle)*xx + Math.cos(angle)*yy;

    return [x1,y1];
}

// main.js
let canvas, g;
 
// 多角形を塗りつぶし描画する関数（頂点の数、中心x座標、中心y座標、半径、色）
const fillPolygon = function(n, cx, cy, r, color){
    const p = Math.floor(360 / n)
    let theta = -90;    // 角度修正（キャンバスでは3時方向が0度扱いのため12時方向を0度とする）
    let polygon = [];
 
    while(theta<360-90){   // 全ての頂点を求める
        const pos = {
            x: r * Math.cos(theta*Math.PI/180) + cx,
            y: r * Math.sin(theta*Math.PI/180) + cy,
        };
        polygon.push(pos);
        theta += p;    // 次の点の位置
    }
 
    // 塗りつぶし多角形を描画する
    g.fillStyle = color;
    g.beginPath();
    for(let i=0; i<polygon.length; i++){
        if(i==0){
            g.moveTo(polygon[i].x, polygon[i].y);
        }
        else{
            g.lineTo(polygon[i].x, polygon[i].y);
        }
    }
    g.closePath();  // パスを閉じる
    g.fill();
}
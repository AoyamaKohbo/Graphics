
(() => {
    let canvas = null;
    let ctx = null;

     window.addEventListener('load', () => {
        initialize();	// 初期化処理を行う
        render();	    // 描画処理を行う
    }, false);

     function initialize(){					//canvas やコンテキストを初期化する
        canvas = document.body.querySelector('#main_canvas');	// querySelector を利用して canvas を参照
       
        canvas.width = window.innerWidth;			// canvas の大きさをウィンドウ全体を覆うように変更する
        
	canvas.height = window.innerHeight;
 
        ctx = canvas.getContext('2d');
    }

    function render(){
	drawRect(0, 0, 300, 300, '#00ff00');
        drawLine(100, 100, 200, 200, '#ff0000'); // 線描画処理を行う
    }

    function drawRect(x, y, width, height, color){
        if(color != null){
            ctx.fillStyle = color;		// 色が指定されている場合はスタイルを設定する
        }

        ctx.fillRect(x, y, width, height);
    }

    function drawLine(x1, y1, x2, y2, color, width = 1){
        if(color != null){
            ctx.strokeStyle = color;	// 色が指定されている場合はスタイルを設定する
        }
        
        ctx.lineWidth = width;	// 線幅を設定する
       
        ctx.beginPath();		// パスの設定を開始することを明示する
        
        ctx.moveTo(x1, y1);		// パスの始点を設定する
        
        ctx.lineTo(x2, y2);		// 直線のパスを終点座標に向けて設定する
       
        ctx.closePath();		// パスを閉じることを明示する
        
        ctx.stroke();			// 設定したパスで線描画を行う
    }
})();

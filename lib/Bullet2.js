
var Bullet2 = function(stage, width, height, x, y){
	this.stage=stage;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.img;
	this.velY = 5;
	this.st;

	this.init = function(){
		this.img = document.createElement("img");
		this.img.src = "../images/gallerxy/bullet.png";
		this.img.style.width = this.width + "px";
		this.img.style.height = this.height + "px";

		this.img.style.position = "absolute";
		this.img.style.left = this.x + "px";
		this.img.style.top = this.y + "px";
		
		this.stage.appendChild(this.img);

		this.move();
	}

	this.move = function(){
		var me = this;
		
		this.y = this.y-this.velY;
		this.img.style.top = this.y + "px";

		var index = 0;
		
		//총알 인스턴스 제거
		//적군과 충돌시 총알제거...
		//kingArr[] 요소와 hero가 접했는지 판단
		for(var a=0; a<allArr.length; a++){
			for(var i=0; i<kingArr[a].length; i++){
				var result = hitTest(this.img, allArr[a][i].img);
				if(result){
					console.log("킹과 부딪힘");
		
					//왕 죽음
					this.stage.removeChild(allArr[a][i].img);
					allArray[a][i].flag = false;
					//배열에서 제거
					allArr[a].spice(i,1);
					//나 죽음
					this.stage.removeChild(this.img);
					clearTimeout(this.st);

					break;
					return;
				}
			}
		}

		//총알이 시야에서 사라지면 setTimeout 종료!!
		this.st = setTimeout(function(){
			me.move();
		}, 10);
	}
}
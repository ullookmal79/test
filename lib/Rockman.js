
var Rockman = function(stage, width, height, x, y, src){
	this.stage=stage;
	this.div;
	this.img;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.src=src;
	this.velX=0;
	this.velY=1;
	this.gravity = 0.1;	//중력을 표현하는 변수
	this.faliing = true;		//주인공이 떨어지고 있는지, 아닌지
	this.jumping = true;	//주인공이 점프중임을 알 수 있는 변수
	this.speedCount = 0;
	this.running = false;

	this.init=function(){
		this.div = document.createElement("div");
		this.img = document.createElement("img");
		this.img.src = this.src;

		this.div.style.overflow = "hidden";
		this.div.style.position="absolute";
		this.div.style.width=this.width + "px";
		this.div.style.height = this.height + "px";
		this.div.style.left = this.x + "px";
		this.div.style.top = this.y + "px";

		
		this.img.style.position = "relative";
		this.img.style.width = this.width + "px";
		this.img.style.height = this.height + "px";

		//이미지를 div에 넣기
		this.div.appendChild(this.img);

		//div를 stage에 넣기
		this.stage.appendChild(this.div);

		this.move();
	}

	//동작을 표현하는 함수
	this.action = function(){
		if(this.running){
			this.speedCount++;

			if(this.speedCount%35==0){
				actionCount++;
				if(actionCount > actionArray.length-1){
					actionCount =1;
				}
			}
			this.img.src = actionArray[actionCount];
		}
		else{
			this.img.src = actionArray[0];
		}
	}

	this.move=function(){
		var me = this;

		//중력 데이터를 velY에 누적해보자.
		this.velY += this.gravity;
	
	/*
		if(this.y >=800){
			this.y = 0;		this.velY = 2;
		}
		else
			this.y += this.velY;
			*/

		if(this.velY >0){
			this.jumping = false;
			this.falling =true;
		}

		//블록과 마주쳤는지 체크
		for(var i=0; i<blockArray.length; i++){
			var result = hitTest(this.div, blockArray[i].img);
			if(result && this.faliing){
				this.velY = 0;
				//console.log("벽돌충돌!");
				//벽돌을 밟으면 더이상 떨어지지 않고 있음.
				this.falling = false;		
			}
		}
		
		this.y +=this.velY;
		this.x += this.velX;

		this.div.style.top = this.y + "px";
		this.div.style.left = this.x + "px";

		//전역변수인 actionCount를 여기서 증가시키자!
		this.action();

		setTimeout(function(){
			me.move();
		}, 10);
	}



}
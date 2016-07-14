//총알을 정의한다.
		//객체지향
		var Bullet = function(stage, x, y){
			//객체의 속성:property
			this.stage = stage;
			this.span;
			this.x = x;
			this.y = y;
			this.st;			//setTimeout()를 가리키기 위한 변수
			this.velX = 10;


			//객체안에 들어있는 함수:method 메서드
			this.init = function(){
				this.span=document.createElement("span");
				
				this.span.innerText="●";
				this.span.style.color="red";
				this.span.style.position="absolute";
				this.span.style.left=this.x+"px";
				this.span.style.top=this.y+"px";
				this.stage.appendChild(this.span);

				this.span.style.width = 10+"px";
				this.span.style.heght = 10 + "px";

				this.move();
			}

			this.hitTest = function(){
				//적군과 부딪치면
				for(var i=0; i<enemyArray.length; i++){
					if(enemyArray[i] != undefined){
						//undefined가 아닌 경우에만...
						var result = hitTest(this.span ,enemyArray[i].img);
					
						if(result){
							//총알 죽이고
							this.stage.removeChild(this.span);
							clearTimeout(this.st);
							//적군 죽임
							this.stage.removeChild(enemyArray[i].img);
							//제거: delete연선자(그 자리엔 undefined로 남아있는다.) 
							clearTimeout(enemyArray[i].st);
							delete enemyArray[i];
							return;
						}
					}
				}
				  
			}

			this.move = function(){
				var me = this;
				this.x+=this.velX;
				//console.log(this.x);
				this.span.style.left=this.x+"px";

				this.st = setTimeout(function(){
					me.move();
				}, 10);

				this.heitTest();

				
				//부딪치지 않고 밖으로 나가면...
					if(parseInt(this.span.style.left) > parseInt(this.stage.style.width)){
						//console.log('총알 죽음');
						//setTimeout() 멈추고 화면에서 지운다.
						clearTimeout(this.st);
						this.stage.removeChild(this.span);
						return;
					}
			}
		}
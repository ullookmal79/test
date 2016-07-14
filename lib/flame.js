var Flame=function(a, w, h, posX, posY){
			this.width = w;
			this.height = h;
			this.x=posX;
			this.y=posY;
			this.img;
			this.arr = new Array();
			this.area = a;
			this.count = 0;

			this.init = function(){
				this.img = document.createElement("img");
				
				this.arr[0] = "../images/flame/flame1.png";
				this.arr[1] = "../images/flame/flame2.png";
				this.arr[2] = "../images/flame/flame3.png";
				this.arr[3] = "../images/flame/flame4.png";

				this.img.src=this.arr[0];

				//이미지의 가로 크기, 세로 크기
				this.img.style.width=this.width+"px";
				this.img.style.height=this.height+"px";
				this.img.style.left = this.x + "px";
				this.img.style.top = this.y + "px";


				//img의 포지션
				
				//호출자가 결정하는 영역에 붙일거임.
				this.area.appendChild(this.img);

				//주요 몸체 메소드 호출
				this.move();
			}

			this.move = function(){
				var me = this;

				//이미지를 반복해서 보여줌->src를 변경
				this.count++;
				if(this.count>=this.arr.length)
					this.count = 0;
				this.img.src=this.arr[this.count];

				setTimeout(function(){
					me.move();
				}, 50);
			}
		}
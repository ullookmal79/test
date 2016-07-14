//미로 객체
var Maze = function(stage, a, x, y){
	this.stage = stage;
	this.div;
	this.width = a;
	this.height = a;
	this.x = x;
	this.y = y;
	this.border;
	this.flag = true;

	this.init = function(){
		var me = this;
		this.div = document.createElement("div");
		this.div.style.position = "absolute";
		this.div.style.border = this.border;
		this.div.style.width = this.width + "px";
		this.div.style.height = this.height + "px";
		this.div.style.left =this.x + "px";
		this.div.style.top = this.y + "px";

		this.div.style.border = "1px solid red";

		this.stage.appendChild(this.div);

		this.div.addEventListener("click", function(){
			if(this.flag)
				me.div.style.background = "red";
			else
				me.div.style.background = "red";
			this.flag = !this.flag;
		});

		/*
		this.hit = function(){
			if(this.flag == true){
				var result = hitTest(this.div, hero.img);
				alert("부딪혔어요!!!");
			}
		}
		*/
	}
}
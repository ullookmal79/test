/*퍼즐을 객체로 정의해보자*/

var Puzzle = function(s, w, h, c){
	this.stage = s;
	this.div;
	this.width = w;
	this.height = h;
	this.color = c;
	
	this.init = function(){
			this.div = document.createElement("div");
			this.div.style.width = this.width + "px";
			this.div.style.height = this.height + "px";
			this.div.style.background = this.color;
			this.div.style.float = "left";
			var me = this;
				
			this.stage.appendChild(this.div);

			this.div.addEventListener("click", function(){
				me.div.style.background = "";
			
			});		
	}
}
//Math.floor() �� ���� �Լ�
function getRandomByRange(max, min){
	var r = Math.floor(Math.random()*(max - min +1) + min);
	return r;
}


 //�ι�ü�� �浹 ���� �Ǵ� 
 //�� �Լ� ȣ�� ��, ��ü A�� me�� �����ϰ�, ��ü B�� target���� ��������.
 //return���� true�̸� �� ��ü�� ���� �����ϰ� �ִ� �����̴�!
function hitTest(me, target) {
	 me_x= parseInt(me.style.left);
	 me_y= parseInt(me.style.top);
	 me_width=parseInt(me.style.width);
	 me_height=parseInt(me.style.height);
	 
	 target_x= parseInt(target.style.left);
	 target_y= parseInt(target.style.top);
	 target_width=parseInt(target.style.width);
	 target_height=parseInt(target.style.height);
	 
	 var result1=(me_x >= target_x) && (me_x <= (target_x+target_width));//���� x��ǥ��ġ�� Ÿ���� x range ���� �ִ��� �Ǵ� 
	 var result2=(me_x+me_width >= target_x) && (me_x+me_width <= (target_x+target_width));  //���� �������� Ÿ���� ������ ���� �ִ��� �Ǵ�
	 
	 var result3=(me_y >= target_y) && (me_y <= (target_y+target_height));//���� y��ǥ��ġ�� Ÿ���� ������ ���� �ִ��� �Ǵ�
	 var result4=(me_y+me_height >= target_y) && (me_y+me_height <= (target_y+target_height));//���� y���� Ÿ���� ������ ���� �ִ��� �Ǵ�
	  
	 return (result1 || result2) && (result3 || result4);
}



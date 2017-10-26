//随机验证码
	var arr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o',
	'p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','0'];
	var str="";
	while(str.length<6){
			var iNum=parseInt(Math.random()*100)
			while(iNum>36){
				iNum=parseInt(Math.random()*100)
			}
			str+=arr[iNum];
		}
	$("n_b_l_verification_two").innerHTML=str.toUpperCase();
window.onload=function(){	
	$("n_b_l_change").onclick=function(){
		var str='';
		while(str.length<6){
			var iNum=parseInt(Math.random()*100)
			while(iNum>36){
				iNum=parseInt(Math.random()*100)
			}
			str+=arr[iNum];
		}
		$("n_b_l_verification_two").innerHTML=str.toUpperCase();
	}
}
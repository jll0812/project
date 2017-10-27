//轮播图
$(function(){
	var mySwiper = new Swiper('.swiper-container', {
    autoplay: 3000,              
    //可选选项，自动滑动过渡延迟时间（单位ms），就是自动滑动时slide的停留时间
    initialSlide: 0,               //从第几个开始
    loop: true,                    
    //设置为true 则开启loop模式。loop模式：会在原本slide前后复制若干个slide(默认一个)并在合适的时候切换，让Swiper看起来是循环的。
    effect: 'fade',         
    //切换效果，默认为"slide"（位移切换），可设置为"fade"（淡入）"cube"（方块）"coverflow"（3d流）"flip"（3d翻转）  
    slidesPerView:1,             
    //显示的数量,设置slider容器能够同时显示的slides数量
    centeredSlides: true,         //设置第一块位置
    prevButton: '.swiper-button-prev',//后退按钮
    nextButton: '.swiper-button-next',//前进按钮
    autoplayDisableOnInteraction: false,       
    //用户操作swiper之后，是否禁止,true,false
    pagination: '.swiper-pagination',//分页器的控制
    paginationClickable: true,           
    //此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换
    //spaceBetween: 50,                  //间隔,slide之间的距离
	})
	document.getElementById('box').onmouseenter=function(){
        mySwiper.stopAutoplay();
	}
	document.getElementById('box').onmouseleave=function(){
        mySwiper.startAutoplay();
	}
});
	
	
$(function(){
	$(".b_m_u_lis").mouseover(function(){
		var this_index=$(this).index();
		$(".b_m_u_lis").eq(this_index).css({"backgroundColor":"#F8177C"});
		$(".b_m_u_lis_box").eq(this_index).css({"display":"block"});
	});
	$(".b_m_u_lis").mouseout(function(){
		var this_index=$(this).index();
		$(".b_m_u_lis").eq(this_index).css({"backgroundColor":"#000"});
		$(".b_m_u_lis_box").eq(this_index).css({"display":"none"});
	});
})
//美图APP
$(function(){
	$("#abb_cl_right").click(function(){
		$("#abb_app_uls").css({"margin-left":"-681px","transition": "all 1s"});
	});
	$("#abb_cl_left").click(function(){
		$("#abb_app_uls").css({"margin-left":"0px","transition": "all 1s"});
	});
});

//侧边栏
//左侧边栏
$(window).scroll(function(event){
	var winPos =$(window).scrollTop()
	if(winPos<200){
		$("#left_side").css({"display":"none"});
	};
	if(winPos>200){
		$("#left_side").css({"display":"block"});
	};
	if(winPos<200){
		$("#rs_zd").css({"display":"none"});
	};
	if(winPos>200){
		$("#rs_zd").css({"display":"block"});
	};
});
//右侧边栏
$(function(){
	$("#rs_gzh").mouseover(function(){
//		var this_index=$(this).index();
		$("#rs_gzh_sex").css({"display":"block","z-index":"100000"});
	});
	$("#rs_gzh").mouseout(function(){
//		var this_index=$(this).index();
		$("#rs_gzh_sex").css({"display":"none","z-index":"100000"});
	});
});
//返回顶部
$(function(){
	$("#rs_zd").click(function(){
		$("html,body").animate({scrollTop:0}, 500);
	});
});
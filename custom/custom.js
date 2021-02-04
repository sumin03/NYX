// JavaScript Document


$(document).ready(function(e) {
    
	//버튼 눌렀을경우 맨 위로 돌아오는 
	$("#top").click(function(){
		$("html,body").animate({"scrollTop":0},1000);	
	});
	
	/*//맨 위 배너 슬라이드쇼 파일보고 하기 
	$(".indicator>li>a").click(function(){
		var i =$(this).index();
		var sw = $(".slide > li.eq(0");
		$(".slide").stop().animate({"left":-100%*i},500);

		$(".indicator a").removeClass("activate");
		$(this).addClass("activate");
	});*/

	
	
	$("#left").click(function(){
		var now = $(".slide_box > div").first();
		$(".slide_box").stop().animate({"left":"1200px"},200,function(){
			$(this).append(now).css("left",0);
		})	
		
		
	});
	
	//right버튼 누를때
	$("#right").click(function(){
		var last = $(".slide_box>div").last();
		$(".slide_box").stop().animate({"left":"-1200px"},200,function(){
			$(this).prepend(last).css("right",0);	
		})	
	});
	

	
	
	 		
});
	

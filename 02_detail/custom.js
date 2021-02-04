// JavaScript Document

$(document).ready(function(e) {

	//버튼 눌렀을경우 맨 위로 돌아오는 
	$("#top").click(function(){
		$("html,body").animate({"scrollTop":0},1000);	
	});


	
    $(window).scroll(function(){
		var scroll = $(this).scrollTop();
		console.log(scroll);
		var wrapper = $(".wrapper").offset().top;
		var gray = $(".gray").offset().top;
		const fixed = $(".fixed").offset().top;
		var middle = $(".middle").offset().top;

	


		
		
		

		/*fixed  */
		if (scroll >= wrapper && scroll < gray-712) {
			$(".middle").css({"position":"fixed","top":0, "left":0});
			$(".fixed").css({"position":"fixed", "right":"50%", "margin-right":"-600px", "top":"85px"})
		} else if (scroll >= gray-712) {
			$(".middle").css({"position":"absolute","top":gray-wrapper-795});
			$(".fixed").css({"position":"absolute", "right":"50%", "margin-right":"-600px", "top":gray-wrapper-712})
		} else {
			$(".middle").css({"position":"absolute","top":0,"left":0,"bottom":"auto"});
			$(".fixed").css({"position":"absolute", "right":0, "margin-right":0, "top":0})
		}
	});


	// middle > gnbs 눌렀을 때 색 이동 + 스크롤 다운 
	
	var menu = $(".gnbs > li");
	var	contents = $(".wrapper> section");
	

		
	/*
	menu 를 클릭하면 해당 요소에만 클래스 on이 추가되도록 
	*/

	menu.click(function(e){
		e.preventDefault();
		menu.removeClass("active");
		$(this).addClass("active");
		var idx = $(this).index();
		var section = contents.eq(idx);
		var sectionDistance  = section.offset().top;
		//A.scrollTop() 스크롤양을 확인 
		$('html,body').stop().animate({scrollTop:sectionDistance})
	});


	//수량 정하기~! 
	var num = $("#number").text();
	
	$("#btn_left").click(function(){
		num--;
		if(num > 0){
			$("#number").text(num);
		}else{num=1}
	});
	$("#btn_right").click(function(){
		num++;
		if(num<100){
			
			$("#number").text(num);
		}else{num=99}
	});


	var number = $(".number").text();
	
	$(".btn_left").click(function(){
		number--;
		if(num > 0){
			$(".number").text(number);
		}else{number=1}
	});
	$(".btn_right").click(function(){
		number++;
		if(number<100){
			
			$(".number").text(number);
		}else{number=99}
	});
	

	
});
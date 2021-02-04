// JavaScript Document
$(document).ready(function(e) {
    //버튼 눌렀을경우 맨 위로 돌아오는 
	$("#top").click(function(){
		$("html,body").animate({"scrollTop":0},1000);	
	});
	
	/*make버튼을 누를 때 home 버튼 나타내기 */
	
	$("#all").click(function(){
		$(".hide button").removeClass("shown");
		$(".all").toggleClass("shown");
		
	});
	
	$("#face").click(function(){
		$(".hide button").removeClass("shown");
		$(".face").toggleClass("shown");	
	});
	$("#eye").click(function(){
		$(".hide button").removeClass("shown");
		$(".eye").toggleClass("shown");	
	});
	
	$("#lip").click(function(){
		$(".hide button").removeClass("shown");
		$(".lip").toggleClass("shown");	
	});

	var selectedClass ="";
	$(".btn").click(function(){
		selectedClass = $(this).attr("data-rel");
		$(".product > .wrap > table > tr").fadeTo(100,0.1);	
		$(".product > .wrap > table > tr").not("."+selectedClass).fadeOut().removeClass("scale");
		
		setTimeout(function(){
			$("."+selectedClass).fadeIn().addClass("scale");//selectedClass변수 값으로 클래스를 선택 fadeIn으로 화면에 표시 scale-content클래스를 추가하여 scale을 1로 변경
			$(".product > .wrap > table > tr").fadeTo(300,1);
			//#portfolio요소의 투명도를 0.3초동안 1로 변경
		},300);//0.3초 후에 함수 실행
	});
	
});
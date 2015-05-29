$(function(){

	$('.toggle').click(function(){
		$(this).toggleClass("active");
		$('.nav').slideToggle();
		});
	$('.nav > ul > li:has(ul) > a').append('<div class="arrow-bottom"></div>')

});

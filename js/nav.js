$(function(){

	$('.country-nav').click(function(){
		$(this).toggleClass("active");
		$('.country-nav').slideToggle();
		});
	$('.country-nav > ul > li:has(ul) > a').append('<div class="arrow-bottom"></div>')

	$('.catalog-toggle').click(function(){
		$(this).toggleClass("active");
		$('.catalog-nav').slideToggle();
		});
	$('.catalog-nav > ul > li:has(ul) > a').append('<div class="arrow-bottom"></div>')

});

$(function(){

	var work=["team1","team2"];
	var hash;

	var countrys = ["台灣" , "日本" , "韓國" ,"法國" , "義大利" , "美國"];
	var node,oldNode,oldvalue;
	var title;
	var data;
	function init(){
		var urlcountry = getUrlVars()["country"];
        var kind = getUrlVars()["kind"];
		if (urlcountry == null && kind == null)
			showMenu("台灣", "肉類");
		else{
			var country = countrys[parseInt(urlcountry)]
			showMenu(country , kind);
			
			$(".ciusine-country").text(country);
			$(".ciusine-country").attr("country",country);
		}
	}
	window.onload=init;

	$(function(){

		$(".counrty-select").click(function(){
			//alert($(this).attr("country"));
			showMenu($(this).attr("country") , "肉類");
			$(".ciusine-country").text($(this).attr("country"));
			$(".ciusine-country").attr("country",$(this).attr("country"));
		});

		$(".cuisine-list-li").click(function(){
			var country=$(".ciusine-country").text();
			var kind=$(this).text();
			
			showMenu(country , kind);
		});

		$(".mo-counrty-select").click(function(){
			//alert($(this).attr("country"));
			showMenu($(this).attr("country"), "肉類");
			
			$("#mo-country").text($(this).text());
			$("#mo-country").attr("country",$(this).attr("country"));
			$('.country-nav').slideToggle();
			
			$('.country-toggle').toggleClass("active");
		});

		$(".mo-cuisine-list-li").click(function(){
			var country=$("#mo-country").attr("country");
			var kind=$(this).text();
			$("#mo-catalog").text($(this).text())
			showMenu(country , kind);
			$('.catalog-nav').slideToggle();
			$('.catalog-toggle').toggleClass("active");
		});


		/*$('#countryselect').change(function() {
		  
		    var country = $('#countryselect').val();
			
		    showMenu(country, "肉類");
		});
		$('#catalogyselect').change(function() {
		  	var country=$("#countryselect").val();
			
		    var kind = $('#catalogyselect').val();
			showMenu(country , kind);
		    
		});
		*/

		var page=0;
		//var cuisine=new array
		$(".selects").click(function(){
				$("#title").text($(this).text());
				
		});


		$('.select').hide();

		function showCuisine(){


		}
			
	$(".various").fancybox({
				maxWidth	: 1000,
				maxHeight	: 600,
				fitToView	: false,
				width 		:'100%',
				height 		:'100%',
				autoSize	: false,
				closeClick	: false,
				openEffect	: 'none',
				closeEffect	: 'none',
				scrollbar:'auto'
			});


	});

	function getUrlVars()
	{
		var vars = [], hash;
		var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
		for(var i = 0; i <hashes.length; i++)
		{
		    hash = hashes[i].split('=');
		    vars.push(hash[0]);
		    vars[hash[0]] = hash[1];
		}
		    return vars;
	}


	function getTxt(src){ //讀txt檔

		$.get(src, function(data){
			$(".getText").attr("heis",data);
		});
	}

	function showMenu(country , kind){
			$(".cuisine").remove();
			$.get("./cuision/"+ country+"/"+kind +"/cata.txt", function(data){

				hash = data.split("\n");
				var menu = "";
				
				for (var i = 0 ; i < hash.length ; i++){
					if(hash[i].indexOf(";")==-1) continue;
					var cata = hash[i].split(";");

					var difficulty="";
					menu += "<div class=\"cuisine various\" data-fancybox-type=\"iframe\" href=\"./fancybox.html?country=" + country +"&kind=" + kind + "&index=" + i +"\" >";
					menu += "<div>";
					var name=cata[0];
						
					menu += "<img src=\"./cuision/"+ country+"/"+kind +"/"+ cata[0] + ".jpg\" width=\"150px\" height=\"150px\">";
					
					if($(window).width()>=700){	
						menu += "<h1>"+ cata[0] + "</h1>";
					}else{
						menu += "<h2>"+ cata[0] + "</h2>";
					}
					menu += "<table>";
					menu += "<tr height=\"50px\">";
					for (var j = 0 ; j < parseInt(cata[2]) ; j++){
						difficulty += "★";
					}
					if($(window).width()>=700){	
						menu += "<td>難度："+ difficulty + "</td>";
					}else{
						menu += "<td>"+ difficulty + "</td>";
					}
					
					menu += "</tr>"	;					
					menu += "<tr class=\"pc\" height=\"50px\">";

					menu += "<td  colspan=\"3\" > ";
					var information = cata[1];
					if (information.length > 28)
						information = information.substring(0,28);
					menu += information +"...";
					menu += "</td>";
					menu += "</tr>";
					menu += "</table>";
					menu += "</div>";
					menu += "</div>";
				}
				
        		$("#context").append(menu);
        		
       

		});
	}
	
	$('.back').click(function(){
			$('.select_design').attr('href','#design');
			$('.teamselect').slideDown(1000);
			

			//$('#'+$(this).attr('heis')).css('opacity','+=0.7' );
        	$(".features").remove();

			//$('#'+team).stop().slideUp(1000);
			//$('#design').stop().css('opacity','-=0.3');
			$('.back').addClass("hidden");	


	});

	$(".various").fancybox({
				maxWidth	: 800,
				maxHeight	: 700,
				fitToView	: false,
				width		: '500%',
				height		: '100%',
				autoSize	: false,
				closeClick	: false,
				openEffect	: 'none',
				closeEffect	: 'none',
				scrollbar:'auto'
			});
	/*$(".icon").hover(function() {
     // alert("xxx");
     $('.icon').stop().css('opacity','0.5');
      $('.features').css('background','url(./img/'+$(this).attr('heis')+'/01.jpg) ');
      $('.features').css('opacity','0.7');
     $(this).stop().css('opacity','1');


    },
	  function () {
     	$('.icon').stop().css('opacity','1');

	    $('.features').css('background','none');
     	 $('.features').css('opacity','1');

	  }
	);*/

});
$(function(){

	var work=["team1","team2"];
	var hash;

	var node,oldNode,oldvalue;
	var title;
	var data;
	function init(){
		
		showMenu("台灣", "肉類");
		
		
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

		$('#countryselect').change(function() {
		  
		    var country = $('#countryselect').val();
			
		    showMenu(country, "肉類");
		});
		$('#catalogyselect').change(function() {
		  	var country=$("#countryselect").val();
			
		    var kind = $('#catalogyselect').val();
			showMenu(country , kind);
		    
		});
		
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
				alert(data);
				for (var i = 0 ; i < hash.length ; i++){
					
					var cata = hash[i].split(";");
					var difficulty="";
					menu += "<div class=\"cuisine various\" data-fancybox-type=\"iframe\" href=\"./fancybox.html?country=" + country +"&kind=" + kind + "&index=" + i +"\" >";
					menu += "<div>";
								
					menu += "<img src=\"./cuision/"+ country+"/"+kind +"/"+ cata[0] + ".jpg\" width=\"150px\" height=\"150px\">";
					menu += "<h1>"+ cata[0] + "</h1>";
					menu += "<table>";
					menu += "<tr height=\"50px\">";
					for (var i = 0 ; i < parseInt(cata[2]) ; i++){
						difficulty += "★";
					}
					menu += "<td>難度："+ difficulty + "</td>";
					menu += "</tr>"	;					
					menu += "<tr class=\"pc\" height=\"50px\">";

					menu += "<td  colspan=\"2\" > ";
					var information = cata[1];
					if (information.length > 26)
						information = information.substring(0,25);
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
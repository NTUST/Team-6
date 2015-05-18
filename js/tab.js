$(function(){

	var work=["team1","team2"];
	var hash;
	var teamContext=" ";
	var team=" ";
	var node,oldNode,oldvalue;
	var title;
	var data;
	function init(){
		
		$('.select_design').attr('href','#design');
		
		
	}
	window.onload=init;

	function getTxt(src){ //讀txt檔

		$.get(src, function(data){
			$(".getText").attr("heis",data);
		});
	}

	$('.team').click(function(){
			team=$(this).attr('heis');
			$.get("./img/teacher/"+ team+"/student.txt", function(data){
			$.get("./img/teacher/"+ team+"/info.txt", function(data1){
				//alert(data1);

				
				teamContext="<section class=\"features text-center  "+team+"\" id=\""+team+"\">";

				hash = data.split("\n");
				var hashT = data1.split("\n");
			
         	 	teamContext+="<div class=\"container col-md-12\" >";
           		teamContext+="<div class=\"row\"  >";
             	teamContext+="<div class=\"col-md-12\" style=\"\">";

           	   // teamContext+=" <h1 class=\"arrow\" style=\"color:white; \"><strong>"+team+"</strong></h1>";
           		teamContext+="<div class=\"row\" style=\"background-color:#242830;\" >";

             	teamContext+="<div class=\"col-md-4\" >";
                teamContext+="<div  style=\"overflow:hidden;  \">";

                teamContext+="<img src=\"img/teacher/"+ team+"/photo.jpg\"  style=\" padding-bottom:20px; height:300px;  text-align: center;\">";
				teamContext+="</div >";
				teamContext+="</div >";

                teamContext+="<div class=\"text-left col-md-8 \" style=\"  padding-left:20px; padding-bottom:20px; color:#a1a9b0\">";
                teamContext+="<h1 style=\"color:white; \" >"+ hashT[0]+"</h1>";

                    for(var j=1;j<hashT.length;j++){
                    	 teamContext+= hashT[j]+"<br>";
                    }
                teamContext+="</div>";

                teamContext+="</div>";
             	

             	teamContext+="<div class=\"col-md-12\" style=\"padding-top:50px; background-color:white;\" >";
                //for(var k=0;k<4;k++){
            	for(var i=0;i<hash.length;i++){
                	
					hashD = hash[i].split(";");

                	
					teamContext+="<div class=\"col-md-3 \">";
                        
                    teamContext+="<div >";
                    teamContext+="<a class=\"various \" data-fancybox-type=\"iframe\" href=\"fancybox.html?text="+ hashD[0]+"&page="+hashD[2]+"\">";
                    teamContext+="<img src=\"img/student/"+ hashD[0]+"/00.png\" heis=\""+ hashD[0]+"\" class=\"icon\">";
                    teamContext+="</a>";
                    teamContext+="</div>";
                    teamContext+="<div>";


                    teamContext+="<h2>"+ hashD[1]+"</h2>";

                    
                    teamContext+="<p>"+ hashD[0]+"</p>";
                    teamContext+="</div>";
                    teamContext+="</div>";

                }
                 // }


               // teamContext+="<div class=\"clearfix\"></div>";
               //	teamContext+=" </div>";
               	teamContext+=" </div>";
              
             	teamContext+=" </div>";
            	teamContext+="</div>";
          		teamContext+="</div>";
        		teamContext+="</section>";
        		
        		//$(".features").replaceWith(teamContext);
        		//$(".features").remove();
        		$(".portfolio").append(teamContext);

        $('.select_design').attr('href','#'+team);
			

			$('#'+team).stop().slideDown(1000);
			$('.teamselect').stop().slideUp(1000);	
			$('.back').removeClass("hidden");	

			});
			});
	});
	
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
$(document).ready(function(){
	 $(window).scroll(function(){
	    let h = $('header').position().top;
	    let t = $(window).scrollTop();
	  if(t > 100){
	   $('#header').css({ background: 'white' , boxShadow: '0 0 2px 2px #80808073',transition: '1s'});
	   $('.face').css({background : 'blue' , border: '1px solid grey' , color:'white', borderRadius : '50%' , transition : '1s'})
	   $('.teleg').css({background : 'dodgerblue' , border: '1px solid grey' , color:'white', borderRadius : '50%' , transition : '1s'})
	   $('.twit').css({background : 'dodgerblue' , border: '1px solid grey' , color:'white', borderRadius : '50%' , transition : '1s'})
	   $('#menu > ul > li').css({color : 'black' , transition : '1.5s'});
	  } else{
	   $('#header').css({background: 'transparent' , color: 'white' , boxShadow: 'none',transition: '1.5s'})
	   $('#menu > ul > li > a').css({color : 'white' , transition : '1.7s'});
	   $('.face').css({background : 'transparent' , border: 'none' , color:'blue' , transition : '1s'})
	   $('.teleg').css({background : 'transparent' , border: 'none' , color:'white' , transition : '1s'})
	   $('.twit').css({background : 'transparent' , border: 'none' , color:'white' , transition : '1s'})
	  }
	    
	  });

	//fixed-icon

	$(window).scroll(function(){
	    let h = $('header').position().top;
	    let t = $(window).scrollTop();
	    if( t > 650 ){
	    	$('.up').css({display: 'block' , transition: '5s'})
	    }else{
	    	$('.up').css({display: 'none' , transition: '2s'})
	    }
	   });
	$('.up').click(function(){
		$("html, body").animate({ scrollTop: 0 },900);
	});
	$('#hidden-menu').click(function(){
		$('#menu > ul').slideToggle(450)
	});
	$('#contact_btn').click(function(){
		$("html , body").animate({ scrollTop : 3848  },900)
	});
	$(window).scrollTop(function(){
		var t = $(window).scrollTop();
		if (t === 621) {
			$('#haqida').css({background : 'blue' , color : 'white'});
		}else{
			console.log('false')
		}
	});
})


















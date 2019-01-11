$(document).ready(function(){
	$('.down').click(function(){
		$('html, body').animate({ scrollTop: 690 },900);
	});
	$('.up').click(function(){
		$('html, body').animate({ scrollTop: 0 },900);
	});
	$(window).scroll(function(){
	    let t = $(window).scrollTop();
	    if( t > '700' ){
	    	$('.up').css({display: 'block' , transition: '5s'})
	    }else{
	    	$('.up').css({display: 'none' , transition: '5s'})
	    }
	});
});

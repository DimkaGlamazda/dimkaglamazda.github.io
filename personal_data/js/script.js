$(function(){
	 var topPos = $(".navbar").offset().top; //topPos - это значение от верха блока до окна браузера
		 $(window).scroll(function() { 
		  var top = $(document).scrollTop();
		  if (top > topPos) $(".navbar").addClass('fixed'); 
		  else $(".navbar").removeClass('fixed');
	 });
 }); 
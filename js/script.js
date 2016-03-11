
//==========================================Эфект карусели

$(document).ready(function() {
  
  $("#owl-demo").owlCarousel({
	  autoPlay : 7000,//Скорость стояния слайда
      navigation : 1000, // Show next and prev buttons
      slideSpeed : false,
      paginationSpeed : 1000,//Скорость прокрутки слайда
	  singleItem:true,
	  pagination:false //ТОчки внизу
	 
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  }); 
});
//===========================================Эфект прилипания 
$(function(){
	 var topPos = $(".navbar").offset().top; //topPos - это значение от верха блока до окна браузера
		 $(window).scroll(function() { 
		  var top = $(document).scrollTop();
		  if (top > topPos) $(".navbar").addClass('fixed'); 
		  else $(".navbar").removeClass('fixed');
	 });
 }); 
//======================================
 var top_show = 300; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
  var delay = 1000; // Задержка прокрутки
  $(document).ready(function() {
    $(window).scroll(function () { // При прокрутке попадаем в эту функцию
      /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
      if ($(this).scrollTop() > top_show) $('#top').fadeIn();
      else $('#top').fadeOut();
    });
    $('#top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
      /* Плавная прокрутка наверх */
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });
  });
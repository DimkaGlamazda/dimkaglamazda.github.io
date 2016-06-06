
// ============ Карусель ================
$(document).ready(function(){
  $('.bxslider').bxSlider();
});
// ============ Автопрокрутка вверх ====
var button_up = document.getElementById('button_up');
button_up.onclick = function() {
	up();
}
var t;
function up() {
  var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
  if(top > 0) {
    window.scrollBy(0,-100);
    t = setTimeout('up()',10);
  } else clearTimeout(t);
  return false;
}
//===== Изменение картинки фона =========
window.onload = function() {
  window.onscroll = function() {
    var scrol_size  = window.pageYOffset || document.documentElement.scrollTop;

    var body = document.body;
    if(scrol_size > 3850){
      body.style.backgroundImage='url("images/background4.jpg")';
    }else if(scrol_size < 4700){
      body.style.backgroundImage='url("images/background2.jpg")';
    }

  }
}
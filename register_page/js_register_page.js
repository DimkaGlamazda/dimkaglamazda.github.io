
var toggle = new Toggle();


  toggle.button_next.onclick = function() {toggle.toggle_button_next();}
  toggle.button_prev.onclick = function() {toggle.toggle_button_prev();}

  window.onresize = function () {
     toggle.render_page(document.documentElement.clientWidth);
  }

  function Toggle() {

    this.button_next = document.getElementById('next');
    this.button_prev = document.getElementById('prev');


    this.wrapper = document.getElementById('wrapper');
    this.wrapper_inner = document.getElementById('inner_wrapper');
    this.scren_1 = document.getElementById('on1');
    this.scren_2 = document.getElementById('on2');
    this.scren_3 = document.getElementById('on3');
    this.scren_4 = document.getElementById('on4');
    this.scren_5 = document.getElementById('on5');

    this.counter = 0;

  }




  Toggle.prototype.toggle_button_next = function() {

    this.counter = this.counter + 1;

    if(this.counter <= 0) this.counter = 1;
    if(this.counter > 4) this.counter = 4;

    switch(this.counter){
      case 1:
          this.wrapper_inner.classList.remove('display_next_1');
          this.wrapper_inner.classList.add('display_next_2');
        break;
      case 2:
          this.wrapper_inner.classList.remove('display_next_2');
          this.wrapper_inner.classList.add('display_next_3');
        break;
      case 3:
          this.wrapper_inner.classList.remove('display_next_3');
          this.wrapper_inner.classList.add('display_next_4');
        break;
      case 4:
          this.wrapper_inner.classList.remove('display_next_4');
          this.wrapper_inner.classList.add('display_next_5');
        break;
    }
  }

  Toggle.prototype.toggle_button_prev = function() {

    if(this.counter < 1) this.counter = 1;
    if(this.counter > 4) this.counter = 4;

    switch(this.counter){
      case 1:
          this.counter = this.counter - 1;
          this.wrapper_inner.classList.remove('display_next_2');
          this.wrapper_inner.classList.add('display_next_1');
        break;
      case 2:
          this.counter = this.counter - 1;
          this.wrapper_inner.classList.remove('display_next_3');
          this.wrapper_inner.classList.add('display_next_2');
        break;
      case 3:
          this.counter = this.counter - 1;
          this.wrapper_inner.classList.remove('display_next_4');
          this.wrapper_inner.classList.add('display_next_3');
        break;
      case 4:
          this.counter = this.counter - 1;
          this.wrapper_inner.classList.remove('display_next_5');
          this.wrapper_inner.classList.add('display_next_4');
        break;
    }
  }



  Toggle.prototype.render_page = function(element_window_size) {
      this.scren_1.style.width = element_window_size + "px";
      this.scren_2.style.width = element_window_size + "px";
      this.scren_3.style.width = element_window_size + "px";
      this.scren_4.style.width = element_window_size + "px";
      this.scren_5.style.width = element_window_size + "px";
      this.wrapper_inner.style.width = element_window_size * 5 + "px";
      this.wrapper.style.width = element_window_size + "px";

  }

window.onload = function(){
  toggle.render_page(document.documentElement.clientWidth);
}


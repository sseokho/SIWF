$(document).ready(function() {
  mainSwiper();


  $(window).resize(function(){

		windowW = window.innerWidth;
		if(windowW<=1024){


			$(function(){
        $('.tabcontent > div').hide();
        $('.tabnav a').click(function () {
          /*$('.tabcontent > div').hide().filter(this.hash).fadeIn();*/
          $('.tabcontent > div').hide().filter(this.hash).show();
          $('.tabnav a').removeClass('active');
          $(this).addClass('active');
          return false;
        }).filter(':eq(0)').click();
      });


      $('.mainVisual .conBox__inner .item').removeClass('on');
      

		}
		else{

			$('.tabcontent > div').show();

      $('.mainVisual .conBox__inner .item').hover(function() {
        $(this).addClass("on");
      }, function(){
        $(this).removeClass("on");
    });


		}
	}).resize();





});



function mainSwiper() {


    var mainSwiper = new Swiper('.firstSwiper.mySwiper', {
      loop: true,
      slidePerView:1,
      effect:'fade',
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: '.swiper-pagination',
        /*
        type: 'fraction',
        formatFractionCurrent: function (number) {
            return number;
        }*/
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });


    $('.control .swiper-button-pause').click(function () {
      if ($(this).hasClass('off')) {
        $(this).removeClass('off');
        mainSwiper.autoplay.start();
      } else {
        $(this).addClass('off');
        mainSwiper.autoplay.stop();
      }
    });



}

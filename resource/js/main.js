$(document).ready(function() {
  const popUp = document.getElementById('popUp');
  const chekbox = popUp.querySelector('#isChecked');

  const handlePopup = {
      setStorageForDate: () => {
          const date = new Date();
          localStorage.setItem('popupDate', JSON.stringify({
              date: date.getDate(), 
              month: date.getMonth(), 
              year: date.getFullYear()
          }));
      },
      isPopupHidden: () => {
          const today = new Date();
          const popupDate = JSON.parse(localStorage.getItem('popupDate'));

          if (popupDate !== null) {
              return (popupDate.date !== today.getDate() || 
                  popupDate.month !== today.getMonth() ||
                  popupDate.year !== today.getFullYear()
              ) ? false : true;
          }
      },
      handleClose: (e) => {
          if (e.target === popUp.querySelector('button.close')) {
              popUp.classList.add('hidden');
              if (chekbox.checked) {
                  handlePopup.setStorageForDate();
              }
          }
      }
  }

  window.addEventListener('load', () => {
      handlePopup.isPopupHidden() ? popUp.classList.add('hidden') : popUp.classList.remove('hidden');
  });
  popUp.addEventListener('click', handlePopup.handleClose);
  popUp.querySelector('button.close').addEventListener('click', handlePopup.handleClose);
});

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
      // autoplay: {
      //   delay: 3000,
      // },
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



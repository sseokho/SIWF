$(document).ready(function () {
    headerScript(); // 헤더 전용 스크립트
    dDay();
    callPop();
    mnav();
    searchModal();
    toggleSite();

    


    /*$(window).resize(function(){

        var width = window.innerWidth;

        if(width > 1024){

            $('body').removeClass('fixed');
            $('.navWrap').removeClass('mopen');
        }   

        else {

        }

    }).resize();
    */



});
function headerScript(){
    $('.header').load('header.html', function() {
        $('.navigation > li > a').on('click', function(){
            $(this).next().toggleClass('active');
        });
    });

};

function dDay(){
   //디데이 종료 일자 설정
    var countDownDate = new Date("4 30, 2024 24:00:00").getTime();
    //1초마다 갱신되도록 함수 생성,실행
    const x = setInterval(function() {
    // 오늘 날짜 등록
    const now = new Date().getTime();

    // 종료일자에서 현재일자를 뺀 시간
    const distance = countDownDate - now;

    // 각 변수에 일, 시, 분, 초를 등록
    var d = Math.floor(distance / (1000 * 60 * 60 * 24));
    var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((distance % (1000 * 60)) / 1000);

    if(distance<0){
        document.querySelector(".days").innerHTML = "00";
        document.querySelector(".hours").innerHTML = "00";
        document.querySelector(".minutes").innerHTML = "00";
        document.querySelector(".seconds").innerHTML = "00";
    } else {
        if(d<10){d="0"+d;}
        if(h<10){h="0"+h;}
        if(m<10){m="0"+m;}
        if(s<10){s="0"+s;}

        document.querySelector(".days").innerHTML = d;
        document.querySelector(".hours").innerHTML = h;
        document.querySelector(".minutes").innerHTML = m;
        document.querySelector(".seconds").innerHTML = s;
    }
        //id가 d-day인 HTML코드에 내용 삽입
        
    },1000);
}
function callPop(){
	$('.popup:not(.if-check)').on('click', function(){

        
        var cp = $(this);
        var tabDisable;
        var nowScrollPos = $(window).scrollTop();
        
        $('body').css('overflow', 'hidden');
        $("#" + $(this).data('id')).parents('.pop-wrap').show();
        $("#" + $(this).data('id')).show();
        $('.pop-cont .close button').focus();


        function popClose(){
            $('body').css('overflow', 'auto');
            $(window).scrollTop(nowScrollPos);
            $('.pop-wrap').hide();
            $('.core, .abstract_cont').hide();
            self.focus();
            cp.focus();
        };
        $('.pop-wrap').find('.close, .close button').on('click', popClose);
        $('.pop-wrap').find('.pop-bg').on('click', popClose);

	});
	$('.close_all').click(function(){
		$(this).parents('.abstract_cont').hide();
	});

    $('.pop-wrap:not(.modalPop) .close').click(function(){
		$(this).parents('.pop-wrap').hide();
	});

}



function mnav() {
    $('header .nav .topRight .menu a.mo').click(function(){
        $('header .nav .navWrap').toggleClass('mopen');
        $('body').toggleClass('fixed');

    });

    $('.mtab__depth02').hide();
    $('.mtab__depth01').click(function(){

        $(this).toggleClass('is-open');

        if($(this).hasClass('is-open')){
        $(this).next().slideDown();
        }else{
        $(this).next().slideUp();
        }


    });



    
}

function searchModal() {
    $("header .nav .topRight .search a").click(function(){
        $(".modal.search").fadeIn();
        $('body').addClass('fixed');
      });
      
      $(".modal.search .modal-content .modal-body .modal-close").click(function(){
        $(".modal.search").fadeOut();
        $('body').removeClass('fixed');
      });
      
}

function toggleSite() {
    var cont_w = $('.inner').width();


    if(cont_w < 1024){
        $('header .gotoSite .d-flex .site').on("click",function(){
            $('header .gotoSite .d-flex ul' ).slideToggle('slow');
            $('header .gotoSite').toggleClass('on');
        });
    }else{
    }
	
	/*$('header .gotoSite .d-flex .site').click(function(){
		if(cont_w > 1200){
		}else{
            $('header .gotoSite .d-flex ul' ).slideToggle('slow');
            $('header .gotoSite').toggleClass('on');
		}
    });*/

}






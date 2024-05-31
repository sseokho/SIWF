$(document).ready(function(){
    bradcrumb();
    footerScript();
    liveSwiper();
    accordion();
    td_file();
    preventDefault();
    hisProgram();
    Num_ani();
})

function bradcrumb(){
   
    
}


function footerScript(){
    $('.header').load('footer.html', function() {
        $(".btn--goSel").click(function() {
	    	if($("#family_site option:selected").val() != "") {
	    		window.open($("#family_site option:selected").val());
	    	} else {
	    		alert("패밀리 사이트를 선택해주세요.");
	    	}
	    });
        $(".copyright span").attr('contenteditable','true');
    });
}


function liveSwiper() {
    var liveSwiper = new Swiper('.liveSwiper', {



        slidesPerView: 'auto',
        speed: 1000,
        
        loop: true,
        autoplay: {
            delay: 1000,
        },
        spaceBetween: 20,
        navigation: {
            nextEl: '.subContent__wide-top .swiper-button-next',
            prevEl: '.subContent__wide-top .swiper-button-prev'
        },
        breakpoints: {
            // 768px 이상에서는 3개의 슬라이드를 보여줌
            320: {
                centeredSlides: true,
            },
            // 1024px 이상에서는 5개의 슬라이드를 보여줌
            1025: {
                centeredSlides: false,
            }
        }
       

    });

    $('.subContent__wide-top .swiper-button-pause').click(function () {
        if ($(this).hasClass('off')) {
          $(this).removeClass('off');
          liveSwiper.autoplay.start();
        } else {
          $(this).addClass('off');
          liveSwiper.autoplay.stop();
        }
    });


  }

function accordion() {
    
    $(window).resize(function() {
        $(".accordion-wrap__item").removeClass('on');
        if (window.innerWidth < 1024) {  // 다바이스 크기가 1024이하일때
            $(".accordion-wrap__item.fix").addClass('on');
            $('.accordion-wrap__item').click(function (){
                $('.accordion-wrap__item').not($(this)).removeClass("on");
                $(this).addClass("on");
                
                if ($(this).hasClass('on')) {
                    $(this).children("a").removeClass("pre");
                    $(".accordion-wrap__item .cover.pre").addClass("pre");
                }else{
                    $(this).children("a").removeClass("pre");
                    $(".accordion-wrap__item .cover.pre").addClass("pre");
                }
            });
        } else {
            $(".accordion-wrap__item.fix").addClass('on');
            $('.accordion-wrap__item').hover(function () {
                if ($(this).hasClass('on')) {
                  $(this).removeClass('on');
                } else {
                  $(this).addClass('on');
                }

                if ($(".accordion-wrap__item").hasClass('on')) {
                    $(".accordion-wrap__item.fix").removeClass('on');
                } else{
                    $(".accordion-wrap__item.fix").addClass('on');
                }
            });
        }
        

    }).resize();


}

function preventDefault() {
    const links = document.querySelectorAll('.accordion-wrap__item .cover.pre');
    links.forEach(function(element) {
      element.addEventListener('click', function(e) {
        e.preventDefault();
      }, false);
    });
}


function td_file(){
    var td_file = $(".td-file")

    td_file.each((i,v) => {


        if(td_file.eq(i).find("a").length){
            td_file.eq(i).parent('tr').removeClass("noFIle");
        } else{
            td_file.eq(i).parent('tr').addClass("noFile");

        }


    })


}

function hisProgram(){

    $(".slider").each(function(index){
        let $this = $(this);
        let swiper = undefined;
        let slideNum =  $this.find('.swiper-slide').length //슬라이드 총 개수
        let slideInx = 0; //현재 슬라이드 index

        //디바이스 체크
        let oldWChk = window.innerWidth > 768 ? 'pc' : 'mo';
        sliderAct();
        $(window).on('resize', function () {
            let newWChk = window.innerWidth > 768 ? 'pc' : 'mo';
            if(newWChk != oldWChk){
                oldWChk = newWChk;
                sliderAct();
            }
        })

        function sliderAct(){
            //슬라이드 인덱스 클래스 추가
            $this.addClass(`slider${index}`);

            //슬라이드 초기화
            if (swiper != undefined){
                swiper.destroy();
                swiper = undefined;
            }

            //slidesPerView 옵션 설정
            let viewNum = oldWChk == 'pc' ? 5 : 2;
            //loop 옵션 체크
            let loopChk = slideNum > viewNum;

            swiper = new Swiper(`.slider${index} .inner`, {
                slidesPerView: viewNum,
                initialSlide :slideInx,
                spaceBetween: 0,
                slidesPerView: 1,
                
                loop: loopChk,
                pagination: {
                    el: $(`.slider${index} .swiper-pagination`)[0],
                    clickable : true,
                },
                on: {
                    activeIndexChange: function () {
                        slideInx = this.realIndex; //현재 슬라이드 index 갱신
                    }
                },
            });
        }
    });
}


function Num_ani(){
    // 숫자카운트
    const counter = (counterElement, max) => {
        let now = max;

        const handle = setInterval(() => {
            counterElement.innerHTML = Math.ceil(max - now).toLocaleString();

            if (now < 1) {
                clearInterval(handle);
            }

            const step = now / 10;
            now -= step;
        }, 30);
    };


    // 스크롤 이벤트
    const startCountersOnScroll = () => {
        const numSec = document.querySelector('.stat-box');
        const numSecOffsetTop = numSec.offsetTop;
        let started = false;

        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY >= numSecOffsetTop && !started) {
                const counters = document.querySelectorAll('.number');
                const maxValues = [61, 25709, 201, 1000000];
                counters.forEach((counterElement, index) => {
                    setTimeout(() => counter(counterElement, maxValues[index]), 0);
                });
                started = true;
                window.removeEventListener('scroll', handleScroll);
            }
        };

        window.addEventListener('scroll', handleScroll);
    };

    window.addEventListener('load', startCountersOnScroll);
}



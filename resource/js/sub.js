$(document).ready(function(){
    bradcrumb();
    liveSwiper();
    accordion();
    td_file();
    hisProgram();
})

function bradcrumb(){

    var one = $(".bradcrumb__tit.is-active").text();
    var two = $(".bradcrumb__tit:not(.is-active)").text();


    if(one == two){
        console.log("v");
        $(this).addClass("ho");
    } else{
        console.log("y");
    }


    $('.sub_header').load('sub_header.html', function() {
        $(".depth_1 > li> a").addClass("depth1_a");

        $(".depth_1 > li > a").click(function(){
            $(".depth_1 > li > a").removeClass('active');
            $(this).addClass('active');
        })



        var aa = $(".depth1_a");
        var aaClone = aa.clone();

        $(".bradcrumb__tit:not(.is-active) ~ .bradcrumb__links").append(aaClone);

        aa.each((i,v) => {



            var bradIsActive = $(".bradcrumb__tit.is-active").text();



            var depth1a = $(".depth1_a");

            var depth1aText = depth1a.eq(i).text();







            if(bradIsActive == depth1aText){
                depth1a.eq(i).addClass("include");
            }

        });




        var next = $(".include").next().children("li").find('a');
        var nextCopy = next.clone();
        console.log(next);
        $(".bradcrumb__tit.is-active").next().append(nextCopy);

        /*
        next.each((i,v)=> {


            console.log("ff",v);

        })
        */





    });






    $('.bradcrumb__tit').click(function(){
        $(this).next().slideToggle();
        $(this).parent().siblings().children('.bradcrumb__links').slideUp();
    })



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
        if (window.innerWidth < 1024) {  // 다바이스 크기가 480이상일때
            $(".accordion-wrap__item.fix").addClass('on');
            $('.accordion-wrap__item').click(function () {
                $('.accordion-wrap__item').not($(this)).removeClass("on");
                $(this).addClass("on");

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
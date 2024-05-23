$(document).ready(function () {
    headerScript(); // 헤더 전용 스크립트
    footerScript(); // 푸터 전용 스크립트
    tab();
    main_pop();
    /*dDay();*/
    callPop();
    mnav();
    searchModal();
    toggleSite();
    simpleBar();


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


        $('.depth_1 > li').hover(function(){
            $(this).children().next().toggleClass('active');
            if($(".depth_2").hasClass("active") === true){
                $(this).children('a').addClass('on');
            }else{
                $(this).children('a').removeClass('on');
            }
        });
        sideMenu();


        
        
        $(".depth_1 > li> a").addClass("depth1_a");

        
        
        var depth1a = $(".depth1_a");
        
        depth1a.each((i,v) => {
            var subCon = $(".sub-container");
            var depth1aEle = $(".depth1_a").eq(i);
            var depth1aTxt = $(".depth1_a").eq(i).text();
            console.log(depth1aEle);
            if($(subCon).is(".intro") === true) {
                if(depth1aTxt == "About"){
                    depth1aEle.addClass('active');
                }
            } else if($(subCon).is(".thisYear") === true){
                if(depth1aTxt == "SIWF 2024"){
                    depth1aEle.addClass('active');
                }
            } else if($(subCon).is(".news") === true){
                if(depth1aTxt == "Updates"){
                    depth1aEle.addClass('active');
                }
            } else if($(subCon).is(".history") === true){
                if(depth1aTxt == "Past Events"){
                    depth1aEle.addClass('active');
                }
            } else {
                $(".depth1_a").addClass('active');
            }
           
        });


        var aa = $(".depth1_a");
        var subMainTit = $(".sub-mainTit").text();
        $(".bradcrumb__tit.is-active").html(subMainTit);

        var toss = $(".depth1_a.active").next().html();
        $(".bradcrumb__tit.is-active").next(".bradcrumb__links").html(toss);

        aa.each((i,v) => {
            var bradActive = $(".bradcrumb__tit.is-active").text();
            var depth1a = $(".depth1_a");
            var depth1aText = depth1a.eq(i).text();
            if(bradActive == depth1aText){
                depth1a.eq(i).addClass("include");
            }
        });

        var aa = $(".depth1_a");
        var aaActive = $(".depth1_a.active").text();
        var aaClone = aa.clone();
        $(".bradcrumb__tit:not(.is-active)").text(aaActive);
        $(".bradcrumb__tit:not(.is-active) ~ .bradcrumb__links").html(aaClone);

        if($('.bradcrumb__tit.is-active').length){
            return false;
        }else{
            $(".bradcrumb-item:not(.next) .bradcrumb__tit").addClass("is-active");
        }
       
    });//

    $('.bradcrumb__tit').click(function(){
        $(this).next().slideToggle();
        $(this).parent().siblings().children('.bradcrumb__links').slideUp();
    })


};
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
function sideMenu(){

        $('.sitemap').click(function(){
          $(this).addClass('is-click');
            if($(this).hasClass('is-click')){
                $('.side-menu').addClass('is-open');
                $('body').addClass("overflow-hidden");

            }else{
                $('.side-menu').removeClass('is-open');
                $('body').removeClass("overflow-hidden");
            }
        });
        $('.side-menu--close').click(function(){
            $('.sitemap').removeClass('is-click');
            $(".side-menu").removeClass('is-open');
            $('body').removeClass("overflow-hidden");
        });
        $('.side-menu__depth02').hide();

        $('.side-menu__depth01:not(.no-dep)').click(function(){
          $(this).toggleClass('is-open');

          if($(this).hasClass('is-open')){
            $('.side-menu__depth01').not(this).removeClass("is-open")
            $('.side-menu__depth01').not(this).next().slideUp();

            $(this).next().slideDown();
          } else{
            $(this).next().slideUp();

          }

        });




}
function tab(){
    var a = $(".board-tab__list .board-tab__item");
    var b = a.length;

    for (let i=0;i<b;i++){
        $('.board-tab__link').eq(0).addClass('active');
        $('.board-tab-panel').eq(0).addClass('open');
        $(".board-tab__link").eq(i).on('click',function(){
            $('.board-tab__link').removeClass('active');
            $('.board-tab__link').eq(i).addClass('active');
            $('.board-tab-panel').removeClass('open');
            $('.board-tab-panel').eq(i).addClass('open');
        })
    }
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

function simpleBar(){
    var a = $(".y-scroll").length;
    console.log(a);
    for (let i=0;i<a;i++){
        new SimpleBar(document.querySelectorAll('.y-scroll')[i], {
            autoHide: false,
            scrollbarMinSize: 1,
            scrollbarMaxSize: 0,
            direction: 'ltr',
            timeout: 1000
        })
    }
}

function main_pop(){
    $(document).ready(function () {
        // 팝업창에 주어진 이름을 변수로 던져 저장된 쿠키가 있는지 확인
        var popup1 = getCookie('popup1');

        // 변수가 없을경우 팝업 출력
        if (!popup1) {
            popUpAction('popup1');
        }

        $(".btn_close").click(function(){
            $(".popup-main").addClass('hidden');
        })

    });

    // 쿠키 가져오기
    function getCookie(name) {
        var nameOfCookie = name + "=";
        var x = 0;
        while (x <= document.cookie.length) {
            var y = (x + nameOfCookie.length);

            if (document.cookie.substring(x, y) == nameOfCookie) {
                if ((endOfCookie = document.cookie.indexOf(";", y)) == -1)
                    endOfCookie = document.cookie.length;
                return unescape(document.cookie.substring(y, endOfCookie));
            }

            x = document.cookie.indexOf(" ", x) + 1;

            if (x == 0) break;
        }

        return "";
    } // 24시간 기준 쿠키 설정하기

    // expiredays 후의 클릭한 시간까지 쿠키 설정
    function setCookie24(name, value, expiredays) {
        var todayDate = new Date();

        todayDate.setDate(todayDate.getDate() + expiredays);

        document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";";
    }

    // 00:00 시 기준 쿠키 설정하기 // expiredays 의 새벽 00:00:00 까지 쿠키 설정
    function setCookie00(name, value, expiredays) {
        var todayDate = new Date(); todayDate = new Date(parseInt(todayDate.getTime() / 86400000) * 86400000 + 54000000);

        if (todayDate > new Date()) {
            expiredays = expiredays - 1;
        }

        todayDate.setDate(todayDate.getDate() + expiredays);

        document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";";
    }

    // 팝업출력
    function popUpAction(name) {
        // name으로 해당 팝업창 열기
        $("div[name=" + name + "]").fadeIn();
    }

    // 닫기버튼 클릭 이벤트
    $('.btn_close').click(function () {
        $(this).parent('.main_notice_pop').fadeOut();

        // 오늘하루 보지않기 체크 확인
        if ($("input:checkbox[name=today_close1]").is(":checked") == true) {
            setCookie00('popup1', "done", 1);
        }

        // name으로 해당 팝업창 닫기
        $(this).parent("div[name=" + name + "]").fadeOut();
    })
}








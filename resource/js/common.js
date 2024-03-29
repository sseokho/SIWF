$(document).ready(function () {
    callPop();
    PopIfCheck();
    mnav();
    searchModal();
    toggleSite();

    $(window).resize(function(){

        var width = window.innerWidth;

        if(width > 1024){

            $('body').removeClass('fixed');
            $('.navWrap').removeClass('mopen');
        }   

        else {

        }

    }).resize();



});

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

function PopIfCheck() {
    $('.popup.if-check').on('click', function(){
        if($("#no").is(":checked")){

            alert("개인정보 수집 이용에 동의해주세요");

        }else{

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
        }
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






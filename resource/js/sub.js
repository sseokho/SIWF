$(document).ready(function(){
    bradcrumb();
    liveSwiper();
    accordion();
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
$(document).ready(function(){
    bradcrumb();
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
        $(".depth_2").prev().addClass("depth1_a");

        

        
        var aa = $(".depth1_a");
        aa.each((i,v) => {

            
            
            var one = $(".bradcrumb__tit.is-active").text();
            var two = $(".depth1_a");
            var twoText = two.eq(i).text();
        

            if(one == twoText){
                two.eq(i).addClass("include");
            }
            
        });

        
   

        var next = $(".include").next().children("li").find('a');
        var nextCopy = next.clone();
        console.log(next);
        $(".bradcrumb__links").append(nextCopy);

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






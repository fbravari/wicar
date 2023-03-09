jQuery(document).ready(function($)
{
    if(screen.width < 1200){
        reordenarTabsMobile();
    }
    $(".acordeon-header a").click(function(e){
        e.preventDefault();
        var target = $(this).data("target");
        //console.log(target);
        if(screen.width < 1200){
            $(".acordeon-holder .acordeon-item").each(function(){
                $(this).find(".acordeon-tab-item").addClass("d-none");
            })
            $("#"+target).removeClass("d-none");
            $('html, body').animate({
                scrollTop: $(this).offset().top
              }, 1000);
        }else{
            $(".acordeon-tab-holder .acordeon-tab-item").each(function(){
                $(this).addClass("d-none");
            })
            $("#"+target).removeClass("d-none");
        }
        $(".acordeon-holder .acordeon-item").each(function(){
            $(this).find(".acordeon-header").find("a").removeClass("active");
        })
        $(this).addClass("active");
       
    })
    $('.navbar-nav a[href^="#"]').click(function(e){
        e.preventDefault();
        var target = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(target).offset().top
          }, 1000);
    })

    $('#carrusel-cuando-usar').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:true,
        center:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:3,
                nav:true
            },
            1000:{
                items:3,
                nav:true
            }
        }
    })

    $(".tabla-marcas-row .marca-header a").click(function(e){
        e.preventDefault();
        if(screen.width < 1200){
            $(this).toggleClass("open");
            $(this).parent().parent().toggleClass("open");
            $('html, body').animate({
                scrollTop: $(this).parent().parent().offset().top
              }, 1000);
        }
    })

});

function reordenarTabsMobile(){
    $(".acordeon-tab-holder .acordeon-tab-item").each(function(){
        var thisIde = $(this).attr("id");
        var thisHtml = $(this).prop("outerHTML");
        $("#"+thisIde +"-holder").append(thisHtml);
        //console.log(thisHtml);
    })
    $(".acordeon-tab-holder").remove();
}
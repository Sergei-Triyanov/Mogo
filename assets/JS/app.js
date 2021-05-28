$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrolloffset = $(window).scrollTop();
    /*Fixed Header*/
    checkScroll(scrolloffset);

    $(window).on("scroll", function (){

        scrolloffset = $(this).scrollTop();

        checkScroll(scrolloffset);

    });


    function checkScroll(scrolloffset) {
        if( scrolloffset >= introH ) {
            header.addClass("fixed");
        } else{
            header.removeClass("fixed")
        }
    }

    /*Smooth Scroll*/
    $("[data-scroll]").on("click", function (event){
        event.preventDefault();

        var $this = $(this),
            blockId=$(this).data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $("#item div").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500)
    });



    /*Menu nav toggle*/
    $("#nav_toggle").on("click", function (event){
       event.preventDefault();


       $(this).toggleClass("active");
       $("#nav").toggleClass("active");

    });

    $("#nav").on("click", function (event) {
         $("#nav_toggle").removeClass("active");
          $(this).removeClass("active");
    })

    /*Intro*/
    $("[data-first]").on("click", function (event) {
        event.preventDefault();
        var $this = $(this),
            blockId=$(this).data('first'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $("#item div").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500)

    });


    /*Collapse*/
    $("[data-collapse]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId=$(this).data('collapse');

        $this.toggleClass("active");

    });


    /*Slider*/
    $("[data-slider]").slick({

        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
});
jQuery.event.special.touchstart = {
    setup: function( _, ns, handle ) {
        this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault") });
    }
};
jQuery.event.special.touchmove = {
    setup: function( _, ns, handle ) {
        this.addEventListener("touchmove", handle, { passive: !ns.includes("noPreventDefault") });
    }
};

/******* NAV ******/
$(document).ready(function (){

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

    if($('body').hasClass('post')){
        $('.post-slider').slick({
            arrows: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 1500,
            speed: 1500,
            vertical: true,
            verticalSwiping:true,
            pauseOnHover:false,
    });

    }

    $('.burger').on('click', function () {
        $(this).toggleClass('active');
        $('nav').toggleClass('active');
    });
});

$(document).scroll(function () {
    var top = $(this).scrollTop();
    console.log(top);
    if($(window).width() >= 992){
        if (top > 50) {
            $('.texto').addClass('scroll');
            $('.notas').addClass('scrollnotas');
            $('.prevnext').addClass('hide');
        } else {
            $('.texto').removeClass('scroll');
            $('.notas').removeClass('scrollnotas');
            $('.prevnext').removeClass('hide');
        }
    }
});





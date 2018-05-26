$(document).ready(function () {
    $("#carouselOne").owlCarousel({
		items: 1,
        autoplay: false,
        loop: false,
    });
    $("#carouselTwo").owlCarousel({
		items: 1,
        autoplay: false,
        loop: false,

    });
    $("#carouselThree").owlCarousel({
        autoplay: false,
        loop: false,
        responsive: {
            0: {
            items: 1,
            slideBy: 1,
            dots: true,
            nav: false
            },
            1081: {
            items: 2,
            slideBy: 2,
            dots: false,
            nav: true
            }
        },
        margin: 20,
    });
    $('.size').click(function () {
        $('.size').removeClass('activeButton');
        $(this).addClass('activeButton');
    });
      
});
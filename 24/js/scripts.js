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
		items: 2,
        autoplay: false,
        loop: false,
        nav: true,
        dots: false,
	});
});
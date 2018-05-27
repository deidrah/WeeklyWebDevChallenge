$(document).ready(function() {

	if ($(window).width() > 601) {
	$(window).on("scroll touchmove", function () {
		$('nav').toggleClass('navSmall', $(document).scrollTop() > 500);
		$('ul').toggleClass('ulSmall', $(document).scrollTop() > 500);
	});
}

	var init = function() {
		if ($(window).width() < 601) {
			$("#menu").addClass("mobile");
		}
		else {
			$("#menu").removeClass("mobile");
		}
	};

	init();
	$(window).resize(init);

	$('.mobile').click(function(){
		$(this).find('ul').toggleClass('toggle');
	});

	var map = document.getElementById('map');

	if (map) {
	var gdansk = {lat: 54.349853, lng: 18.647186};
	var mapa = new google.maps.Map(map, {
		zoom: 16,
		center: gdansk
	});

	var marker = new google.maps.Marker({
		position: gdansk,
		map: mapa,
		icon: 'img/map.png',
	}); 
}
});
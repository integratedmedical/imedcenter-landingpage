$(document).ready(function(){

	$('.img-bg').each(function() {
		$(this).css('background-image', 'url(' + $(this).find('> img').attr('src') + ')').find('> img').hide();
	});

	$('<a href="#" class="open-menu"><span></span><span></span><span></span>Open Menu</a>').appendTo('#header');
	$('<span class="fader"/>').appendTo('#header');
	$('.open-menu').click(function(){
		$('body').toggleClass('menu-opened');
		return false;
	});
	$('.fader').click(function(){
		$('body').removeClass('menu-opened');
	});
	$("#main-nav li").has("ul").addClass("has-drop");
	$("#main-nav ul > .has-drop").append('<span class="opener"></span>');
	$('#main-nav .has-drop > .opener').click(function(){
		$(this).siblings('ul').slideToggle();
		$(this).closest('li').toggleClass('opened');
		$(this).closest('li').siblings('.opened').removeClass('opened').children('ul').slideUp();
	});

	if($('#map').length){
		function initMap() {
			var myLatLng = {lat: 41.389448, lng: -73.500697};
			
			var map = new google.maps.Map(document.getElementById('map'), {
				zoom: 10,
				center: myLatLng,
				scrollwheel: false
			});
			
			var marker = new google.maps.Marker({
				position: myLatLng,
				map: map,
				title: 'Integrated Medical of Danbury LLC'
			});
		}
		initMap();
	}

}); // ready
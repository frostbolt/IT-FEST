$(window).scroll(function() {
	if ($(window).scrollTop() > 295) {
		$('.main_menu').addClass('pinned');
	} else {
		$('.main_menu').removeClass('pinned')
	}
});

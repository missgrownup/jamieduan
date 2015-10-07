module.exports = function(element) {
	var element = $(element),
		links = $('a[href ^= "#"]', element),
		offset = 60,
		navLine = $('.nav-line');

		links.on('click', function(e) {
			e.preventDefault();
			var hash = this.hash,
				target = $(hash);

			$('html, body').stop().animate({
				'scrollTop': target.offset().top - offset
			}, 500, 'swing', function() {
				if(history.pushState) {
				    history.pushState(null, null, hash);
				}
				else {
				    location.hash = hash;
				}
			});

			if(navLine.hasClass('is-open')) {
				navLine.removeClass('is-open');
				$('.navbar-menu', element).slideToggle('hide');
			}
		});
};
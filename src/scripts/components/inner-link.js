module.exports = function(element) {
	var element = $(element),
		links = $('a[href ^= "#"]', element),
		offset = 60,
		navLine = $('.nav-line'),
		timeout;

	$('a[href = "#about"]', element).addClass('active');

	navOnScroll();

	links.on('click', function(e) {
		e.preventDefault();
		var hash = this.hash,
			target = $(hash);

		links.each(function() {
			$(this).removeClass('active');
		});

		$(this).addClass('active');

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

	$(window).on('scroll', function() {
		clearTimeout(timeout);

		timeout = setTimeout(function() {
			navOnScroll();
		}, 100);
	});

	function navOnScroll() {
		var scrollPos = $('body').scrollTop();

		links.each(function() {
			var currLink = $(this),
				refSection = $(currLink.attr('href')),
				refTop = refSection.offset().top;

			if ((Math.floor(refTop) - offset) <= scrollPos && (refTop + refSection.outerHeight()) > scrollPos) {
				links.each(function() {
					$(this).removeClass('active');
				});
				currLink.addClass('active');
			} else {
				currLink.removeClass('active');
			}
		});
	}
};
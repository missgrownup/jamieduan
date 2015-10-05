module.exports = function(element) {
	var element = $(element),
		links = $('a[href ^= "#"]', element),
		offset = 60;

		links.on('click', function(e) {
			e.preventDefault();
			var target = $(this.hash);

			$('html, body').stop().animate({
				'scrollTop': target.offset().top - offset
			}, 500, 'swing', function() {
				window.location.hash = target;
			});
		});
}
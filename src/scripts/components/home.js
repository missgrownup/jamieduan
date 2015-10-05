module.exports = function(element) {
	var element = $(element),
		textHeight = 44,
		timeout;

	resizeHome();

	$(window).on('resize', function(e) {
		clearTimeout(timeout);

		timeoutResize = setTimeout(function () {
			resizeHome();
		}, 300);
	})
	.trigger('resize');

	function resizeHome() {
		var height = $(window).height(),
			width = $(window).width();
		element.height(height);
		element.width(width);

		$('h2', element).css('top', height/3);
	}
};
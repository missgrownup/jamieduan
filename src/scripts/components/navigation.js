module.exports = function(element) {
	$('.nav-burger', element).on('click', function(e) {
		e.preventDefault();
		$('.navbar-menu', element).slideToggle();
		$('.nav-line', element).toggleClass('is-open');
	});
}
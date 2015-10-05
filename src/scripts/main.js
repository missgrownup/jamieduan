(function ($) {
	var SubmitForm = require('./components/submit-form.js'),
		InnerLink = require('./components/inner-link.js'),
		SlideShow = require('./components/slide-show.js');

	$(function () {
		new SubmitForm('.submit-btn', '#contact-form');
		new InnerLink('.navbar-menu');
		new SlideShow('.slide-show');
	});

}(jQuery));
(function ($) {
	var SubmitForm = require('./components/submit-form.js'),
		InnerLink = require('./components/inner-link.js'),
		SlideShow = require('./components/slide-show.js'),
		Navigation = require('./components/navigation.js');
		Home = require('./components/home.js');

	$(function () {
		new SubmitForm('.submit-btn', '#contact-form');
		new InnerLink('.navbar');
		new SlideShow('.slide-show');
		new Navigation('.navbar');
		new Home('.home');
	});

}(jQuery));
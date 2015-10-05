module.exports = function(button, form) {
	var submit_btn = $(button),
		form = $(form),
		url = './submit-form.php',
		succeed = $('.succeed'),
		fail = $('.fail');

	submit_btn.on('click', function() {
		form.submit();
	})

	form.validate({
		rules: {
			name: 'required',
			email: {
				required: true,
				email: true
			},
			subject: 'required',
			message: 'required'
		},
		messages: {
			name: 'Please enter your name.',
			email: {
				required: 'Please enter your email.',
				email: 'Please enter a valid email address.'
			},
			subject: 'Please enter your subject.',
			message: 'Please enter your message.'
		},
		errorPlacement: function(error, element) {
			error.appendTo(element.parent());
		},
		submitHandler: function() {
			$.ajax({
				type: "POST",
				url: url,
				data: form.serialize(),
				success: function (data) {
					form.addClass('is-hide');

					if(data == 1) {
						succeed.addClass('is-show');
					} else if(data == 0) {
						fail.addClass('is-show');
					}
				}
			});
		}
	});
}
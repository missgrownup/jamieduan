SLIDEWIDTH = 800;

module.exports = function(element) {
	var element = $(element),
		slideList = $('.slide-list', element),
		slides = $('.slide', element),
		slidesLength = slides.length,
		paginationSection = $('.paginations', element),
		n = 0,
		timeout;

	slideList.width(SLIDEWIDTH * slidesLength);

	slides.each(function() {
		$(this).attr("data-count", n);
		n++;
	});

	makePagination();
	setSlide(0);

	$('.next', element).on('click', function(e) {
		e.preventDefault();
		nextSlide();
	});

	$('.previous', element).on('click', function(e) {
		e.preventDefault();
		previousSlide();
	});

	$('.pagination', paginationSection).on('click', function(e) {
		e.preventDefault();
		setSlide($(this).data('count'));
	})


	function autoPlay() {
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			nextSlide();
		}, 6000);
	}

	function nextSlide() {
		var currentIndex = $('.current', element).data('count');

		if(currentIndex != slidesLength - 1) {
			setSlide(currentIndex + 1);
		} else {
			setSlide(0);
		}
	}

	function previousSlide() {
		var currentIndex = $('.current', element).data('count');

		if(currentIndex != 0) {
			setSlide(currentIndex - 1);
		} else {
			setSlide(slidesLength - 1);
		}
	}

	function setSlide(index) {
		var paginations = $('a', paginationSection);

		$('.current', element).removeClass('current');
		slideList.css('left', - index * SLIDEWIDTH);
		slides.filter('[data-count=' + index + ']').addClass('current');
		paginations.filter('[data-count=' + index + ']').addClass('current');
		autoPlay();
	}

	function makePagination() {
		for(var i = 0; i < slidesLength; i++) {
			$('<a/>', {
				html: i + 1,
				'data-count': i,
				class: 'pagination'
				}).appendTo(paginationSection);
		}
	}
}











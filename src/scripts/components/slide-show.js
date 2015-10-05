module.exports = function(element) {
	var element = $(element),
		slideWindow = $('.slide-window', element),
		slideList = $('.slide-list', element),
		slides = $('.slide', element),
		slidesLength = slides.length,
		paginationSection = $('.paginations', element),
		n = 0,
		timeout,
		timeoutResize,
		slideWith;

	$(window).on('resize', function(e) {
		clearTimeout(timeoutResize);

		timeoutResize = setTimeout(function () {
			setWidth();
			autoPlay;
		}, 300);
	})
	.trigger('resize');

	slides.each(function() {
		$(this).attr("data-count", n);
		n++;
	});

	setWidth();
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

	function setWidth() {
		slideWidth = slideWindow.width();
		$('img', slideList).width(slideWidth);
		slideList.width(slideWidth * slidesLength);
	}

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
		var paginations = $('a', paginationSection),
			current = slides.filter('[data-count=' + index + ']');

		$('.current', element).removeClass('current');

		slides.not('.current').find('.slide-name, .slide-place').removeClass('is-show');

		slideList.css('left', - index * slideWidth);
		current.addClass('current');
		paginations.filter('[data-count=' + index + ']').addClass('current');
		setTimeout(function() {
			$('.slide-name', current).addClass('is-show');
		}, 800);

		setTimeout(function() {
			$('.slide-place', current).addClass('is-show');
		}, 1500);

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
};

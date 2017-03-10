$(document).ready(function() {
	

$(window).scroll(function() {
	var wScroll =  $(this).scrollTop();


// features elements
	if (wScroll > ($('.features_trigger').offset().top - ($(window).height()/2))){
		$('.features_element').each(function(index) {
			setTimeout(function(){
				$('.features_element').eq(index).addClass('show rotate');
			}, 100 * (index + 1))
		});
	};

// razbor img
	if (wScroll > ($('.razbor_trigger').offset().top - ($(window).height()/2))){
		$('.razbor_img').each(function(index) {
			setTimeout(function(){
				$('.razbor_img').eq(index).addClass('show');
			}, 100 * (index + 1))
		});
	};


// blocks img
	if (wScroll > ($('.blocks_trigger').offset().top - ($(window).height()/2))){
		$('.block_element').each(function(index) {
			setTimeout(function(){
				$('.block_element').eq(index).addClass('show');
			}, 100 * (index + 1))
		});
	};	

// complect img show
	if (wScroll > ($('.complect_trigger').offset().top - ($(window).height()/2))){
		$('.compl_element').each(function(index) {
			setTimeout(function(){
				$('.compl_element').eq(index).addClass('show');
			}, 100 * (index + 1))
		});
	};	

// char element show
	if (wScroll > ($('.char_trigger').offset().top - ($(window).height()/2))){
		$('.char_element').each(function(index) {
			setTimeout(function(){
				$('.char_element').eq(index).addClass('show');
			}, 100 * (index + 1))
		});
	};		




});//$(window).scroll-function END




// летающая помидорка

$('.tomato_container').addClass('fly');



}); //$(document).ready-func END